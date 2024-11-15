import * as api from "../api";
import { setCurrentUser } from "./currentUser";
import { fetchAllUsers } from "./users";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const signup = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(authData);
    dispatch({ type: "AUTH", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    dispatch(fetchAllUsers());
    toast.success("Signup successful!");
    navigate("/");
  } catch (error) {
    console.log(error);
    toast.error("Signup failed. Please try again.");
  }
};

export const login = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.logIn(authData);
    dispatch({ type: "AUTH", data });
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
    toast.success("Login successful!");
    navigate("/");
  } catch (error) {
    console.log(error);
    toast.error("Login failed. Incorrect credentials.");
  }
};
