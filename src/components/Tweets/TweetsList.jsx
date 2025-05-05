import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { askTweet } from "../../actions/tweet"; // Make sure this is the correct path
import { useNavigate } from "react-router-dom";
import Tweets from './Tweets'
import { FaImage } from "react-icons/fa";
import { MdEmojiEmotions } from "react-icons/md";
import { LuSettings2 } from "react-icons/lu";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const TweetsList = ({ tweetsList }) => {
  const [tweetTitle, setTweetTitle] = useState("");
  const [tweetBody, setTweetBody] = useState("");
  const [tweetTags, setTweetTags] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const User = useSelector((state) => state.currentUserReducer);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!User) {
      toast.error("Please login to post a tweet");
      return;
    }

    if (tweetBody) {
      dispatch(
        askTweet(
          {
            tweetTitle : "Tweet",
            tweetBody,
            tweetTags: [],
            userPosted: User.result.name,
            userId: User?.result?._id,
          },
          navigate
        )
      );
    } else {
      toast.error("Please Write a tweet");
    }
    setTweetBody("");
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="flex">
        <div className="m-2 w-10 py-1">
          <img
            className="inline-block h-10 w-10 rounded-full"
            src="https://pbs.twimg.com/profile_images/1121328878142853120/e-rpjoJi_bigger.png"
            alt="User avatar"
          />
        </div>
        <div className="flex-1 px-2 pt-2 mt-2">
          <textarea
            className="bg-transparent text-gray-800 p-3 font-medium text-lg w-full"
            rows="2"
            cols="50"
            placeholder="What's happening?"
            value={tweetBody}
            onChange={(e) => setTweetBody(e.target.value)}
          ></textarea>
        </div>
      </div>

      <div className="flex">
  <div className="w-10"></div>

  <div className="w-64 px-2">
    <div className="flex items-center">
      {[FaImage, MdEmojiEmotions, LuSettings2].map((Icon, i) => (
        <div className="flex-1 text-center py-2 m-2" key={i}>
          <a
            href="#"
            className="mt-1 group flex items-center justify-center text-blue-400 px-2 py-2 text-base leading-6 font-medium rounded-full hover:bg-blue-800 hover:text-blue-300"
          >
            <Icon className="h-6 w-6" />
          </a>
        </div>
      ))}
    </div>
  </div>

  <div className="flex-1">
    <button
      type="submit"
      className="bg-blue-400 mt-5 hover:bg-blue-600 text-white font-bold py-2 px-8 rounded-full mr-8 float-right"
    >
      Tweet
    </button>
  </div>
</div>
    </form>
                <hr class="border-blue-800 border-4"></hr>
    
      {tweetsList.map((tweets) => (
        <Tweets tweet={tweets} key={tweets._id} />
      ))}
    </>
  )
}

export default TweetsList