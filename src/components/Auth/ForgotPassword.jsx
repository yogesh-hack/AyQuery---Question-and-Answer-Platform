import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <main>
      <section className="py-28 relative overflow-hidden">
        <div className="wrapper">
          <div className="relative max-w-[592px] mx-auto">
            <div className="contact-wrapper border p-14 relative z-30 bg-white dark:bg-gray-900 dark:border-gray-800 border-gray-100 rounded-2xl shadow-xl">
              <div className="text-center mb-8">
                <h3 className="text-gray-800 font-bold text-3xl mb-2 dark:text-white/90">
                  Forgot Your Password?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  Enter the email address linked to your account, and we'll send
                  you a link to reset your password.
                </p>
              </div>

              <form>
                <div className="grid gap-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1 block dark:text-gray-400 text-gray-700 font-medium text-sm"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="border w-full text-sm dark:text-white dark:placeholder:text-white dark:border-gray-700 text-gray-800 placeholder:text-sm placeholder:text-gray-400 focus:border-primary-500 dark:focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/30 text-left h-12 shadow-sm border-gray-300 rounded-full px-5 py-2.5 transition-all duration-200"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="col-span-full">
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 transition-all duration-300 py-3 px-6 w-full font-medium text-white text-sm rounded-full shadow-md hover:shadow-lg"
                    >
                      Send Reset Link
                    </button>
                  </div>
                </div>
              </form>
              <div className="mt-5 text-center">
                <p className="text-gray-700 dark:text-gray-400 font-normal text-sm">
                  Wait, I remember my password...{" "}
                  <Link to="/Auth"
                    className="text-sm font-semibold text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
                  >
                    Click here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <span className="absolute -bottom-32 left-1/2 -translate-x-1/2 z-0">
          <svg
            width="930"
            height="760"
            viewBox="0 0 930 760"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.3" filter="url(#filter0_f_9248_10254)">
              <circle cx="380.335" cy="380.335" r="179.665" fill="#FF58D5" />
            </g>
            <g opacity="0.7" filter="url(#filter1_f_9248_10254)">
              <circle cx="549.665" cy="380.335" r="179.665" fill="#4E6EFF" />
            </g>
            <defs>
              <filter
                id="filter0_f_9248_10254"
                x="0.669922"
                y="0.6698"
                width="759.33"
                height="759.33"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="100"
                  result="effect1_foregroundBlur_9248_10254"
                />
              </filter>
              <filter
                id="filter1_f_9248_10254"
                x="170"
                y="0.6698"
                width="759.33"
                height="759.33"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="100"
                  result="effect1_foregroundBlur_9248_10254"
                />
              </filter>
            </defs>
          </svg>
        </span>
      </section>
    </main>
  );
};

export default ForgotPassword;