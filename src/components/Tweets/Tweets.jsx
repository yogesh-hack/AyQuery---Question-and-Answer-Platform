import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  postComment
} from "../../actions/tweet";
import TweetComments from './TweetComments';
import { FaRetweet } from "react-icons/fa";
import { SlLike } from "react-icons/sl";
import { MdReplyAll } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Tweets({ tweet }) {
  const Comment = ({ user, time, text, likes, replies }) => (
  <div className="flex items-start gap-3 relative pl-8">
    {/* Vertical Line for Replies */}
    <div className="absolute left-3 top-10 bottom-0 w-px bg-gray-300 dark:bg-gray-600" />

    {/* User Avatar */}
    <img src={user.avatar} alt="avatar" className="w-8 h-8 rounded-full mt-1" />

    {/* Comment Content */}
    <div className="flex-1">
      <div className="text-sm font-semibold text-gray-900 dark:text-white">{user.name}</div>
      <div className="text-xs text-gray-500">{time}</div>
      <p className="mt-1 text-sm text-gray-800 dark:text-gray-200">{text}</p>

      {/* Action Buttons */}
      <div className="flex items-center gap-4 mt-2 text-gray-500 dark:text-gray-400 text-xs">
        <button className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400">
          👍 {likes}
        </button>
        <button className="hover:text-blue-600 dark:hover:text-blue-400">Reply</button>
        <button className="hover:text-blue-600 dark:hover:text-blue-400">⋯</button>
      </div>

      {/* Nested Replies */}
      {replies?.length > 0 && (
        <div className="mt-4 space-y-4">
          {replies.map((reply, idx) => (
            <Comment key={idx} {...reply} />
          ))}
        </div>
      )}
    </div>
  </div>
);

  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);
  const [comment, setComment] = useState("");
  const handlePostComment = () => {
    if (!User) {
      toast.error("Please login to post a comment");
      Navigate("/Auth");
      return;
    }

    if (!comment.trim()) {
      toast.error("Comment cannot be empty");
      return;
    }

    dispatch(
      postComment({
        id: tweet._id,
        noOfComments: tweet.comments.length + 1,
        CommentBody: comment,
        userCommented: User.result.name,
      })
    );
    toast.success("Comment posted successfully");
    setComment(""); // clear textarea after posting
  };

  return (
    <div className="bg-white dark:bg-[#0d1117] border-gray-200 dark:border-gray-800 p-4 rounded-xl border mb-4 shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out">
      <div className="flex justify-between">
        <div className="flex items-center">
          <img
            className="h-11 w-11 rounded-full"
            src={`https://api.dicebear.com/7.x/identicon/svg?seed=${tweet.userPosted}`}
            alt="user-avatar"
          />
          <div className="ml-2 text-sm leading-tight">
            <span className="text-black dark:text-white font-bold block">
              {tweet.userPosted}
            </span>
            <span className="text-gray-500 dark:text-gray-400 font-normal block">
              @{tweet.userPosted.toLowerCase().replace(/\s+/g, "")}
            </span>
          </div>
        </div>
        <svg
          className="text-blue-400 dark:text-white h-6 w-auto fill-current"
          viewBox="0 0 24 24"
        >
          <g>
            <path d="M23.643 4.937c...z" />
          </g>
        </svg>
      </div>

      <p className="text-xl leading-snug mt-3 text-black dark:text-white">
        {tweet.tweetBody}
      </p>

      {tweet.tweetTags.length > 0 && (
        <p className="mt-2 text-sm text-blue-500">
          {tweet.tweetTags.map((tag, i) => (
            <span key={i} className="mr-2">#{tag}</span>
          ))}
        </p>
      )}

      <p className="text-gray-500 dark:text-gray-400 text-sm py-1 my-0.5">
        {new Date(tweet.askedOn).toLocaleString()}
      </p>

      <div className="border-gray-200 dark:border-gray-600 border border-b-0 my-1"></div>
      <div className="icons flex mt-2 space-x-6 text-sm text-gray-500">
        <button className="ico flex items-center space-x-1 hover:text-blue-500 transition duration-200 ease-in-out">
          <SlLike />
          <div className="number">{tweet.like.length}</div>
        </button>
        <button className="ico flex items-center space-x-1 hover:text-blue-500 transition duration-200 ease-in-out">
          <MdReplyAll />
          <div className="number">1</div>
        </button>
        <button className="ico flex items-center space-x-1 hover:text-blue-500 transition duration-200 ease-in-out">
          <FaRetweet />
          <div className="number">0</div>
        </button>
      </div>
      <div className="text-gray-500 dark:text-gray-400 flex mt-3">
        <Comment
  user={{ name: "Lyle Kauffman", avatar: "https://flowbite.com/docs/images/people/profile-picture-3.jpg" }}
  time="1 day ago"
  text="How do we measure the amount of water vapor in the air? Is it something we'll cover later?"
  likes={12}
  replies={[
    {
      user: { name: "Amanda Lowery", avatar: "https://flowbite.com/docs/images/people/profile-picture-3.jpg" },
      time: "12 hours ago",
      text: "Yes, I think we’ll dive deeper into that in the next module on humidity...",
      likes: 8,
    },
    {
      user: { name: "Owen Garcia", avatar: "https://flowbite.com/docs/images/people/profile-picture-3.jpg" },
      time: "2 hours ago",
      text: "Exactly! The next lesson will cover humidity...",
      likes: 4,
    },
  ]}
/>

        <TweetComments comments={tweet.comments} />
      </div>
      <div className="flex">
        <div className="m-2 w-10 py-1">
          <img
            className="inline-block h-10 w-10 rounded-full"
            src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png"
            alt="User avatar"
          />
        </div>
        <div className="flex items-center space-x-4">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="flex-1 bg-transparent text-gray-800 p-3 font-medium text-lg focus:outline-none rounded-lg"
            style={window.innerWidth <= 400 ? { width: "400px" } : { width: "448px" }}
            rows="1"
            placeholder="Post a comment..."
          ></textarea>
          <button
            type="button"
            onClick={handlePostComment}
            className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full"
          >
            Post
          </button>

        </div>

      </div>
      <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"/>
    </div>
    
  );
}

export default Tweets;
