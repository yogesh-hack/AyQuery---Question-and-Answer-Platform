import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { askQuestion } from "../../actions/question";

const AskQuestion = () => {
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionBody, setQuestionBody] = useState("");
  const [questionTags, setQuestionTags] = useState("");

  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (User) {
      if (questionTitle && questionBody && questionTags) {
        dispatch(
          askQuestion(
            {
              questionTitle,
              questionBody,
              questionTags,
              userPosted: User.result.name,
            },
            navigate
          )
        );
      } else alert("Please enter all the fields");
    } else alert("Login to ask question");
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setQuestionBody(questionBody + "\n");
    }
  };
  return (
    <div className="ask-question bg-gray-50 dark:bg-gray-900 p-8 pt-24 rounded-lg shadow-lg transition-colors duration-300">
    <div className="ask-ques-container max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center mb-6 text-gray-900 dark:text-gray-100">
        Ask a Public Question
      </h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="ask-form-container space-y-6">
          
          <label htmlFor="ask-ques-title" className="block">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Title</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Be specific and imagine you’re asking a question to another person.
            </p>
            <input
              type="text"
              id="ask-ques-title"
              onChange={(e) => setQuestionTitle(e.target.value)}
              placeholder="e.g., Is there an R function for finding the index of an element in a vector?"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 transition-colors duration-300"
            />
          </label>
  
          <label htmlFor="ask-ques-body" className="block">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Body</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Include all the information someone would need to answer your question.
            </p>
            <textarea
              id="ask-ques-body"
              onChange={(e) => setQuestionBody(e.target.value)}
              cols="30"
              rows="10"
              onKeyPress={handleEnter}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 transition-colors duration-300"
            ></textarea>
          </label>
  
          <label htmlFor="ask-ques-tags" className="block">
            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Tags</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              Add up to 5 tags to describe what your question is about.
            </p>
            <input
              type="text"
              id="ask-ques-tags"
              onChange={(e) => setQuestionTags(e.target.value.split(" "))}
              placeholder="e.g., (xml typescript wordpress)"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 transition-colors duration-300"
            />
          </label>
        </div>
  
        <div className="flex justify-center mt-8">
          <input
            type="submit"
            value="Review Your Question"
            className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer transition-colors duration-300 dark:bg-indigo-500 dark:hover:bg-indigo-600"
          />
        </div>
      </form>
    </div>
  </div>
  

  );
};

export default AskQuestion;
