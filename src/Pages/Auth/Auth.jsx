import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import icon from "../../assets/logo.png";
import AboutAuth from "./AboutAuth";
import { signup, login } from "../../actions/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Auth = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSwitch = () => {
    setIsSignup(!isSignup);
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email && !password) {
      toast.error("Enter email and password");
      return;
    }
    if (isSignup) {
      if (!name) {
        toast.error("Enter a name to continue");
        return;
      }
      dispatch(signup({ name, email, password }, navigate));
    } else {
      dispatch(login({ email, password }, navigate));
    }
  };

  return (
    <section className="auth-section py-8 bg-gray-50 dark:bg-gray-900">
  {isSignup && <AboutAuth />}
  <div className="auth-container-2 max-w-md mx-auto mt-24 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
    <img src={icon} alt="stack overflow" width={200} className="login-logo mx-auto mb-6 dark:invert" />
    <form onSubmit={handleSubmit} className="space-y-4">
      {isSignup && (
        <label htmlFor="name" className="block text-lg font-medium text-gray-900 dark:text-gray-200">
          <h4>Display Name</h4>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-200"
          />
        </label>
      )}
      <label htmlFor="email" className="block text-lg font-medium text-gray-900 dark:text-gray-200">
        <h4>Email</h4>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-200"
        />
      </label>
      <label htmlFor="password" className="block text-lg font-medium text-gray-900 dark:text-gray-200">
        <div className="flex justify-between">
          <h4>Password</h4>
          {!isSignup && (
            <p className="text-blue-600 dark:text-blue-400 text-sm cursor-pointer">Forgot password?</p>
          )}
        </div>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-gray-200"
        />
      </label>
      <button
        type="submit"
        className="w-full py-3 bg-indigo-600 dark:bg-indigo-700 text-white rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        {isSignup ? "Sign up" : "Log in"}
      </button>
    </form>
    <p className="text-center mt-4 text-gray-900 dark:text-gray-200">
      {isSignup ? "Already have an account?" : "Don't have an account?"}
      <button
        type="button"
        className="text-indigo-600 dark:text-indigo-400 font-medium"
        onClick={handleSwitch}
      >
        {isSignup ? "Log in" : "Sign up"}
      </button>
    </p>
  </div>
  {/* Toast container for notifications */}
  <ToastContainer />
</section>

  );
};

export default Auth;
