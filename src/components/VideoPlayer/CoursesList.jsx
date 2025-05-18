import React from 'react';
import { useNavigate } from 'react-router-dom';

const CoursesList = ({ course }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/Courses/${course.slug}`);
  };

  return (
    <>
    <div 
      onClick={handleClick}
      className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800 cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-xl"
    >
      <div className="px-6 py-4">
      <img alt="" class="h-full w-full mask-l-from-60% object-cover object-center opacity-40" src="https://assets.tailwindcss.com/templates/compass/hero-background.png"/>
        <h2 className="font-bold text-xl mb-2 text-gray-800 dark:text-white">{course.title}</h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {course.description}
        </p>
        
        <div className="flex flex-col space-y-2 mb-4">
          <div className="flex items-center text-gray-700 dark:text-gray-300">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
            </svg>
            {course.modules} modules
          </div>
          <div className="flex items-center text-gray-700 dark:text-gray-300">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
            {course.lessons} lessons
          </div>
          <div className="flex items-center text-gray-700 dark:text-gray-300">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            {course.duration}
          </div>
        </div>
      </div>
      <div className="px-6 pt-2 pb-4">
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
          Start the course
        </button>
      </div>
    </div>
    </>
  );
};

// Usage example
const CoursesGrid = () => {
  const courses = [
    {
      title: "Compass",
      description: "A comprehensive journey that helps you navigate uncertainty and make choices aligned with your values and goals",
      modules: 4,
      lessons: 20,
      duration: "3 hr 26 min",
      slug: "compass"
    },
   
    {
      title: "Compass",
      description: "A comprehensive journey that helps you navigate uncertainty and make choices aligned with your values and goals",
      modules: 4,
      lessons: 20,
      duration: "3 hr 26 min",
      slug: "compass"
    },
   
    {
      title: "Compass",
      description: "A comprehensive journey that helps you navigate uncertainty and make choices aligned with your values and goals",
      modules: 4,
      lessons: 20,
      duration: "3 hr 26 min",
      slug: "compass"
    },

   
  ];

  return (
    <div className="flex flex-col mt-6 justify-center">
      <h1 className="text-4xl font-bold mb-4">Courses</h1>
      <p className="text-gray-600 mb-6">Explore our wide range of courses</p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {courses.map((course, index) => (
        <CoursesList key={index} course={course} />
      ))}
    </div>
    </div>
  );
};

export default CoursesGrid;