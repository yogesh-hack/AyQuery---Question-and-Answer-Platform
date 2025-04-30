import * as api from "../api/index";

export const askTweet = (tweetData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.postTweet(tweetData);
    dispatch({ type: "POST_TWEET", payload: data });
    dispatch(fetchAllTweets());
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const fetchAllTweets = () => async (disptach) => {
  try {
    const { data } = await api.getAllTweets();
    disptach({ type: "FETCH_ALL_TWEETS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteTweet = (id, navigate) => async (dispatch) => {
  try {
    await api.deleteTweet(id);
    dispatch(fetchAllTweets());
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};

export const voteTweet = (id, value) => async (dispatch) => {
  try {
    await api.voteTweet(id, value);
    dispatch(fetchAllTweets());
  } catch (error) {
    console.log(error);
  }
};

export const postComment = (CommentData) => async (dispatch) => {
  try {
    const { id, noOfComments, CommentBody, userCommented } = CommentData;
    const { data } = await api.postComment(
      id,
      noOfComments,
      CommentBody,
      userCommented
    );
    dispatch({ type: "POST_COMMENT", payload: data });
    dispatch(fetchAllTweets());
  } catch (error) {
    console.log(error);
  }
};

export const deleteComment = (id, CommentId, noOfComments) => async (dispatch) => {
  try {
    await api.deleteComment(id, CommentId, noOfComments);
    dispatch(fetchAllTweets());
  } catch (error) {
    console.log(error);
  }
};
