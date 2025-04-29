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

export const postAnswer = (answerData) => async (dispatch) => {
  try {
    const { id, noOfAnswers, answerBody, userAnswered } = answerData;
    const { data } = await api.postAnswer(
      id,
      noOfAnswers,
      answerBody,
      userAnswered
    );
    dispatch({ type: "POST_COMMENT", payload: data });
    dispatch(fetchAllTweets());
  } catch (error) {
    console.log(error);
  }
};

export const deleteAnswer = (id, answerId, noOfAnswers) => async (dispatch) => {
  try {
    await api.deleteAnswer(id, answerId, noOfAnswers);
    dispatch(fetchAllTweets());
  } catch (error) {
    console.log(error);
  }
};
