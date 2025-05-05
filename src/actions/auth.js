import * as api from "../api";
import { setCurrentUser } from "./currentUser";
import { fetchAllUsers } from "./users";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const signup = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(authData);
    toast.success("OTP sent to your email");
    navigate("/verify-email", { state: { email: authData.email } });
    dispatch({ type: "AUTH", data });
  } catch (error) {
    console.log(error);
    toast.error(error.response?.data?.message || "Signup failed");
  }
};

export const verifyEmail = (verificationData, navigate) => async (dispatch) => {
  try {
    console.log(verificationData)
    const { data } = await api.OtpVerify(verificationData);
    dispatch({ type: "AUTH", data });
    localStorage.setItem("Profile", JSON.stringify(data.user));
    console.log(data.user)
    dispatch(setCurrentUser(data.user));
    dispatch(fetchAllUsers()); 
    toast.success("Email verified successfully!");
    navigate("/");
  } catch (error) {
    console.log(error);
    toast.error(error.response?.data?.message ||"Invalid OTP or verification failed");
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
