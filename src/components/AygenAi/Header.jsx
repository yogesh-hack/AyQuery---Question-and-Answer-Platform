import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

const Header = ({ onMenuClick, isSidebarOpen }) => {
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [pagesDropdownOpen, setPagesDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white border-b dark:bg-gray-900 dark:border-gray-800 border-gray-100 sticky top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and Mobile Menu Button */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              {/* Mobile menu button */}
              <button
                 onClick={onMenuClick}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:text-white dark:hover:bg-gray-800 lg:hidden"
              >
                <span className="sr-only">Open main menu</span>
               {isSidebarOpen ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
              {/* Logo */}
              <div className="flex items-center ml-4 lg:ml-0">
                <a href="/">
                  <img
                    src="https://ai-agent.preview.uideck.com/assets/images/logo-white.svg"
                    className="block dark:hidden h-8 w-auto"
                    alt="Logo"
                  />
                  <img
                    src="https://ai-agent.preview.uideck.com/assets/images/logo-white.svg"
                    className="hidden dark:block h-8 w-auto"
                    alt="Logo"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-4">
            <a
              href="/"
              className="text-gray-500 dark:text-gray-400 text-sm px-4 py-6 hover:text-primary-500 dark:hover:text-primary-400 font-medium transition-colors duration-200"
            >
              Home
            </a>

            {/* Products Dropdown (Desktop) */}
            <div className="relative">
              <button
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                className="text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 group text-sm inline-flex items-center px-4 py-6 font-medium rounded-full transition-colors duration-200"
              >
                Products
                <svg
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    productsDropdownOpen ? "transform rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <path
                    d="M4.33301 5.91666L8.49967 10.0833L12.6663 5.91666"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Products dropdown menu */}
              {productsDropdownOpen && (
                <div className="absolute dark:bg-gray-800 dark:border-gray-700 left-0 w-[266px] bg-white rounded-2xl shadow-lg border border-gray-200 p-3 z-50">
                  <div className="space-y-1">
                    <a
                      href="/text-generator"
                      className="flex items-center px-2 py-2 text-sm font-medium rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2"
                      >
                        {/* SVG paths for text generator icon */}
                      </svg>
                      <span>Text Generator</span>
                    </a>
                    <a
                      href="/image-generator"
                      className="flex items-center px-2 py-2 text-sm font-medium rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34"
                        height="34"
                        viewBox="0 0 34 34"
                        fill="none"
                        className="mr-2"
                      >
                        {/* SVG paths for image generator icon */}
                      </svg>
                      Image Generator
                    </a>
                    {/* Other product links */}
                  </div>
                </div>
              )}
            </div>

            {/* Pages Dropdown (Desktop) */}
            <div className="relative">
              <button
                onClick={() => setPagesDropdownOpen(!pagesDropdownOpen)}
                className="text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 group text-sm inline-flex items-center px-4 py-6 font-medium rounded-full transition-colors duration-200"
              >
                Pages
                <svg
                  className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                    pagesDropdownOpen ? "transform rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <path
                    d="M4.33301 5.91666L8.49967 10.0833L12.6663 5.91666"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Pages dropdown menu */}
              {pagesDropdownOpen && (
                <div className="absolute left-0 w-[266px] bg-white dark:bg-gray-800 dark:border-gray-700 rounded-2xl shadow-lg border border-gray-200 p-3 z-50">
                  <div className="space-y-1">
                    <a
                      href="/dashboard"
                      className="flex items-center px-4 py-3 hover:text-gray-800 dark:hover:text-white text-sm font-medium rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      Dashboard
                    </a>
                    <a
                      href="/pricing"
                      className="flex items-center px-4 py-3 hover:text-gray-800 dark:hover:text-white text-sm font-medium rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      Pricing
                    </a>
                    {/* Other page links */}
                  </div>
                </div>
              )}
            </div>

            <a
              href="/contact"
              className="text-gray-500 dark:text-gray-400 text-sm px-4 py-6 hover:text-primary-500 dark:hover:text-primary-400 font-medium transition-colors duration-200"
            >
              Contact
            </a>
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center">
            {/* Dark Mode Toggle */}
            <button
            onClick={toggleTheme}
              className="inline-flex items-center dark:hover:bg-gray-700 dark:hover:text-white hover:bg-gray-100 hover:text-gray-800 text-gray-500 dark:text-gray-400 justify-center border border-gray-200 dark:border-gray-700 rounded-full size-11 transition-colors duration-200"
            >
              {theme === "light" ? (
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M6.24683 7.08492C6.24683 10.7677 9.23232 13.7532 12.9151 13.7532C14.6687 13.7532 16.2641 13.0764 17.4545 11.9697C16.584 15.2727 13.5765 17.7083 10.0001 17.7083C5.74289 17.7083 2.29175 14.2572 2.29175 9.99996C2.29175 6.42356 4.72736 3.41602 8.03036 2.54558C6.92367 3.73594 6.24683 5.33139 6.24683 7.08492Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>

            {/* Account dropdown */}
            <div className="ml-4 relative">
              <div>
                <button
                  onClick={() => setAccountDropdownOpen(!accountDropdownOpen)}
                  className="rounded-full text-sm font-medium focus:outline-none"
                >
                  <img
                    src="/assets/images/users/user-1.png"
                    className="w-11 h-11 rounded-full"
                    alt="User"
                  />
                </button>
              </div>
              {accountDropdownOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-[260px] shadow-lg dark:bg-gray-800 dark:border-gray-700 py-4 px-3 bg-white border border-gray-200 rounded-2xl">
                  <div className="mb-4 px-3">
                    <span className="text-gray-700 text-sm font-medium dark:text-gray-300">
                      musharof
                    </span>
                    <p className="text-gray-500 text-sm dark:text-gray-400">
                      random@pimjo.com
                    </p>
                  </div>
                  <div className="space-y-1">
                    <a
                      href="#"
                      className="px-3 py-2 flex gap-3 dark:hover:bg-gray-700 dark:text-gray-400 font-medium items-center text-sm text-gray-700 hover:text-gray-800 dark:hover:text-white transition hover:bg-gray-100 rounded-lg"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                      >
                        {/* SVG path for edit profile icon */}
                      </svg>
                      Edit profile
                    </a>
                    {/* Other account dropdown items */}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile right sidebar button */}
            <button
              type="button"
              className="inline-flex ml-4 lg:hidden items-center dark:hover:bg-gray-700 dark:hover:text-white hover:bg-gray-100 hover:text-gray-800 text-gray-500 dark:text-gray-400 justify-center border border-gray-200 dark:border-gray-700 rounded-full size-11 transition-colors duration-200"
            >
              <span className="sr-only">Open right sidebar</span>
              <svg
                className="size-7"
                width="32"
                height="32"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG paths for dots icon */}
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;