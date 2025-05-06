import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = ({ error }) => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className=" mx-auto p-4 flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#f0f4ff] to-[#fef6ff] dark:from-gray-900 dark:to-gray-800">
      <h1 className='text-2xl text-center'>Something Went Wrong</h1>
      <p>We're sorry, but an error occurred. Please try again later.</p>
      <p>{error?.message}</p>
      <button onClick={handleGoHome}>Go to Home</button>
    </div>
  );
};

export default ErrorPage;
