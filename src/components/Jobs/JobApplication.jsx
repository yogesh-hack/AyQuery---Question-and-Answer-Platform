import React, { useState } from 'react';
import { FiArrowLeft, FiExternalLink, FiClock, FiMapPin, FiDollarSign, FiBriefcase } from 'react-icons/fi';

const JobApplication = ({ job, onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume: null,
    coverLetter: ''
  });

  const relatedJobs = [
    {
      id: 2,
      title: "Senior AI Engineer",
      company: "Tech Innovations Inc.",
      salary: "$90K - $130K",
      location: "Remote",
      time: "3d",
      type: "Full Time"
    },
    {
      id: 3,
      title: "Machine Learning Team Lead",
      company: "DataSystems",
      salary: "$110K - $150K",
      location: "San Francisco, CA",
      time: "1w",
      type: "Full Time"
    },
    {
      id: 4,
      title: "AI Product Manager",
      company: "FutureTech",
      salary: "$95K - $120K",
      location: "New York, NY",
      time: "5d",
      type: "Full Time"
    }
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back button */}
        <button 
          onClick={onBack}
          className="flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-6"
        >
          <FiArrowLeft className="mr-2" />
          Back to job listing
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              {/* Job header */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{job.title}</h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">{job.company}</p>
                
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
                    <span>{job.time}</span>
                  </div>
                </div>
              </div>

              {/* Job details */}
              <div className="p-6">
                <div className="prose dark:prose-invert max-w-none">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">The Role</h2>
                  <p className="mb-4">
                    In the world of AI, behavioural predictions are leading the charge to better machine learning.
                  </p>
                  <p className="mb-4">
                    There is so much happening in the AI space. Advances in the economic sectors have seen automated business practices rapidly increasing economic value. While the realm of the human sciences has used the power afforded by computational capabilities to solve many human based dilemmas. Even the art scene has adopted carefully selected ML applications to usher in the technological movement.
                  </p>
                  <p className="mb-6">
                    As a Senior Client Engineer, you'll work alongside other engineers, designers, and product managers to tackle everything from huge company initiatives to modest but important bug fixes, from start to finish. You'll also collaborate with your product team on discovery, helping to assess the direction and feasibility of product changes. And, perhaps most importantly, you'll actively contribute to the evolution of the culture and processes of a growing engineering team.
                  </p>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About You</h2>
                  <p className="mb-6">
                    Your best building spent millions. Your work could be conveniently sent faster or development.
                  </p>
                </div>
              </div>
            </div>

            {/* Application form */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden mt-8">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Apply for this position</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="p-6">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="resume" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Resume/CV
                    </label>
                    <div className="flex items-center">
                      <input
                        type="file"
                        id="resume"
                        name="resume"
                        onChange={handleChange}
                        className="block w-full text-sm text-gray-500 dark:text-gray-400
                          file:mr-4 file:py-2 file:px-4
                          file:rounded-lg file:border-0
                          file:text-sm file:font-semibold
                          file:bg-blue-50 dark:file:bg-blue-900/30
                          file:text-blue-700 dark:file:text-blue-400
                          hover:file:bg-blue-100 dark:hover:file:bg-blue-900/40"
                        accept=".pdf,.doc,.docx"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Cover Letter (Optional)
                    </label>
                    <textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition"
                    >
                      Submit Application
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Sidebar with related jobs */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden sticky top-20">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">Related Jobs</h2>
              </div>
              
              <div className="p-6 space-y-4">
                {relatedJobs.map((job) => (
                  <div key={job.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1">{job.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">{job.company}</p>
                    
                    <div className="flex flex-wrap gap-3 text-sm">
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <FiDollarSign className="mr-1" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <FiMapPin className="mr-1" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                    
                    <div className="mt-3 flex justify-between items-center">
                      <span className="text-sm text-gray-500 dark:text-gray-400">{job.time}</span>
                      <button className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
                        View Job
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                <a 
                  href={job.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium py-2 px-4 rounded-lg transition"
                >
                  <span>Visit Company Website</span>
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobApplication;