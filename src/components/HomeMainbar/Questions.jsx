import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import slugify from "../../utils/slugify";

const Questions = ({ question }) => {
  return (
    <>

<div className="flex">
  <div className="dark:bg-[#0d1117] text-dark dark:text-white shadow-md rounded-lg border border-gray-200 dark:border-gray-700 p-4 flex justify-between items-start w-full mx-auto hover:bg-gray-100 dark:hover:bg-gray-900 transition duration-200">
    {/* Vote Section */}
    <div className="flex items-center gap-4">
      {/* Vote Section */}
      <div className="text-blue-900 dark:text-white">
        <button className="text-sm font-semibold bg-blue-100 dark:bg-blue-950 hover:bg-blue-200 text-blue-900 dark:text-white dark:hover:bg-blue-900 px-3 py-1 rounded-sm">
          ↑ {question.upVote.length - question.downVote.length}
        </button>
      </div>

      {/* Content Section */}
      <div className="flex-1">
        <div className="mt-2 mb-2">
     <Link to={`/Questions/${question._id}/${slugify(question.questionTitle)}`}
        className="font-semibold text-lg mb-2 text-dark dark:text-white"
      >
        {question.questionTitle.length > (window.innerWidth <= 400 ? 70 : 90)
          ? question.questionTitle.substring(0, window.innerWidth <= 400 ? 70 : 90) + "..."
          : question.questionTitle}
      </Link>
      {/* <div className="flex flex-wrap mt-2 space-x-2">
        {question.questionTags.map((tag) => (
          <span key={tag} className="bg-gray-200 dark:bg-gray-700 text-sm text-gray-700 dark:text-gray-300 rounded-full px-2 py-1">
            {tag}
          </span>
        ))}
      </div> */}
    </div>

        <div className="flex items-center text-sm text-gray-400 dark:text-gray-400 space-x-2">
          <img
            src="https://randomuser.me/api/portraits/women/65.jpg"
            alt="user"
            className="w-5 h-5 rounded-full"
          />
          <span className="text-blue-500 dark:text-blue-500 hover:underline">{question.userPosted}</span>
          <span>·</span>
          <span>{moment(question.askedOn).fromNow()}</span>
          <span>·</span>
          <span>{question.noOfAnswers} Answers</span>
        </div>
      </div>
    </div>

    {/* Avatar Group */}
    <div className="flex -space-x-2 mt-1">
      <img
        className="w-6 h-6 rounded-full border-2 border-gray-800 dark:border-gray-800"
        src="https://randomuser.me/api/portraits/men/32.jpg"
        alt="user1"
      />
      <img
        className="w-6 h-6 rounded-full border-2 border-gray-800 dark:border-gray-800"
        src="https://randomuser.me/api/portraits/women/44.jpg"
        alt="user2"
      />
    </div>
  </div>
</div>

    </>
  );
};

export default Questions;
