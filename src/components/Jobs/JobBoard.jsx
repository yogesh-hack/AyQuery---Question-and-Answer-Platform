import React, { useState } from 'react';
import { FiSearch, FiBriefcase, FiMapPin, FiClock, FiDollarSign } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const JobBoard = () => {
  const [jobTypeFilter, setJobTypeFilter] = useState([]);
  const [roleFilter, setRoleFilter] = useState([]);
  const navigate = useNavigate();

  const jobs = [
    {
      id: 1,
      title: "Engineering Manager - Developer Experience",
      company: "Gonto",
      salary: "$75K - $100K",
      location: "London, UK",
      time: "22d",
      type: "Full Time",
      remote: false,
      role: "Management / Finance"
    },
    {
      id: 2,
      title: "Software Engineer - Backend",
      company: "Vimeo",
      salary: "$90K - $120K",
      location: "Remote",
      time: "2h",
      type: "Full Time",
      remote: true,
      role: "Programming"
    },
    // Add more jobs as needed
  ];

  const trustedCompanies = [
    "facebook", "tinder", "airbnb", "HubSpot", "amazon", "VISA", "Robinhood"
  ];

  const jobTypes = [
    "Full-time", "Part-time", "Internship", "Contract / Freelance", "Co-founder"
  ];

  const jobRoles = [
    "Programming", "Design", "Management / Finance", "Customer Support", "Marketing"
  ];

  const toggleFilter = (filter, setFilter, value) => {
    if (filter.includes(value)) {
      setFilter(filter.filter(item => item !== value));
    } else {
      setFilter([...filter, value]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0d1117] text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-200 to-purple-400 dark:from-indigo-900 dark:to-purple-80 text-dark dark:text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Join the best tech startups in the industry</h1>
          <p className="text-xl mb-8 opacity-90">
            Our job board connects top talent with innovative companies. Find your dream job today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition">
              Post a job - $299
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-6 py-3 rounded-lg font-medium transition">
              Reach 100K+ Professionals
            </button>
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-gray-500 dark:text-gray-400 mb-8">Trusted by</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {trustedCompanies.map((company, index) => (
              <div key={index} className="text-2xl font-bold text-gray-700 dark:text-gray-300 opacity-70 hover:opacity-100 transition">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 sticky top-20">
              <h3 className="text-xl font-bold mb-6">Filters</h3>
              
              {/* Search */}
              <div className="relative mb-6">
                <input
                  type="text"
                  placeholder="Search jobs..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <FiSearch className="absolute left-3 top-3 text-gray-400" />
              </div>

              {/* Job Type */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Job Type</h4>
                <div className="space-y-2">
                  {jobTypes.map((type) => (
                    <label key={type} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={jobTypeFilter.includes(type)}
                        onChange={() => toggleFilter(jobTypeFilter, setJobTypeFilter, type)}
                        className="rounded text-blue-600 dark:text-blue-400 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-gray-700 dark:text-gray-300">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Job Roles */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Job Roles</h4>
                <div className="space-y-2">
                  {jobRoles.map((role) => (
                    <label key={role} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={roleFilter.includes(role)}
                        onChange={() => toggleFilter(roleFilter, setRoleFilter, role)}
                        className="rounded text-blue-600 dark:text-blue-400 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-gray-700 dark:text-gray-300">{role}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button className="text-blue-600 dark:text-blue-400 hover:underline">
                Clear all filters
              </button>
            </div>
          </div>

          {/* Jobs List */}
          <div className="lg:w-3/4">
            <h2 className="text-2xl font-bold mb-6">Latest jobs</h2>
            
            <div className="space-y-4">
              {jobs.map((job) => (
                <div key={job.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{job.title}</h3>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-3">{job.company}</p>
                      </div>
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm px-3 py-1 rounded-full">
                        {job.time}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-4 mt-4">
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <FiDollarSign className="mr-1" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <FiMapPin className="mr-1" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <FiClock className="mr-1" />
                        <span>{job.type}</span>
                      </div>
                      {job.remote && (
                        <div className="flex items-center text-green-600 dark:text-green-400">
                          <FiBriefcase className="mr-1" />
                          <span>Remote</span>
                        </div>
                      )}
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
                      <span className="text-sm text-gray-500 dark:text-gray-400">{job.role}</span>
                      <button 
        onClick={() => navigate(`/careers/${job.id}`)} 
        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">
                        
        Apply Now →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobBoard;