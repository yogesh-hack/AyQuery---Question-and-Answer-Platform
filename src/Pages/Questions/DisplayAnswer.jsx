import React from "react";
import moment from "moment";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Avatar from "../../components/Avatar/Avatar";
import { deleteAnswer } from "../../actions/question";

const DisplayAnswer = ({ question, handleShare }) => {
  const User = useSelector((state) => state.currentUserReducer);
  const { id } = useParams();
  const dispatch = useDispatch();
  const handleDelete = (answerId, noOfAnswers) => {
    dispatch(deleteAnswer(id, answerId, noOfAnswers - 1));
  };
  return (
    <div>
  {question.answer.map((ans) => (
    <div className="display-ans space-y-4" key={ans._id}>
      <p className="text-base">{ans.answerBody}</p>
      <div className="question-actions-user flex justify-between mt-4">
        <div>
          <button
            type="button"
            onClick={handleShare}
            className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          >
            Share
          </button>
          {User?.result?._id === ans?.userId && (
            <button
              type="button"
              onClick={() => handleDelete(ans._id, question.noOfAnswers)}
              className="ml-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <p className="text-sm">answered {moment(ans.answeredOn).fromNow()}</p>
          <Link
            to={`/Users/${ans.userId}`}
            className="user-link text-blue-500 hover:underline"
          >
            <Avatar
              backgroundColor="lightgreen"
              px="8px"
              py="5px"
              borderRadius="4px"
            >
              {ans.userAnswered.charAt(0).toUpperCase()}
            </Avatar>
            <div>{ans.userAnswered}</div>
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>

  );
};

export default DisplayAnswer;
