import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import decode from "jwt-decode";
import logo from "../../assets/logo.png";
import search from "../../assets/search-solid.svg";
import Avatar from "../../components/Avatar/Avatar";
import { setCurrentUser } from "../../actions/currentUser";
import bars from "../../assets/bars-solid.svg";
import { useTheme } from "../../context/ThemeContext";
import { MdLightMode, MdDarkMode, MdKeyboardArrowDown } from "react-icons/md";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Navbar = ({ handleSlideIn }) => {
  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
const location = useLocation();
const currentPath = location.pathname;

const navLinks = [
  { label: "About", to: "/Aboutus" },
  { label: "Queries", to: "/Questions" },
  { label: "Tweets", to: "/Tweets" },
  { label: "Media", to: "/Media" },
  { label: "Courses", to: "/Courses" },
  { label: "Articles", to: "/Articles" },
];

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    toast.success("Logged out successfully!");
    dispatch(setCurrentUser(null));
    navigate("/Auth");
  };

  useEffect(() => {
    const token = User?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
  }, [User?.token, dispatch]);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className="main-nav fixed top-0 w-full z-10 bg-transparent shadow-xl backdrop-blur-lg">
      <div className="navbar flex items-center justify-between p-4">
        {/* Mobile menu button */}
        <button type="button" className="block md:hidden" onClick={handleSlideIn}>
          <img src={bars} alt="menu" width="20" className="dark:invert" />
        </button>

        {/* Logo */}
        <Link to="/" className="nav-item nav-logo flex-1 lg:flex-none">
          <img src={logo} alt="logo" width={100} className="dark:invert" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-6 items-center">
  {navLinks.map(({ label, to }) => {
    const isActive = currentPath === to;

    return (
      <Link
  key={label}
  to={to}
  className={`relative nav-item text-sm font-medium transition-all duration-300 ease-in-out px-2 py-1 rounded 
    text-gray-900 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400
    ${isActive ? 'shadow-[0_4px_12px_0_rgba(255,0,128,0.6),0_6px_20px_0_rgba(0,128,255,0.5)]' : ''}`}
>
  {label}
</Link>

    );
  })}

  <form className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-2 transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-500">
    <input
      type="text"
      placeholder="Search..."
      className="bg-transparent outline-none text-sm text-gray-900 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
    />
    <img src={search} alt="search" width="18" className="search-icon dark:invert transition-transform hover:scale-110" />
  </form>
</div>


        {/* Profile, Logout, and Theme Toggle */}
        <div className="flex items-center space-x-4">
          {User ? (
            <>
              <Avatar
                backgroundColor="#009dff"
                px="12px"
                py="6px"
                borderRadius="50%"
                color="white"
                className="dark:bg-gray-700"
              >
                <Link
                  to={`/Users/${User._id}`}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {User?.name?.charAt(0).toUpperCase()}
                </Link>
              </Avatar>
              {/* Log Out button */}
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 font-medium bg-red-100 dark:bg-red-950 hover:bg-red-200 dark:hover:bg-red-900 text-red-600 dark:text-red-200 px-3 py-2 rounded-full transition"
              >
                Log Out
              </button>
            </>
          ) : (
            <Link to="/Auth" className="nav-item nav-links text-gray-900 dark:text-gray-300">
              Log in
            </Link>
          )}
          {/* Dropdown toggle button for mobile */}
          <button className="lg:hidden" onClick={toggleDropdown}>
            <MdKeyboardArrowDown size={24} className="dark:text-gray-300 text-gray-900" />
          </button>
          {/* Theme toggle button */}
          <button
            onClick={toggleTheme}
            className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            {theme === "light" ? <MdDarkMode /> : <MdLightMode />}
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Mobile */}
      {isDropdownOpen && (
        <div className="lg:hidden absolute right-4 top-16 bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 space-y-2 w-48">
          <Link
            to="/Aboutus"
            className="block text-gray-900 dark:text-gray-300"
            onClick={toggleDropdown}
          >
            About
          </Link>
          <Link
            to="/Questions"
            className="block text-gray-900 dark:text-gray-300"
            onClick={toggleDropdown}
          >
            Queries
          </Link>
          <Link
            to="/"
            className="block text-gray-900 dark:text-gray-300"
            onClick={toggleDropdown}
          >
            For Teams
          </Link>
          <Link
            to="/video"
            className="block text-gray-900 dark:text-gray-300"
            onClick={toggleDropdown}
          >
            Watch Video
          </Link>
          <Link
            to="/Articles"
            className="block text-gray-900 dark:text-gray-300"
            onClick={toggleDropdown}
          >
            Articles
          </Link>
          <form className="flex items-center space-x-2 mt-2">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-200 rounded p-2 w-full"
            />
            <img src={search} alt="search" width="18" className="search-icon dark:invert" />
          </form>
          {/* Log Out button in dropdown */}
          {User && (
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 font-medium bg-red-100 dark:bg-red-950 hover:bg-red-200 dark:hover:bg-red-900 text-red-600 dark:text-red-300 px-3 py-2 rounded-full transition"
            >
              Log Out
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
