import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Media from "../Media/Media";
import Loading from "../../assets/Loading.gif";

const MediaMain = () => {
  const location = useLocation();
  const user = 1;  // Mock user; replace with actual user logic
  const navigate = useNavigate();

const tweetsList = useSelector((state) => state.tweetsReducer);
  console.log("tweetsList", tweetsList);
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
      {/* Content Rendering based on the active tab */}
      <div className="mt-4">
              <div className="space-y-4">
                <Media/>
              </div>
      </div>
    </div>
  );
};

export default MediaMain;
