import React, { useState } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import copy from "copy-to-clipboard";

import upvote from "../../assets/sort-up.svg";
import downvote from "../../assets/sort-down.svg";
import Avatar from "../../components/Avatar/Avatar";
import DisplayAnswer from "./DisplayAnswer";
import {
  postAnswer,
  deleteQuestion,
  voteQuestion,
} from "../../actions/question";

const QuestionsDetails = () => {
  const { id } = useParams();
  const questionsList = useSelector((state) => state.questionsReducer);

  const [Answer, setAnswer] = useState("");
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);
  const location = useLocation();
  const url = "http://localhost:3000";

  const handlePostAns = (e, answerLength) => {
    e.preventDefault();
    if (User === null) {
      alert("Login or Signup to answer a question");
      Navigate("/Auth");
    } else {
      if (Answer === "") {
        alert("Enter an answer before submitting");
      } else {
        dispatch(
          postAnswer({
            id,
            noOfAnswers: answerLength + 1,
            answerBody: Answer,
            userAnswered: User.result.name,
          })
        );
        setAnswer("");
      }
    }
  };

  const handleShare = () => {
    copy(url + location.pathname);
    alert("Copied url : " + url + location.pathname);
  };

  const handleDelete = () => {
    dispatch(deleteQuestion(id, Navigate));
  };

  const handleUpVote = () => {
    if (User === null) {
      alert("Login or Signup to up vote a question");
      Navigate("/Auth");
    } else {
      dispatch(voteQuestion(id, "upVote"));
    }
  };

  const handleDownVote = () => {
    if (User === null) {
      alert("Login or Signup to down vote a question");
      Navigate("/Auth");
    } else {
      dispatch(voteQuestion(id, "downVote"));
    }
  };

  return (
    <div className="p-6 text-gray-900  dark:text-gray-100 min-h-screen">
  {questionsList.data === null ? (
    <h1 className="text-center text-2xl font-semibold my-8">Loading...</h1>
  ) : (
    <>
      {questionsList.data
        .filter((question) => question._id === id)
        .map((question) => (
          <div key={question._id} className="space-y-8">
            <section className="space-y-6 p-8 bg-white border rounded-lg shadow-xl dark:bg-gray-800 transition-colors duration-300">
              <h1 className="text-3xl font-bold">{question.questionTitle}</h1>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="flex flex-col items-center space-y-2 lg:col-span-2">
                  <img
                    src={upvote}
                    alt="Upvote"
                    width="24"
                    className="cursor-pointer hover:scale-110 transition-transform duration-150"
                    onClick={handleUpVote}
                  />
                  <p className="font-semibold text-lg">{question.upVote.length - question.downVote.length}</p>
                  <img
                    src={downvote}
                    alt="Downvote"
                    width="24"
                    className="cursor-pointer hover:scale-110 transition-transform duration-150"
                    onClick={handleDownVote}
                  />
                </div>
                <div className="lg:col-span-10 space-y-4">
                  <p className="text-lg leading-relaxed">{question.questionBody}</p>
                  <div className="flex flex-wrap gap-2">
                    {question.questionTags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-blue-500 text-white text-sm rounded-lg dark:bg-blue-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center mt-6">
                    <div className="space-x-4">
                      <button
                        onClick={handleShare}
                        className="px-4 py-2 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600 transition-colors duration-150"
                      >
                        Share
                      </button>
                      {User?.result?._id === question?.userId && (
                        <button
                          onClick={handleDelete}
                          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-150"
                        >
                          Delete
                        </button>
                      )}
                    </div>
                    <div className="flex items-center space-x-3">
                      <p className="text-sm">asked {moment(question.askedOn).fromNow()}</p>
                      <Link
                        to={`/Users/${question.userId}`}
                        className="flex items-center space-x-2 text-blue-500 hover:underline"
                      >
                        <Avatar backgroundColor="orange" px="8px" py="5px" borderRadius="4px">
                          {question.userPosted.charAt(0).toUpperCase()}
                        </Avatar>
                        <span>{question.userPosted}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {question.noOfAnswers !== 0 && (
              <section className="mt-8 space-y-4">
                <h3 className="text-2xl font-semibold">{question.noOfAnswers} Answers</h3>
                <DisplayAnswer question={question} handleShare={handleShare} />
              </section>
            )}
            <section className="space-y-6 mt-8 p-6 bg-white border rounded-lg shadow-xl dark:bg-gray-800 transition-colors duration-300">
              <h3 className="text-xl font-semibold">Your Answer</h3>
              <form
                onSubmit={(e) => handlePostAns(e, question.answer.length)}
                className="space-y-4"
              >
                <textarea
                  value={Answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 transition-colors duration-150"
                  rows="6"
                ></textarea>
                <button
                  type="submit"
                  className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-150 dark:bg-blue-600 dark:hover:bg-blue-700"
                >
                  Post Your Answer
                </button>
              </form>
              <p className="text-sm mt-4">
                Browse other questions tagged{" "}
                {question.questionTags.map((tag) => (
                  <Link to="/Tags" key={tag} className="text-blue-500 hover:underline">
                    {tag}
                  </Link>
                ))}{" "}
                or{" "}
                <Link
                  to="/AskQuestion"
                  className="text-blue-500 hover:underline"
                >
                  ask your own question
                </Link>.
              </p>
            </section>
          </div>
        ))}
    </>
  )}
</div>

  
  );
};

export default QuestionsDetails;
