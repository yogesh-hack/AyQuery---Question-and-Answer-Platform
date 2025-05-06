import React, { useRef, useState,useEffect } from "react";
import axios from "axios";
import { verifyEmail,resendOtp } from "../../actions/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // also needed for navigate
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OtpVerify = ({ email }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputsRef = useRef([]);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    if (cooldown > 0) {
      const timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [cooldown]);
  
  const handleChange = (e, idx) => {
    const val = e.target.value.replace(/\D/, ""); // Only allow digits
    if (!val) return;
  
    const newOtp = [...otp];
    newOtp[idx] = val;
    setOtp(newOtp);
  
    if (idx < otp.length - 1 && val) {
      inputsRef.current[idx + 1].focus();
    }
  };
  
  const handleKeyDown = (e, idx) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];
      if (otp[idx]) {
        newOtp[idx] = "";
        setOtp(newOtp);
      } else if (idx > 0) {
        inputsRef.current[idx - 1].focus();
        newOtp[idx - 1] = "";
        setOtp(newOtp);
      }
    }
  };
  
  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    const digits = pasteData.split("");
    const newOtp = [...otp];
    digits.forEach((digit, i) => {
      if (i < otp.length) {
        newOtp[i] = digit;
        if (inputsRef.current[i]) inputsRef.current[i].value = digit;
      }
    });
    setOtp(newOtp);
    if (digits.length < otp.length) {
      inputsRef.current[digits.length]?.focus();
    } else {
      inputsRef.current[otp.length - 1]?.focus();
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullOtp = otp.join("");
    setLoading(true);
    try {
      await dispatch(verifyEmail({ email, fullOtp }, navigate));
    } catch (err) {
      toast.error("Failed to verify. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  
  const handleResendOtp = async () => {
    if (cooldown > 0 || loading) return; // Prevent resend if cooldown is active or if already loading

    try {
      setLoading(true);
      await dispatch(resendOtp(email)); // Dispatch resendOtp action to send OTP again
      toast.success("OTP resent successfully!");
      setCooldown(30); // Start cooldown for 30 seconds
    } catch (err) {
      toast.error("Failed to resend OTP.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="max-w-md mx-auto text-center bg-white dark:bg-slate-800 px-6 py-10 rounded-xl shadow">
  <p className="text-slate-500 dark:text-slate-300 mb-6">
    Enter the 6-digit OTP sent to your email.
  </p>

  <form onSubmit={handleSubmit}>
  <div className="flex justify-center gap-3" onPaste={handlePaste}>
      {otp.map((val, idx) => (
        <input
          key={idx}
          ref={(el) => (inputsRef.current[idx] = el)}
          type="text"
          maxLength="1"
          className="w-14 h-14 text-center text-2xl font-bold bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white rounded focus:bg-white dark:focus:bg-slate-600 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 outline-none"
          onChange={(e) => handleChange(e, idx)}
          onKeyDown={(e) => handleKeyDown(e, idx)}
          value={otp[idx]}
        />
      ))}
    </div>

    <button
  type="submit"
  className="w-full mt-6 bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition flex items-center justify-center"
  disabled={loading}
>
  {loading ? (
    <>
      <svg
        className="animate-spin h-5 w-5 mr-2 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v8z"
        ></path>
      </svg>
      Verifying...
    </>
  ) : (
    "Verify Account"
  )}
</button>

  </form>

  <p className="text-sm text-slate-500 dark:text-slate-300 mt-4">
        Didn’t receive code?{" "}
        <button
          type="button"
          onClick={handleResendOtp}
          disabled={cooldown > 0 || loading}
          className={`text-indigo-500 hover:underline cursor-pointer ml-1 ${
            cooldown > 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {cooldown > 0 ? `Resend in ${cooldown}s` : "Resend"}
        </button>
      </p>


</div>

  );
};

export default OtpVerify;
