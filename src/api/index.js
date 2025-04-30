import axios from "axios";

const API = axios.create({
  baseURL: "https://ayquery-api.vercel.app/api",
  headers: {
    'apikey': 'MY_MASTER_KEY_1234'
  }
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("Profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("Profile")).token
    }`;
  }

  if (!req.url.includes("apikey=")) {
    const separator = req.url.includes("?") ? "&" : "?";
    req.url += `${separator}apikey=MY_MASTER_KEY_1234`;
  }

  return req;
});


export const logIn = (authData) => API.post("/user/login", authData);
export const signUp = (authData) => API.post("/user/signup", authData);

export const postQuestion = (questionData) =>
  API.post("/questions/Ask", questionData);
export const getAllQuestions = () => API.get("/questions/get");
export const getAllTweets = () => API.get("/tweets/get");
export const deleteQuestion = (id) => API.delete(`/questions/delete/${id}`);
export const voteQuestion = (id, value) =>
  API.patch(`/questions/vote/${id}`, { value });

export const postAnswer = (id, noOfAnswers, answerBody, userAnswered) =>
  API.patch(`/answer/post/${id}`, { noOfAnswers, answerBody, userAnswered });
export const deleteAnswer = (id, answerId, noOfAnswers) =>
  API.patch(`/answer/delete/${id}`, { answerId, noOfAnswers });

export const getAllUsers = () => API.get("/user/getAllUsers");
export const updateProfile = (id, updateData) =>
  API.patch(`/user/update/${id}`, updateData);

export const postTweet = (tweetData) =>
  API.post("/tweets/post", tweetData);

export const deleteTweet = (id) =>
  API.delete(`/tweets/delete/${id}`);

export const voteTweet = (id, value) =>
  API.patch(`/tweets/vote/${id}`, { value });

export const postComment= (id, noOfComments, CommentBody, userCommented) =>
  API.patch(`/tweetcomment/post/${id}`, { noOfComments, CommentBody, userCommented });
export const deleteComment= (id, CommentId, noOfComments) =>
  API.patch(`/tweetcomment/delete/${id}`, { CommentId, noOfComments });
