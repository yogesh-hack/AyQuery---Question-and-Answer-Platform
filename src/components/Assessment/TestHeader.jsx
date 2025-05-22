import logo from "../../assets/logo.png";
import { FaMoon, FaSun, FaUserCircle } from 'react-icons/fa'
import { useTheme } from "../../context/ThemeContext";

function TestHeader() {
     const { theme, toggleTheme } = useTheme();
  return (
          <nav className="bg-gray-900 dark:bg-[#0d1117] text-white px-6 py-3 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="logo" width={100} className="dark:invert" />
              <span className="text-lg font-semibold">Sample Test</span>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <div>Answered: <strong>0 / 3</strong></div>
              <div>⏱ 58 mins</div>
              <button
            onClick={toggleTheme}
            className="px-2 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
          >
            {theme === "light" ? <FaSun /> : <FaMoon />}
          </button>
              <FaUserCircle className="text-xl" />
            </div>
          </nav>
  )
}

export default TestHeader