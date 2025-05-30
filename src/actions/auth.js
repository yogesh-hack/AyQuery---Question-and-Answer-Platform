import * as api from "../api";
import { setCurrentUser } from "./currentUser";
import { fetchAllUsers } from "./users";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const signup = (authData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.signUp(authData);
    navigate("/verify-email", { state: { email: authData.email } });    
    toast.success("OTP sent to your email");
    dispatch({ type: "AUTH", data });
  } catch (error) {
    console.log(error);
    toast.error(error.response?.data?.message || "Signup failed");
  }
};

export const verifyEmail = (verificationData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.OtpVerify(verificationData);
    dispatch({ type: "AUTH", data });
    localStorage.setItem("Profile", JSON.stringify(data.user));
    toast.success(data.message);
    dispatch(setCurrentUser(data.user));
    dispatch(fetchAllUsers()); 
    if(data.user.role === "User") {
    navigate("/Questions");
    }else{
    navigate("/company/dashboard");
    }
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
     if(data.user.role === "User") {
    navigate("/Questions");
    }else{
    navigate("/company/dashboard");
    }
  } catch (error) {
    console.log(error);
    toast.error("Login failed. Incorrect credentials.");
  }
};

export const resendOtp = (email) => async (dispatch) => {
  try {
    const { data } = await api.resendOtp({ email });
    toast.success("OTP resent successfully!");
    dispatch({ type: "AUTH", data });
  } catch (err) {
    console.log(err);
    toast.error("Failed to resend OTP.");
  }
};
