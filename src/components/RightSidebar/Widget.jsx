import React from "react";
import comment from "../../assets/comment-alt-solid.svg";
import pen from "../../assets/pen-solid.svg";
import blackLogo from "../../assets/blacklogo.svg";

const Widget = () => {
  return (
    <div className="widget space-y-6">
    <h4 className="text-xl font-semibold">The Overflow Blog</h4>
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <img src={pen} alt="pen" width="18" />
        <p className="text-gray-700 dark:text-gray-300">
          Observability is key to the future of software (and your DevOps career)
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <img src={pen} alt="pen" width="18" />
        <p className="text-gray-700 dark:text-gray-300">Podcast 374: How valuable is your screen name?</p>
      </div>
    </div>
  
    <h4 className="text-xl font-semibold">Featured on Meta</h4>
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <img src={comment} alt="comment" width="18" />
        <p className="text-gray-700 dark:text-gray-300">Review queue workflows - Final release....</p>
      </div>
      <div className="flex items-center space-x-2">
        <img src={comment} alt="comment" width="18" />
        <p className="text-gray-700 dark:text-gray-300">
          Please welcome Valued Associates: #958 - V2Blast #959 - SpencerG
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <img src={blackLogo} alt="blackLogo" width="18" />
        <p className="text-gray-700 dark:text-gray-300">
          Outdated Answers: accepted answer is now unpinned on Stack Overflow
        </p>
      </div>
    </div>
  
    <h4 className="text-xl font-semibold">Hot Meta Posts</h4>
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <p className="text-gray-700 dark:text-gray-300">38</p>
        <p className="text-gray-700 dark:text-gray-300">
          Why was this spam flag declined, yet the question marked as spam?
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <p className="text-gray-700 dark:text-gray-300">20</p>
        <p className="text-gray-700 dark:text-gray-300">
          What is the best course of action when a user has high enough rep to...
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <p className="text-gray-700 dark:text-gray-300">14</p>
        <p className="text-gray-700 dark:text-gray-300">
          Is a link to the "How to ask" help page a useful comment?
        </p>
      </div>
    </div>
  </div>
  );
};

export default Widget;
