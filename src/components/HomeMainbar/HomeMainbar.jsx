import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import QuestionList from "./QuestionList";

const HomeMainbar = () => {
  const location = useLocation();
  const user = 1;
  const navigate = useNavigate();

  const questionsList = useSelector((state) => state.questionsReducer);

  const checkAuth = () => {
    if (user === null) {
      alert("login or signup to ask a question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };

  return (
    <div className="container mx-auto mt-10 py-6 px-4">
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        {location.pathname === "/" ? "Top Questions" : "All Questions"}
      </h1>
      <button
        onClick={checkAuth}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none"
      >
        Ask Question
      </button>
    </div>
    
    <div class="p-3 text-lg font-bold border-b border-solid border-grey-light">
                <a href="#" class="text-black mr-6 no-underline hover-underline dark:text-white">Tweets</a>
                <a href="#" class="mr-6 text-teal no-underline hover:underline dark:text-white">Tweets &amp; Replies</a>
                <a href="#" class="text-teal no-underline hover:underline dark:text-white">Media</a>
            </div>
    <div className="mt-4">
      {questionsList.data === null ? (
        <h1 className="text-xl text-center text-gray-500">Loading...</h1>
      ) : (
        <>
          <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
            {questionsList.data.length} questions
          </p>
          <div className="space-y-4">
            <QuestionList questionsList={questionsList.data} />
          </div>
        </>
      )}
    </div>
    </div>
  );
};

export default HomeMainbar;
