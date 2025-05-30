import { useState } from 'react';
import logo from "../../assets/logo.png";
import { useTheme } from "../../context/ThemeContext";
import { MdLightMode, MdDarkMode, MdKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const { theme, toggleTheme } = useTheme();

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };


  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="z-10 bg-transparent backdrop-blur-lg sticky top-0 z-50 py-4 lg:py-0">
      <div className="px-4 sm:px-6 lg:px-7">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
             <img src={logo} alt="logo" width={100} className="dark:invert" />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center">
            <a href="/" className="text-gray-800 dark:text-white/90 text-sm px-4 py-6 hover:text-primary-500 font-medium">Home</a>
            
            {/* Products Dropdown */}
            <div className="relative nav-item">
              <button 
                className="text-gray-500 dark:text-gray-400 hover:text-primary-500 group text-sm inline-flex items-center px-4 py-6 font-medium rounded-full"
                onClick={() => toggleDropdown('products')}
              >
                Products
                <svg className={`dropdown-arrow ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === 'products' ? 'transform rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                  <path d="M4.33301 5.91666L8.49967 10.0833L12.6663 5.91666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
              {activeDropdown === 'products' && (
                <div className="dropdown-menu absolute dark:bg-dark-secondary dark:border-gray-800 left-0 w-[266px] bg-white rounded-2xl shadow-theme-lg border border-gray-100 p-3 z-50">
                  <div className="space-y-1">
                    <a href="text-generator.html" className="flex items-center px-2 py-2 text-sm font-medium rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5">
                      {/* Text Generator SVG */}
                      <span>Text Generator</span>
                    </a>
                    <a href="image-generator.html" className="flex items-center px-2 py-2 text-sm font-medium rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5">
                      {/* Image Generator SVG */}
                      <span>Image Generator</span>
                    </a>
                    <a href="code-generator.html" className="flex items-center px-2 py-2 text-sm font-medium rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5">
                      {/* Code Generator SVG */}
                      <span>Code Generator</span>
                    </a>
                    <a href="video-generator.html" className="flex items-center px-2 py-2 text-sm font-medium rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5">
                      {/* Video Generator SVG */}
                      <span>Video Generator</span>
                    </a>
                    <a href="email-generator.html" className="flex items-center px-2 py-2 text-sm font-medium rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5">
                      {/* Email Generator SVG */}
                      <span>Email Generator</span>
                    </a>
                  </div>
                </div>
              )}
            </div>
            
            {/* Pages Dropdown */}
            <div className="relative nav-item">
              <button 
                className="text-gray-500 group dark:text-gray-400 hover:text-primary-400 text-sm inline-flex items-center px-4 py-6 font-medium rounded-full"
                onClick={() => toggleDropdown('pages')}
              >
                Pages
                <svg className={`dropdown-arrow ml-1 h-4 w-4 transition-transform duration-200 ${activeDropdown === 'pages' ? 'transform rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                  <path d="M4.33301 5.91666L8.49967 10.0833L12.6663 5.91666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </button>
              {activeDropdown === 'pages' && (
                <div className="dropdown-menu absolute left-0 w-[266px] bg-white dark:bg-dark-secondary dark:border-gray-800 rounded-2xl shadow-theme-lg border border-gray-100 p-3 z-50">
                  <div className="space-y-1">
                    <a href="dashboard.html" className="flex items-center px-4 py-3 hover:text-gray-800 dark:hover:text-white/90 text-sm font-medium rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5">
                      Dashboard
                    </a>
                    {/* Other page links */}
                  </div>
                </div>
              )}
            </div>
            
            <a href="contact.html" className="text-gray-500 dark:text-gray-400 text-sm px-4 py-6 hover:text-primary-500 font-medium">Contact</a>
          </nav>
          
          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
             <button
            onClick={toggleTheme}
            className="px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
          </button>
            
            <button 
              type="button" 
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 lg:hidden"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              )}
            </button>
            
           <Link to="/Auth" className="text-sm block py-3 font-medium text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white/90">
                Sign In
              </Link>
           <Link to="/Auth?type=new_account" className="inline-flex bg-purple-500 items-center text-white px-5 py-3 text-sm rounded-full button-bg h-11">
                Create New Account
              </Link>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute bg-white dark:bg-dark-primary w-full border-b border-gray-200 dark:border-gray-800">
          <div className="pt-2 pb-3 space-y-1 px-4 sm:px-6">
            <a href="index.html" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              Home
            </a>
            
            {/* Mobile Products Dropdown */}
            <div>
              <button 
                className="mobile-dropdown-toggle flex justify-between items-center w-full px-3 py-2 rounded-md text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => toggleDropdown('mobile-products')}
              >
                <span>Products</span>
                <svg className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'mobile-products' ? 'transform rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {activeDropdown === 'mobile-products' && (
                <div className="mt-2 space-y-1 pl-4">
                  <a href="text-generator.html" className="flex items-center px-3 py-2 gap-3 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                    {/* Text Generator SVG */}
                    <span>Text Generator</span>
                  </a>
                  {/* Other product links */}
                </div>
              )}
            </div>
            
            {/* Mobile Pages Dropdown */}
            <div>
              <button 
                className="mobile-dropdown-toggle flex justify-between items-center w-full px-3 py-2 rounded-md text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => toggleDropdown('mobile-pages')}
              >
                <span>Pages</span>
                <svg className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'mobile-pages' ? 'transform rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {activeDropdown === 'mobile-pages' && (
                <div className="mt-2 space-y-1 pl-4">
                  <a href="dashboard.html" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">
                    Dashboard
                  </a>
                  {/* Other page links */}
                </div>
              )}
            </div>
            
            <a href="contact.html" className="block px-3 py-2 rounded-md text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
              Contact
            </a>
            
            <div className="px-3">
              <Link to="/Auth" className="text-sm block py-3 font-medium text-gray-500 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white/90">
                Sign In
              </Link>
              <Link to="/Auth" className="inline-flex bg-purple-500 items-center text-gray-500 dark:text-gray-300 px-5 py-3 text-sm rounded-full button-bg h-11">
                Create new Account
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;