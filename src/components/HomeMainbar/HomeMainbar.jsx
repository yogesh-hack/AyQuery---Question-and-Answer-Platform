import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import QuestionList from "./QuestionList";
import Media from "../Media/Media";
import Loading from "../../assets/Loading.gif";
import TweetsList from "../Tweets/TweetsList";
import ModernLoader from "../ModernLoader";

const HomeMainbar = () => {
  const location = useLocation();
  const user = 1;  // Mock user; replace with actual user logic
  const navigate = useNavigate();

  const questionsList = useSelector((state) => state.questionsReducer);

  const [activeTab, setActiveTab] = useState("Popular");
const tabs = ["Popular", "Newest", "Following"];
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
      {/* Tab navigation */}
      <div className="p-3 flex items-center justify-between  border-b border-solid border-grey-light">
        <div className="flex space-x-6 bg-transparent dark:bg-gray-900 px-4 py-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`relative text-sm font-medium transition-colors duration-200 
            ${
              activeTab === tab
                ? "text-indigo-500 dark:text-indigo-400"
                : "text-gray-500 dark:text-gray-400"
            }
            hover:text-indigo-500 dark:hover:text-indigo-400
          `}
        >
          {tab}
          {activeTab === tab && (
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-indigo-500 dark:bg-indigo-400 rounded-full" />
          )}
        </button>
      ))}
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
          <ModernLoader/>
        ) : (
          <>
            {/* <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">
              {questionsList.data.length} questions
            </p> */}
              
            
            {/* Conditionally render content */}
            {activeTab === "Popular" && (
              <div className="space-y-4">
                <QuestionList questionsList={questionsList.data} />
              </div>
            )}

            {activeTab === "tweets" && (
              <div className="space-y-4">
               
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
