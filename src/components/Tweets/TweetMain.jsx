import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Media from "../Media/Media";
import Loading from "../../assets/Loading.gif";
import TweetsList from "../Tweets/TweetsList";

const TweetMain = () => {
  const location = useLocation();
  const user = 1;  // Mock user; replace with actual user logic
  const navigate = useNavigate();

const tweetsList = useSelector((state) => state.tweetsReducer);
  console.log("tweetsList", tweetsList);

  const [activeTab, setActiveTab] = useState("Trending");
const tabs = ["Trending", "Newest", "Following"];
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
      </div>

      {/* Content Rendering based on the active tab */}
      <div className="mt-4">
        {tweetsList.data === null ? (
          <img src={Loading} className="text-3xl text-center mx-auto"/>
        ) : (
          <>
            
            {/* Conditionally render content */}
            {activeTab === "Trending" && (
              <div className="space-y-4">
                 <TweetsList tweetsList={tweetsList.data}/>
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

export default TweetMain;
