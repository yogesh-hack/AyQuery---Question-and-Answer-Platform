import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import OtpVerify from "../../components/Auth/OtpVerify"; // Adjust the import path as necessary
import icon from "../../assets/logo.png";
const VerifyEmail = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get the email from the state passed via navigation
  const { email } = location.state || {}; // Make sure this matches the object you passed from signup

  if (!email) {
    navigate("/Auth"); 
    return null;
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f0f4ff] to-[#fef6ff] dark:from-gray-900 dark:to-gray-800 px-4">
    <div className="w-full max-w-md mx-auto bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg">  
      <img src={icon} alt="stack overflow" width={140} className="mx-auto mb-6 dark:invert" />
      <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">
        Verify Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Email</span>
      </h1>
        <OtpVerify email={email} />
      </div>
    </section>
  );
};

export default VerifyEmail;
