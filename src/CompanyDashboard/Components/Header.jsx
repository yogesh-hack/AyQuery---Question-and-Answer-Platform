import { FiSearch, FiBell, FiUser, FiChevronDown } from 'react-icons/fi';
import { useTheme } from "../../context/ThemeContext";
import { MdLightMode, MdDarkMode, MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logo from "../../assets/logo.png";
import { setCurrentUser } from '../../actions/currentUser';
import decode from 'jwt-decode';
import { toast } from 'react-toastify';
import { Crown, FlameKindlingIcon } from 'lucide-react';
const Header = () => {
    const dispatch = useDispatch();
  const User = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

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
  const { theme, toggleTheme } = useTheme();

  return (
   <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo and Navigation */}
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center space-x-2">
  <img src={logo} alt="logo" width={100} className="dark:invert" />

  {/* Business Badge */}
 <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 border border-blue-200 dark:border-blue-700 shadow-sm">
  <Crown className="h-4 w-4 text-yellow-500" />
  Business
</span>
</Link>


          <nav className="hidden md:flex space-x-6">
            {["Recitorship", "Opportunities", "Leads", "Calendar", "Covers", "Reports", "Quotes"].map(item => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Right side controls */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <button className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none">
            <FiSearch className="h-5 w-5 text-blue-500" />
            <span className="sr-only">Search</span>
          </button>

          {/* Notification */}
          <button className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none">
            <FiBell className="h-5 w-5 text-yellow-500" />
            <span className="sr-only">Notifications</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            {theme === "light" ? <MdDarkMode className="text-purple-600" /> : <MdLightMode className="text-yellow-400" />}
          </button>

          {/* User Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <FiUser className="h-5 w-5" />
              </div>
              <FiChevronDown className="hidden md:block h-5 w-5 text-gray-400 dark:text-gray-300" />
            </button>

            {/* Dropdown */}
            {showDropdown && User && (
              <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-lg shadow-lg z-50 border border-gray-200 dark:border-gray-700">
                <div className="p-4">
                  <p className="text-lg font-semibold">{User?.name?.toUpperCase()}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{User?.email}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Aygen ID: {User?.companyAgentId}</p>
                </div>
                <div className="border-t border-gray-100 dark:border-gray-700" />
                <div className="p-2 flex justify-between items-center">
                  <Link
                    to={`/Users/${User._id}`}
                    className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline"
                  >
                    View Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-red-500 hover:text-red-600 text-sm font-medium"
                  >
                    Log Out
                  </button>
                </div>
              </div>
            )}

            {/* Login */}
            {!User && (
              <div className="ml-4">
                <Link
                  to="/Auth"
                  className="text-sm font-medium text-gray-900 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Log in
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;