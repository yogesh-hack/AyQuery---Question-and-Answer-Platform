import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import decode from "jwt-decode";
import logo from "../../assets/logo.png";
import search from "../../assets/search-solid.svg";
import Avatar from "../../components/Avatar/Avatar";
import { setCurrentUser } from "../../actions/currentUser";
import bars from "../../assets/bars-solid.svg";
import { useTheme } from "../../context/ThemeContext";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const Navbar = ({ handleSlideIn }) => {
  const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme(); // Get theme and toggle function

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
    dispatch(setCurrentUser(null));
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

  return (
    <nav className="main-nav fixed border-bottom shadow-xl top-0 w-full bg-white dark:bg-gray-800">
      <div className="navbar flex items-center justify-between p-4 dark:text-gray-300 text-gray-900">
        <button className="slide-in-icon" onClick={handleSlideIn}>
          <img src={bars} alt="bars" width="15" className="dark:invert" />
        </button>
        
        <div className="navbar-1 flex items-center space-x-4">
          <Link to="/" className="nav-item nav-logo">
            <img src={logo} alt="logo" width={100} className="dark:invert" />
          </Link>
          
          <Link to="/Aboutus" className="nav-item nav-btn res-nav dark:text-gray-300 text-gray-900">
            About
          </Link>
          <Link to="/Questions" className="nav-item nav-btn res-nav dark:text-gray-300 text-gray-900">
            Queries
          </Link>
          <Link to="/" className="nav-item nav-btn res-nav dark:text-gray-300 text-gray-900">
            For Teams
          </Link>
          <Link to="/video" className="nav-item nav-btn res-nav dark:text-gray-300 text-gray-900">
            Watch Video
          </Link>
          
          <form className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search..."
              className="dark:bg-gray-700 bg-gray-100 text-gray-900 dark:text-gray-200 rounded p-2"
            />
            <img src={search} alt="search" width="18" className="search-icon dark:invert" />
          </form>
        </div>

        <div className="navbar-2 flex items-center space-x-4">
          {User === null ? (
            <Link to="/Auth" className="nav-item nav-links dark:text-gray-300 text-gray-900">
              Log in
            </Link>
          ) : (
            <>
              <Avatar
                backgroundColor="#009dff"
                px="10px"
                py="7px"
                borderRadius="50%"
                color="white"
                className="dark:bg-gray-700"
              >
                <Link
                  to={`/Users/${User?.result?._id}`}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {User.result.name.charAt(0).toUpperCase()}
                </Link>
              </Avatar>
              <button 
                className="nav-item nav-links dark:text-gray-300 text-gray-900"
                onClick={handleLogout}
              >
                Log out
              </button>
              <button 
        onClick={toggleTheme} 
        className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700"
      >
        {theme === 'light' ? <MdDarkMode /> : <MdLightMode />}
      </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
