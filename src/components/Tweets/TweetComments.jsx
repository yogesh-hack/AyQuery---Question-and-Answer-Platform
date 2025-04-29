import React, { useState } from 'react';
import { FaRetweet } from "react-icons/fa";
import { SlLike } from "react-icons/sl";
import { MdReplyAll } from "react-icons/md";
function TweetComments({ comments }) {
  const [openCommentIndex, setOpenCommentIndex] = useState(null);

  const toggleCommentVisibility = (index) => {
    setOpenCommentIndex(openCommentIndex === index ? null : index); // Toggle comment visibility
  };

  return (
    <div className="wrap pt">
      {comments.map((comment, i) => (
        <div key={i} className="box flex space-x-4 mb-4">
          {/* Left Side Avatar & Line */}
          <div className="line relative">
            <div className="border absolute left-1/2 h-full border-gray-300 dark:border-gray-600"></div>
            <img
              className="avatar h-10 w-10 rounded-full z-10 relative"
              src={`https://api.dicebear.com/7.x/identicon/svg?seed=${comment.userComments}`}
              alt="comment-avatar"
            />
          </div>

          {/* Right Side Content */}
          <div className="content flex-1">
            <div className="info flex justify-between items-center">
              <div className="userinfo">
                <div className="font-bold text-black dark:text-white">{comment.userComments}</div>
                <div className="text-gray-500 text-sm">@{comment.userComments?.toLowerCase().replace(/\s+/g, '')}</div>
                <div className="text-gray-400 text-xs">{new Date(comment.commentOn).toLocaleTimeString()}</div>
              </div>
              <i
                className={`material-icons text-gray-400 cursor-pointer transition-transform transform ${openCommentIndex === i ? 'rotate-180' : ''}`}
                onClick={() => toggleCommentVisibility(i)}
              >
                keyboard_arrow_down
              </i>
            </div>
            {/* Comment Content (only visible when the comment is open) */}
            <div
              className={`subtweet-content text-base text-black dark:text-white transition-all duration-300 ease-in-out ${openCommentIndex === i ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}
            >
              {comment.commentBody}
            </div>

            {/* Icons (reply, retweet, like, DM) */}
            <div className="icons flex mt-2 space-x-6 text-sm text-gray-500">
              <div className="ico flex items-center space-x-1">
              <MdReplyAll />
                <div className="number">1</div>
              </div>
              <div className="ico flex items-center space-x-1">
              <FaRetweet />
                <div className="number">0</div>
              </div>
              <div className="ico flex items-center space-x-1">
              <SlLike />
                <div className="number">0</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TweetComments;
