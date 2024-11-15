import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import QuestionList from "./QuestionList";
import Tweets from "../Tweets/Tweets";
import Media from "../Media/Media";

const HomeMainbar = () => {
  const location = useLocation();
  const user = 1;  // Mock user; replace with actual user logic
  const navigate = useNavigate();

  const questionsList = useSelector((state) => state.questionsReducer);
  
  // State to track active tab (Questions, Tweets, Media)
  const [activeTab, setActiveTab] = useState("questions");

  const checkAuth = () => {
    if (user === null) {
      alert("Login or signup to ask a question");
      navigate("/Auth");
    } else {
      navigate("/AskQuestion");
    }
  };

  return (
    <div className="container mx-auto py-6 px-4">
      <div className="flex justify-between items-center mb-6">
        {/* <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          {location.pathname === "/" ? "Top Questions" : "All Questions"}
        </h1> */}
     
      </div>
      
      {/* Tab navigation */}
      <div className="p-3 flex items-center justify-between  border-b border-solid border-grey-light">
        <div>
        <a
          href="#"
          onClick={() => setActiveTab("questions")}
          className={`text-black mr-6 no-underline text-lg font-bold hover-underline dark:text-white ${activeTab === "questions" ? "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 p-2 rounded-full shadow-lg hadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-semibold font-semibold" : ""}`}
        >
          Queries
        </a>
        <a
          href="#"
          onClick={() => setActiveTab("tweets")}
          className={`mr-6 text-teal no-underline text-lg font-bold hover:underline dark:text-white ${activeTab === "tweets" ? "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 p-2 rounded-full shadow-lg hadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-semibold font-semibold" : ""}`}
        >
          Tweets
        </a>
        <a
          href="#"
          onClick={() => setActiveTab("media")}
          className={`text-teal no-underline text-lg font-bold hover:underline dark:text-white ${activeTab === "media" ? "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 p-2 rounded-full shadow-lg hadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-semibold" : ""}`}
        >
          Media
        </a>
        </div>
        <button
          onClick={checkAuth}
          className="px-4 py-2 float-right text-white rounded-lg shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          Ask Question
        </button>
      </div>

      {/* Content Rendering based on the active tab */}
      <div className="mt-4">
        {questionsList.data === null ? (
          <h1 className="text-xl text-center text-gray-500">Loading...</h1>
        ) : (
          <>
            {/* <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
              {questionsList.data.length} questions
            </p> */}
              
            
            {/* Conditionally render content */}
            {activeTab === "questions" && (
              <div className="space-y-4">
                <QuestionList questionsList={questionsList.data} />
              </div>
            )}

            {activeTab === "tweets" && (
              <div className="space-y-4">
                <Tweets/>
              </div>
            )}

            {activeTab === "media" && (
              <div className="space-y-4">
                <Media/>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainbar;
