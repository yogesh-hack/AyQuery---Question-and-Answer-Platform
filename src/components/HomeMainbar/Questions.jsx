import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const Questions = ({ question }) => {
  return (
    <>

<div className="flex border-b border-solid border-2 rounded-xl shadow-xl border-gray-300 dark:border-gray-700 p-4 hover:bg-gray-100 dark:hover:bg-gray-800 transition duration-200">
  {/* Left Section with Icon and Fixed Size Avatar */}
  <div className="w-1/12 flex flex-col items-center pt-2">
    <div className="mb-2">
      <i className="fa fa-thumb-tack text-teal-500 dark:text-teal-400"></i>
    </div>
    <div className="w-10 h-10">
      <a href="#">
        <img
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/tt_follower05.jpg"
          alt="avatar"
          className="rounded-full w-10 h-10 object-cover"
        />
      </a>
    </div>
  </div>

  {/* Right Section with Question Content */}
  <div className="w-11/12 pl-4">
    {/* Top Info Section */}
    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Ask Query</div>
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <span className="font-bold">
          <a href="#" className="text-gray-900 dark:text-white">
            {question.userPosted}
          </a>
        </span>
        <span className="text-gray-500 dark:text-gray-400 ml-2">@{question.userPosted}</span>
        <span className="text-gray-500 dark:text-gray-400 mx-2">&middot;</span>
        <span className="text-gray-500 dark:text-gray-400">asked {moment(question.askedOn).fromNow()}</span>
      </div>
      <a href="#" className="text-gray-500 hover:text-teal-500 dark:text-gray-400 dark:hover:text-teal-400">
        <i className="fa fa-chevron-down"></i>
      </a>
    </div>

    {/* Question Title and Tags */}
    <div className="mt-2">
      <Link
        to={`/Questions/${question._id}`}
        className="text-xl font-semibold text-gray-900 dark:text-blue-500 hover:underline"
      >
        {question.questionTitle.length > (window.innerWidth <= 400 ? 70 : 90)
          ? question.questionTitle.substring(0, window.innerWidth <= 400 ? 70 : 90) + "..."
          : question.questionTitle}
      </Link>
      <div className="flex flex-wrap mt-2 space-x-2">
        {question.questionTags.map((tag) => (
          <span key={tag} className="bg-gray-200 dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-300 rounded-full px-2 py-1">
            {tag}
          </span>
        ))}
      </div>
    </div>

    {/* Voting and Answer Count */}
    <div className="flex space-x-6 text-gray-500 dark:text-gray-400 mt-4">
      <div className="flex items-center space-x-1">
        <p className="text-xl font-semibold text-gray-800 dark:text-white">
          {question.upVote.length - question.downVote.length}
        </p>
        <span>votes</span>
      </div>
      <div className="flex items-center space-x-1">
        <p className="text-xl font-semibold text-gray-800 dark:text-white">{question.noOfAnswers}</p>
        <span>answers</span>
      </div>
    </div>
  </div>
</div>

    </>
  );
};

export default Questions;
