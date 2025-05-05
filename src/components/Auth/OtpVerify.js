import React, { useRef, useState } from "react";
import axios from "axios";
import { verifyEmail } from "../../actions/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"; // also needed for navigate
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OtpVerify = ({ email }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputsRef = useRef([]);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [message, setMessage] = useState("");

  const handleChange = (e, idx) => {
    const val = e.target.value.replace(/\D/, ""); // allow only digits
    if (!val) return;

    const newOtp = [...otp];
    newOtp[idx] = val;
    setOtp(newOtp);
    console.log(newOtp);
    if (idx < 3) {
      inputsRef.current[idx + 1].focus();
    }
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === "Backspace" && !otp[idx] && idx > 0) {
      inputsRef.current[idx - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").slice(0, 4);
    if (!/^\d{4}$/.test(pasteData)) return;

    const digits = pasteData.split("");
    setOtp(digits);
    digits.forEach((digit, i) => {
      if (inputsRef.current[i]) inputsRef.current[i].value = digit;
    });
    inputsRef.current[3].focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullOtp = otp.join("");
console.log(fullOtp);
    try {
      dispatch(verifyEmail({ email, fullOtp }, navigate));
    } catch (err) {
      toast.error("Failed to verify. Please try again."
      );
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
      className="w-full mt-6 bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 transition"
    >
      Verify Account
    </button>
  </form>

  <p className="text-sm text-slate-500 dark:text-slate-300 mt-4">
    Didn’t receive code? <a className="text-indigo-500 hover:underline cursor-pointer">Resend</a>
  </p>

  {message && (
    <div className="mt-4 text-sm text-red-500 dark:text-red-400">{message}</div>
  )}
</div>

  );
};

export default OtpVerify;
