import React, { useState, useEffect } from "react";

const Sidebar = ({ isOpen, onClose }) => {
  const [currentYear] = useState(new Date().getFullYear());

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".sidebar-container")) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <aside
      className={`fixed inset-y-0 top-16 left-0 z-40 w-72 bg-white dark:bg-gray-900 border-r border-gray-100 dark:border-gray-800 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:h-auto ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } sidebar-container`}
    >
      <div className="h-full flex flex-col justify-between overflow-y-auto">
        {/* Products section */}
        <div className="px-5 pt-6">
          <h2 className="text-xs font-medium text-gray-400 dark:text-gray-400 uppercase tracking-wider">
            Products
          </h2>
          <nav className="mt-3 space-y-1">
            <a
              href="/text-generator"
              className="flex items-center bg-gray-100 dark:bg-gray-700 dark:text-white/90 h-11 text-gray-800 px-2 py-3 text-sm font-medium rounded-full transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                className="flex-shrink-0"
              >
                {/* SVG paths for text generator icon */}
              </svg>
              <span className="ml-2">Text Generator</span>
            </a>
            <a
              href="/image-generator"
              className="flex items-center h-11 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 px-2 py-3 text-sm font-medium rounded-full transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                className="flex-shrink-0"
              >
                {/* SVG paths for image generator icon */}
              </svg>
              <span className="ml-2">Image Generator</span>
            </a>
            {/* Other product links */}
          </nav>
        </div>

        {/* Bottom section */}
        <div className="px-3 space-y-7 pb-6">
          <div className="px-2">
            <h2 className="text-xs font-medium text-gray-400 dark:text-gray-400 uppercase tracking-wider">
              Important links
            </h2>
            <nav className="mt-5 space-y-1">
              <a
                href="/settings"
                className="flex items-center gap-2 px-3 py-2 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium rounded-full transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  {/* SVG path for settings icon */}
                </svg>
                Settings
              </a>
              <a
                href="/help"
                className="flex items-center gap-2 px-3 py-2 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium rounded-full transition-colors duration-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  {/* SVG path for help icon */}
                </svg>
                Help & FAQ
              </a>
            </nav>
          </div>

          <div>
            {/* User profile */}
            <div className="pt-5 pb-3 px-3 rounded-2xl bg-gray-50 dark:bg-gray-800">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-800 dark:text-white">
                    Musharof Chowdhury
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    random@pimjo.com
                  </p>
                </div>
                <div>
                  <span className="bg-white dark:bg-gray-700 dark:text-white/70 px-2 py-0.5 text-xs font-medium rounded-full">
                    Free
                  </span>
                </div>
              </div>
              <div className="mt-5">
                <button className="rounded-full bg-gradient-to-r from-blue-500 to-blue-600 text-white flex gap-2 items-center justify-center text-xs font-medium w-full px-6 py-3 hover:from-blue-600 hover:to-blue-700 transition-colors duration-200">
                  Upgrade Plan
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      d="M9.61054 2.0625L3.58887 10.5264H8.38943L8.38943 15.9375L14.4111 7.47361L9.61054 7.47361V2.0625Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-3 px-3 text-center tracking-wide text-xs text-gray-400">
              © {currentYear} All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;