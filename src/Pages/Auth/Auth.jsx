import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import icon from "../../assets/logo.png";
import AboutAuth from "./AboutAuth";
import { signup, login } from "../../actions/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Auth = () => {
  const [role, setRole] = useState(null); // 'user' or 'company'
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [companyAgentId, setCompanyAgentId] = useState("");

  const [gst, setGst] = useState("");
  const [cin, setCin] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSwitch = () => {
    setIsSignup(!isSignup);
    setName("");
    setEmail("");
    setPassword("");
    setCompanyName(""); setGst(""); setCin("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Enter email and password");
      return;
    }

    if (!role) {
      toast.error("Select a role: User or Company");
      return;
    }

    if (isSignup) {
      if (role === "user" && !name) {
        toast.error("Enter your name to continue.");
        return;
      }

      if (role === "company" && (!companyName || !gst || !cin)) {
        toast.error("Please fill all company details.");
        return;
      }
    } else {
      // On login: validate companyAgentId if company
      if (role === "company" && !companyAgentId) {
        toast.error("Enter your Company AygenID to login.");
        return;
      }
    }


    setLoading(true);
    try {
      let payload;

      if (isSignup) {
        payload = role === "user"
          ? { name, email, password, role: "User" }
          : {
            email,
            password,
            role: "Company",
            companyName,
            companyGSTNo: gst,
            companyCINNo: cin,
          };

        await dispatch(signup(payload, navigate));
      } else {
        payload = role === "company"
          ? { email, password, companyAgentId }
          : { email, password };

        await dispatch(login(payload, navigate));
      }
    } finally {
      setLoading(false);
    }
  };
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type');

  if (!role) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 px-4">
        {type ? (
          <div className="w-full max-w-4xl p-8 z-10 bg-white dark:bg-gray-800 rounded-2xl shadow-xl space-y-8">
            <div className="text-center">
              <img src={icon} alt="stack overflow" width={140} className="mx-auto mb-6 dark:invert" />
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Welcome to AyQuery</h1>
              <p className="text-gray-600 dark:text-gray-300">How would you like to use AyQuery?</p>
            </div>

            {/* Grid layout for both cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 z-10">
              {/* Company Button with Badge */}
              <div className="relative">
                <button
                  onClick={() => setRole("company")}
                  className="relative w-full h-full p-6 text-left bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-xl hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-200 flex flex-col"
                >
                  <span className="absolute top-2 right-2 px-3 py-1 text-xs font-semibold text-white bg-white/10 dark:bg-gray-900/30 backdrop-blur-md border border-white/20 rounded-full shadow-sm">
                    Free Trial
                  </span>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <span className="font-semibold text-gray-900 dark:text-white">I'm a company hiring tech talent</span>
                  </div>
                  <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 pl-13">
                    Evaluate tech skills at scale
                  </p>
                </button>
              </div>

              {/* User Button */}
              <div className="relative">
                <button
                  onClick={() => setRole("user")}
                  className="relative w-full h-full p-6 text-left bg-white dark:bg-gray-700 border-2 border-gray-200 dark:border-gray-600 rounded-xl hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-200 flex flex-col"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                      <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <span className="font-semibold text-gray-900 dark:text-white">I'm here to learn and explore</span>
                  </div>
                  <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 pl-13">
                    Explore and develop new tech skills • Join the community
                  </p>
                </button>
              </div>
            </div>

          </div>


        ) : (
          <div className="max-w-6xl mt-5 mx-auto">
            <img src={icon} alt="stack overflow" width={140} className="mx-auto mb-6 dark:invert" />

            <div class="w-full max-w-6xl z-10 grid grid-cols-1 md:grid-cols-2 border-gray-200 dark:border-gray-700">
              <div class="p-8 flex flex-col z-10 items-center md:border-b-0 md:border-r border-gray-200 dark:border-gray-700 text-center">
                <span class="px-4 py-1 bg-black text-white rounded-full mb-3 text-sm font-semibold dark:bg-white dark:text-black">
                  BUSINESS
                </span>
                <h2 class="text-2xl font-semibold">For <span class="italic font-bold">Companies</span></h2>
                <p class="mt-2 max-w-md">
                  Thousands of companies have embraced the new way to hire and upskill developers across roles and throughout their careers.
                </p>
                <button onClick={() => setRole("company")}
                  class="mt-6 px-6 py-2 bg-black text-white rounded hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
                  Login
                </button>
                <p class="mt-6 text-sm">
                  Don't have an account?
                  <a href="#" class="text-green-600 font-semibold hover:underline">Contact sales</a> or 
                  <button onClick={() => setRole("company")} class="text-green-600 font-semibold hover:underline"> Get free trial</button>
                </p>
              </div>

              <div class="p-8 flex flex-col items-center text-center">
                <div class="px-4 py-1 h-80 mx-auto rounded-lg mb-3 text-sm border border-gray-300 pt-10 dark:border-gray-500 shadow-xl">
                  <h2 class="text-2xl font-semibold">For <span class="italic font-bold">Community Members</span></h2>
                  <p class="mt-2 max-w-md">
                    Be part of a growing knowledge-sharing community. Ask questions, share insights, and connect with like-minded developers and tech enthusiasts.
                  </p>
                  <button onClick={() => setRole("user")}
                    class="mt-6 px-6 py-2 border border-gray-300 rounded hover:bg-gray-100 dark:border-gray-500 dark:hover:bg-gray-800">
                    Login
                  </button>
                  <p class="mt-6 text-sm">
                    Don't have an account?
                    <a href="#" class="text-green-600 font-semibold hover:underline">Sign up.</a>
                  </p>
                </div>

              </div>

            </div>
          </div>
        )}

        <div class="overflow-hidden">
          <img src="https://ai-agent.preview.uideck.com/assets/images/gen-glow.png" class="fixed bottom-0 w-full left-1/2 -translate-x-1/2" alt="" />
        </div>
      </section>
    );
  }
  return (

    <section className="relative min-h-screen  flex items-center justify-center bg-gradient-to-br from-[#f0f4ff] to-[#fef6ff] dark:from-gray-900 dark:to-gray-800 px-4">
      <div className="absolute top-6 left-6">
        <a
          href="/"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-white border border-blue-600 rounded-md hover:bg-blue-50 dark:bg-gray-900 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-gray-800 transition"
        >
          ← Home
        </a>
      </div>

      <div className={`flex m-4 shadow-xl z-10 rounded-2xl overflow-hidden bg-white dark:bg-gray-900`}>
        {role === "user" && isSignup && (
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
        {role === "company" && isSignup && (
          <div className="hidden md:flex w-1/2 flex-col justify-center px-10 py-12 bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-gray-800 dark:to-gray-700">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              Create your Company <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">AyQuery account</span>
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
          <div className="w-full mt-2 max-w-lg bg-white dark:bg-gray-900">
            <img src={icon} alt="stack overflow" width={140} className="mx-auto mb-6 dark:invert" />
            <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-2">
              {!isSignup ? (
                <>Welcome <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Back</span></>
              ) : (
                <>Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">Started</span></>
              )}
            </h1>

            <h2 className="text-xl font-semibold text-center text-gray-800 dark:text-gray-200 mb-6">
              {isSignup ? "Create New Account" : "Login"}
            </h2>
            {role === "user" && (
              <>
                {/* OAuth Buttons */}
                <div className="flex gap-4 mb-6">
                  <button className="flex items-center justify-center w-full py-2.5 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700">
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M21.35 11.1H12v2.9h5.3c-.6 2.2-2.4 3.6-5.3 3.6-3.2 0-5.9-2.6-5.9-5.9s2.6-5.9 5.9-5.9c1.5 0 2.8.5 3.8 1.4l2.2-2.2C16.9 3.5 14.6 2.6 12 2.6 6.9 2.6 2.6 6.9 2.6 12S6.9 21.4 12 21.4c5.4 0 9.8-4.4 9.8-9.8 0-.5 0-.9-.1-1.5z" /></svg>
                    Google
                  </button>
                  <button className="flex items-center justify-center w-full py-2.5 rounded-md bg-gray-800 text-white font-medium hover:bg-black">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303..." /></svg>
                    GitHub
                  </button>
                </div>

                <div className="flex items-center my-6">
                  <hr className="flex-grow border-t border-gray-300 dark:border-gray-600" />
                  <span className="mx-2 text-sm text-gray-500 dark:text-gray-400">or continue with email</span>
                  <hr className="flex-grow border-t border-gray-300 dark:border-gray-600" />
                </div>
              </>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
              {role === "user" && isSignup && (
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

              {role === "company" && isSignup && (
                <>
                  <div>
                    <label htmlFor="companyName" className="block text-xs font-bold text-gray-600 dark:text-gray-400 mb-1">Company Name</label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Enter your company name"
                      className="w-full px-4 py-3 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="gst" className="block text-xs font-bold text-gray-600 dark:text-gray-400 mb-1">Company GST IN</label>
                    <input
                      type="text"
                      id="gst"
                      name="gst"
                      value={gst}
                      onChange={(e) => setGst(e.target.value)}
                      placeholder="Enter your company gst"
                      className="w-full px-4 py-3 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                    />
                  </div>
                  <div>
                    <label htmlFor="cin" className="block text-xs font-bold text-gray-600 dark:text-gray-400 mb-1">Company CIN No.</label>
                    <input
                      type="text"
                      id="cin"
                      name="cin"
                      value={cin}
                      onChange={(e) => setCin(e.target.value)}
                      placeholder="Enter your company cin"
                      className="w-full px-4 py-3 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                    />
                  </div>
                </>
              )}
              {role === "company" && !isSignup && (
                <>
                  <div>
                    <label htmlFor="cmpid" className="block text-xs font-bold text-gray-600 dark:text-gray-400 mb-1">Company Aygen ID</label>
                    <input
                      type="text"
                      id="cmpid"
                      name="cmpid"
                      value={companyAgentId}
                      onChange={(e) => setCompanyAgentId(e.target.value)}
                      placeholder="Enter your Company AygenID"
                      className="w-full px-4 py-3 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                    />
                  </div>
                </>
              )}
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-gray-600 dark:text-gray-400 mb-1">{role === "user" ? "EMAIL" : "BUSINESS EMAIL"}</label>
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
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition flex items-center justify-center"
                disabled={loading}
              >
                {loading ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                  </svg>
                ) : (
                  isSignup ? "Create New Account" : "Log in"
                )}
              </button>
            </form>

            <p className="text-sm text-center mt-6 text-gray-700 dark:text-gray-300">
              {isSignup ? "Already have an account?" : "New to AyQuery?"}
              <button onClick={handleSwitch} className="ml-2 font-semibold text-blue-600 hover:underline dark:text-blue-400">
                {isSignup ? "Log in" : "Create New Account →"}
              </button>
            </p>
          </div>
          <ToastContainer />
        </div>
      </div>

      <div class="overflow-hidden">
        <img src="https://ai-agent.preview.uideck.com/assets/images/gen-glow.png" class="fixed bottom-0 w-full left-1/2 -translate-x-1/6" alt="" />
      </div>
    </section>


  );
};

export default Auth;
