import { combineReducers } from "redux";
import authReducer from "./auth";
import currentUserReducer from "./currentUser";
import questionsReducer from "./questions";
import usersReducer from "./users";
import tweetsReducer from "./tweets";
import storesReducer from "./stores";

export default combineReducers({
  authReducer,
  currentUserReducer,
  questionsReducer,
  usersReducer,
  tweetsReducer,
  storesReducer
});
