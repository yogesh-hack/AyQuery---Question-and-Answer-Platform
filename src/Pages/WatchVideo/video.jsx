import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import Videoplayer from "../../components/VideoPlayer/Videoplayer";
import sample from '../../assets/sample.mp4'
import sample2 from '../../assets/sample2.mp4'
import CourseSide from "../../components/VideoPlayer/CourseSide";
import CoursesGrid from "../../components/VideoPlayer/CoursesList";

const Video = ({ slideIn, handleSlideIn }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
    {/* Left Sidebar */}
    <div className="lg:col-span-1 mt-28 ml-3 w-full">
    <div className="lg:col-span-1 w-full sticky top-20 h-screen overflow-y-auto">
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 border border-gray-200 dark:border-gray-700">
    {/* Search Box */}
    <div className="mb-6">
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
        Search Courses
      </h3>
      <div className="relative">
        <input
          type="text"
          placeholder="Search courses..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500 transition-all duration-200"
        />
        <div className="absolute left-3 top-2.5 text-gray-400 dark:text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
    </div>

    {/* Categories Filter */}
    <div className="mb-6">
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
        Categories
      </h3>
      <div className="space-y-2">
        {['All Courses', 'Development', 'Design', 'Business', 'Marketing', 'Data Science'].map((category) => (
          <div key={category} className="flex items-center">
            <input
              id={`category-${category}`}
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
            />
            <label htmlFor={`category-${category}`} className="ml-3 text-sm text-gray-700 dark:text-gray-300">
              {category}
            </label>
          </div>
        ))}
      </div>
    </div>

    {/* Difficulty Filter */}
    <div className="mb-6">
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
        Difficulty
      </h3>
      <div className="space-y-2">
        {['All Levels', 'Beginner', 'Intermediate', 'Advanced'].map((level) => (
          <div key={level} className="flex items-center">
            <input
              id={`level-${level}`}
              type="radio"
              name="difficulty"
              className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
            />
            <label htmlFor={`level-${level}`} className="ml-3 text-sm text-gray-700 dark:text-gray-300">
              {level}
            </label>
          </div>
        ))}
      </div>
    </div>

    {/* Duration Filter */}
    <div className="mb-6">
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
        Duration
      </h3>
      <div className="space-y-2">
        {['Any', '0-2 hours', '2-5 hours', '5+ hours'].map((duration) => (
          <div key={duration} className="flex items-center">
            <input
              id={`duration-${duration}`}
              type="radio"
              name="duration"
              className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
            />
            <label htmlFor={`duration-${duration}`} className="ml-3 text-sm text-gray-700 dark:text-gray-300">
              {duration}
            </label>
          </div>
        ))}
      </div>
    </div>

    {/* Price Filter */}
    <div className="mb-6">
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
        Price
      </h3>
      <div className="space-y-2">
        {['All', 'Free', 'Paid'].map((price) => (
          <div key={price} className="flex items-center">
            <input
              id={`price-${price}`}
              type="radio"
              name="price"
              className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700"
            />
            <label htmlFor={`price-${price}`} className="ml-3 text-sm text-gray-700 dark:text-gray-300">
              {price}
            </label>
          </div>
        ))}
      </div>
    </div>

    {/* Reset Filters Button */}
    <button className="w-full py-2 px-4 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
      Reset All Filters
    </button>
  </div>
</div>
    </div>
  
    {/* Main Content Area */}
    <div className="lg:col-span-3 w-full mt-20">
      <CoursesGrid/>
    </div>
  </div>
  );
};

export default Video;
