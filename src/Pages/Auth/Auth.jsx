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
  
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f0f4ff] to-[#fef6ff] dark:from-gray-900 dark:to-gray-800 px-4">
<div className="absolute top-6 left-6">
  <a
    href="/"
    className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-blue-600 rounded-md hover:bg-blue-50 dark:bg-gray-900 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-gray-800 transition"
  >
    ← Home
  </a>
</div>

  <div className={`flex m-4 shadow-xl rounded-2xl overflow-hidden bg-white dark:bg-gray-900`}>
  {isSignup && (
  <div className="hidden md:flex w-1/2 flex-col justify-center px-10 py-12 bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-gray-800 dark:to-gray-700">
    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
      Create your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">AyQuery account</span>
    </h1>
    <p className="text-gray-600 dark:text-gray-300 mb-8">
    Connect, Share, Express – Ayquery Brings Your Ideas to Life.
    </p>
    <div className="flex items-center gap-4">
      <img
        src="https://avatars.githubusercontent.com/u/3921925?v=4"
        alt="Testimonial"
        className="w-12 h-12 rounded-full"
      />
      <blockquote className="text-sm text-gray-700 dark:text-gray-300">
        "Lovely interface! I like how easy it is to find and create a REST API URL in the Developer Tools tab."
        <footer className="mt-1 text-xs text-gray-500">— Chris Nicholas, DX at Liveblocks</footer>
      </blockquote>
    </div>
  </div>
)}


    {/* Right Panel (Form) */}
    <div className={`w-full ${isSignup ? 'md:w-1/2' : 'md:w-[500px] max-w-[500px]'} p-6 md:p-10`}>
    <div className="w-full mt-2 max-w-lg bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg p-8 md:p-10">
      <img src={icon} alt="stack overflow" width={140} className="mx-auto mb-6 dark:invert" />
      <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">
  {!isSignup ? (
    <>Welcome <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Back</span></>
  ) : (
    <>Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Started</span></>
  )}
</h1>

      <h2 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-6">
        {isSignup ? "Sign Up" : "Login"}
      </h2>
  
      {/* OAuth Buttons */}
      <div className="flex gap-4 mb-6">
        <button className="flex items-center justify-center w-full py-2.5 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M21.35 11.1H12v2.9h5.3c-.6 2.2-2.4 3.6-5.3 3.6-3.2 0-5.9-2.6-5.9-5.9s2.6-5.9 5.9-5.9c1.5 0 2.8.5 3.8 1.4l2.2-2.2C16.9 3.5 14.6 2.6 12 2.6 6.9 2.6 2.6 6.9 2.6 12S6.9 21.4 12 21.4c5.4 0 9.8-4.4 9.8-9.8 0-.5 0-.9-.1-1.5z" /></svg>
          Google
        </button>
        <button className="flex items-center justify-center w-full py-2.5 rounded-md bg-gray-800 text-white font-medium hover:bg-black">
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303..."/></svg>
          GitHub
        </button>
      </div>
  
      <div className="flex items-center my-6">
        <hr className="flex-grow border-t border-gray-300 dark:border-gray-600" />
        <span className="mx-2 text-sm text-gray-500 dark:text-gray-400">or continue with email</span>
        <hr className="flex-grow border-t border-gray-300 dark:border-gray-600" />
      </div>
  
      <form onSubmit={handleSubmit} className="space-y-5">
        {isSignup && (
          <div>
            <label htmlFor="name" className="block text-xs font-bold text-gray-600 dark:text-gray-400 mb-1">DISPLAY NAME</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your display name"
              className="w-full px-4 py-3 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
            />
          </div>
        )}
  
        <div>
          <label htmlFor="email" className="block text-xs font-bold text-gray-600 dark:text-gray-400 mb-1">EMAIL</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="w-full px-4 py-3 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
          />
        </div>
  
        <div>
          <div className="flex justify-between mb-1">
            <label htmlFor="password" className="block text-xs font-bold text-gray-600 dark:text-gray-400">PASSWORD</label>
            {!isSignup && (
              <p className="text-xs text-blue-600 dark:text-blue-400 cursor-pointer">Forgot your password?</p>
            )}
          </div>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-4 py-3 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
          />
        </div>
  
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition"
        >
          {isSignup ? "Sign up" : "Log in"}
        </button>
      </form>
  
      <p className="text-sm text-center mt-6 text-gray-700 dark:text-gray-300">
        {isSignup ? "Already have an account?" : "New to AyQuery?"}
        <button onClick={handleSwitch} className="ml-2 font-semibold text-blue-600 hover:underline dark:text-blue-400">
          {isSignup ? "Log in" : "Sign up →"}
        </button>
      </p>
    </div>
    <ToastContainer />
    </div>
  </div>
</section>


  );
};

export default Auth;
