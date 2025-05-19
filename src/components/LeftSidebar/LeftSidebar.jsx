import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaHotjar, FaGlobe, FaGamepad, FaQuestionCircle, FaLaptop, FaFilm, FaInfoCircle, FaBriefcase, FaBullhorn, FaBook, FaHandsHelping, FaRegFileAlt } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { MdPrivacyTip, MdPolicy } from 'react-icons/md';
import "../LeftSidebar/Sidebar.css"

const LeftSidebar = ({slideIn,handleSlideIn}) => {
  return (
  <div
    className={`${
      slideIn ? 'translate-x-0' : '-translate-x-full'
    } fixed left-0 top-20 z-50 w-64 h-[calc(100vh-5rem)] border rounded shadow bg-white dark:bg-gray-800 transition-transform duration-300 ease-in-out`}
  >
    <nav className="side-nav p-4 overflow-y-auto h-full custom-scrollbar">
      <button onClick={handleSlideIn} className="nav-btn mb-4">
        <NavLink
          to="/"
          className="side-nav-links text-lg text-gray-700 dark:text-white hover:text-blue-500"
          activeClassName="active"
        >
          <FaHome className="mr-3" />
          <p>Home</p>
        </NavLink>
      </button>
      <button onClick={handleSlideIn} className="nav-btn pl-3 mb-4">
        <NavLink
          to="/popular"
          className="side-nav-links text-lg text-gray-700 dark:text-white hover:text-blue-500"
          activeClassName="active"
        >
          <FaHotjar className="mr-3" />
          <p>Popular</p>
        </NavLink>
      </button>

      {/* Topics Section */}
      <div className="side-nav-div mt-4">
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-300 mb-2">TOPICS</p>
        <NavLink to="/internet-culture" className="nav-btn w-full py-2 px-4 mb-2 flex items-center" onClick={handleSlideIn}>
          <FaGlobe className="mr-3" />
          <p className="side-nav-links text-gray-700 dark:text-white hover:text-blue-500">Internet Culture (Viral)</p>
        </NavLink>
        <NavLink to="/editor/hsiuft87wte87stf" className="nav-btn w-full py-2 px-4 mb-2 flex items-center" onClick={handleSlideIn}>
          <FaGlobe className="mr-3" />
          <p className="side-nav-links text-gray-700 dark:text-white hover:text-blue-500">Code Editor</p>
        </NavLink>
        <NavLink to="/games" className="nav-btn w-full py-2 px-4 mb-2 flex items-center" onClick={handleSlideIn}>
          <FaGamepad className="mr-3" />
          <p className="side-nav-links text-gray-700 dark:text-white hover:text-blue-500">Games</p>
        </NavLink>
        <NavLink to="/qna" className="nav-btn w-full py-2 px-4 mb-2 flex items-center" onClick={handleSlideIn}>
          <FaQuestionCircle className="mr-3" />
          <p className="side-nav-links text-gray-700 dark:text-white hover:text-blue-500">Q&A</p>
        </NavLink>
        <NavLink to="/technology" className="nav-btn w-full py-2 px-4 mb-2 flex items-center" onClick={handleSlideIn}>
          <FaLaptop className="mr-3" />
          <p className="side-nav-links text-gray-700 dark:text-white hover:text-blue-500">Technology</p>
        </NavLink>
        <NavLink to="/movies" className="nav-btn w-full py-2 px-4 mb-2 flex items-center" onClick={handleSlideIn}>
          <FaFilm className="mr-3" />
          <p className="side-nav-links text-gray-700 dark:text-white hover:text-blue-500">Movies & TV</p>
        </NavLink>
        <p className="side-nav-links text-sm text-blue-500 hover:underline cursor-pointer mt-2">See more</p>
      </div>

      {/* Resources Section */}
      <div className="side-nav-div mt-4">
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-300 mb-2">RESOURCES</p>
        <NavLink to="/about" className="nav-btn w-full py-2 px-4 mb-2 flex items-center" onClick={handleSlideIn}>
          <FaInfoCircle className="mr-3" />
          <p className="side-nav-links text-gray-700 dark:text-white hover:text-blue-500">About Reddit</p>
        </NavLink>
        <NavLink to="/advertise" className="nav-btn w-full py-2 px-4 mb-2 flex items-center" onClick={handleSlideIn}>
          <FaBullhorn className="mr-3" />
          <p className="side-nav-links text-gray-700 dark:text-white hover:text-blue-500">Advertise</p>
        </NavLink>
        <NavLink to="/help" className="nav-btn w-full py-2 px-4 mb-2 flex items-center" onClick={handleSlideIn}>
          <FaHandsHelping className="mr-3" />
          <p className="side-nav-links text-gray-700 dark:text-white hover:text-blue-500">Help</p>
        </NavLink>
        <NavLink to="/blog" className="nav-btn w-full py-2 px-4 mb-2 flex items-center" onClick={handleSlideIn}>
          <FaBook className="mr-3" />
          <p className="side-nav-links text-gray-700 dark:text-white hover:text-blue-500">Blog</p>
        </NavLink>
        <NavLink to="/careers" className="nav-btn w-full py-2 px-4 mb-2 flex items-center" onClick={handleSlideIn}>
          <FaBriefcase className="mr-3" />
          <p className="side-nav-links text-gray-700 dark:text-white hover:text-blue-500">Careers</p>
        </NavLink>
        <NavLink to="/community" className="nav-btn w-full py-2 px-4 mb-2 flex items-center" onClick={handleSlideIn}>
          <FiUsers className="mr-3" />
          <p className="side-nav-links text-gray-700 dark:text-white hover:text-blue-500">Community</p>
        </NavLink>
      </div>

      {/* Policies Section */}
      <div className="side-nav-div mt-4">
        <p className="text-sm font-semibold text-gray-500 dark:text-gray-300 mb-2">POLICIES</p>
        <NavLink to="/content-policy" className="nav-btn w-full py-2 px-4 mb-2 flex items-center" onClick={handleSlideIn}>
          <MdPolicy className="mr-3" />
          <p className="side-nav-links text-gray-700 dark:text-white hover:text-blue-500">Content Policy</p>
        </NavLink>
        <NavLink to="/privacy-policy" className="nav-btn w-full py-2 px-4 mb-2 flex items-center" onClick={handleSlideIn}>
          <MdPrivacyTip className="mr-3" />
          <p className="side-nav-links text-gray-700 dark:text-white hover:text-blue-500">Privacy Policy</p>
        </NavLink>
        <NavLink to="/user-agreement" className="nav-btn w-full py-2 px-4 mb-2 flex items-center" onClick={handleSlideIn}>
          <FaRegFileAlt className="mr-3" />
          <p className="side-nav-links text-gray-700 dark:text-white hover:text-blue-500">User Agreement</p>
        </NavLink>
      </div>
    </nav>
  </div>
);
}
export default LeftSidebar;
