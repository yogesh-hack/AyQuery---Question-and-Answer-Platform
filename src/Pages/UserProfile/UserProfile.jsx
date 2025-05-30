import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBirthdayCake, 
  faPen,
  faBriefcase,
  faGraduationCap,
  faCode,
  faChartLine,
  faUsers
} from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import Avatar from "../../components/Avatar/Avatar";
import EditProfileForm from "./EditProfileForm";
import ProfileBio from "./ProfileBio";
import { ContributionGraph } from "../../components/WriteContribute/ContributionGraph";

const UserProfile = ({ slideIn, handleSlideIn }) => {
  const { id } = useParams();
  const users = useSelector((state) => state.usersReducer);
  console.log(users);
  const currentProfile = users.filter((user) => user._id === id)[0];
  const currentUser = useSelector((state) => state.currentUserReducer);
  const [Switch, setSwitch] = useState(false);

  // Sample data - replace with actual data from your backend
  const experience = [
    {
      id: 1,
      role: "Senior UI/UX Designer",
      company: "TechCorp Inc.",
      duration: "2020 - Present",
      description: "Leading design team and creating user-centered interfaces."
    },
    {
      id: 2,
      role: "UI Designer",
      company: "DesignHub",
      duration: "2018 - 2020",
      description: "Created wireframes and prototypes for web applications."
    }
  ];

  const education = [
    {
      id: 1,
      degree: "MSc in Computer Science",
      institution: "State University",
      duration: "2016 - 2018"
    },
    {
      id: 2,
      degree: "BSc in Design",
      institution: "Arts College",
      duration: "2012 - 2016"
    }
  ];

  const skills = [
    { name: "UI/UX Design", level: 90 },
    { name: "Figma", level: 95 },
    { name: "React", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "HTML/CSS", level: 95 },
    { name: "Node.js", level: 70 }
  ];

  const stats = {
    posts: 42,
    followers: 1280,
    following: 530,
    questions: 28,
    answers: 156
  };

  return (
    <div className="min-h-screen mt-20 bg-gray-100 dark:bg-gray-900/60 transition-colors duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 w-full">
          <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
        </div>
        
        <div className="lg:col-span-3 lg:ml-[-30px] mt-20 p-4 md:p-6 w-full">
          
            <div class="overflow-hidden">
            <img src="https://ai-agent.preview.uideck.com/assets/images/gen-glow.png" class="fixed bottom-0 w-full left-1/2 z-10 -translate-x-1/3" alt=""/>
          </div>
          {/* Profile Header */}
          <div className="bg-white dark:bg-[#0d1117] rounded-xl p-3 shadow-lg transition-colors duration-300">
            
            <div className="px-6 pb-6 relative">
              <div className="flex flex-col md:flex-row items-start md:items-end -mt-16">
                <div className="relative">
                  <Avatar
                    backgroundColor="purple"
                    color="white"
                    fontSize="50px"
                    px="40px"
                    py="30px"
                    className="rounded-full border-4 border-white dark:border-gray-800"
                  >
                    {currentProfile?.name.charAt(0).toUpperCase()}
                  </Avatar>
                  
                  {currentUser?._id === id && (
                    <button 
                      onClick={() => setSwitch(true)}
                      className="absolute -right-2 bottom-2 bg-green-500 hover:bg-green-600 text-white p-2 rounded-full shadow-lg transition-all duration-300"
                    >
                      <FontAwesomeIcon icon={faPen} className="h-4 w-4" />
                    </button>
                  )}
                </div>
                <div className="md:ml-6 mt-4 md:mt-0 flex-1">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                        {currentProfile?.name}
                      </h1>
                      <p className="text-gray-600 dark:text-gray-300">
                        UI/UX Designer & Frontend Developer
                      </p>
                    </div>
                    
                    <div className="mt-4 md:mt-0 flex space-x-3">
                      <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-300">
                        Follow
                      </button>
                      <button className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
                        Message
                      </button>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center mr-4 mb-2">
                      <FontAwesomeIcon icon={faBirthdayCake} className="mr-2" />
                      <span>Joined {moment(currentProfile?.joinedOn).fromNow()}</span>
                    </div>
                    <div className="flex items-center mr-4 mb-2">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span>San Francisco, CA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          
                 <div className="mt-10">
                                    <ContributionGraph />
                                </div>
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* About */}
              <div className="bg-white dark:bg-[#0d1117] rounded-xl shadow-lg p-6 transition-colors duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-800 dark:text-white">About</h2>
                  {currentUser?._id === id && (
                    <button 
                      onClick={() => setSwitch(true)}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300"
                    >
                      <FontAwesomeIcon icon={faPen} />
                    </button>
                  )}
                </div>
                <ProfileBio currentProfile={currentProfile} />
              </div>
              
              {/* Experience */}
              <div className="bg-white dark:bg-[#0d1117] rounded-xl shadow-lg p-6 transition-colors duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-800 dark:text-white flex items-center">
                    <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                    Experience
                  </h2>
                  {currentUser?._id === id && (
                    <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300">
                      <FontAwesomeIcon icon={faPen} />
                    </button>
                  )}
                </div>
                
                <div className="space-y-6">
                  {experience.map((exp) => (
                    <div key={exp.id} className="relative pl-8 pb-6 border-l-2 border-blue-500 dark:border-blue-400">
                      <div className="absolute -left-2.5 top-0 w-4 h-4 rounded-full bg-blue-500 dark:bg-blue-400"></div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{exp.role}</h3>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-1">
                        <span>{exp.company}</span>
                        <span className="mx-2">•</span>
                        <span>{exp.duration}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Education */}
              <div className="bg-white dark:bg-[#0d1117] rounded-xl shadow-lg p-6 transition-colors duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-800 dark:text-white flex items-center">
                    <FontAwesomeIcon icon={faGraduationCap} className="mr-2" />
                    Education
                  </h2>
                  {currentUser?._id === id && (
                    <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300">
                      <FontAwesomeIcon icon={faPen} />
                    </button>
                  )}
                </div>
                
                <div className="space-y-6">
                  {education.map((edu) => (
                    <div key={edu.id} className="relative pl-8 pb-6 border-l-2 border-green-500 dark:border-green-400">
                      <div className="absolute -left-2.5 top-0 w-4 h-4 rounded-full bg-green-500 dark:bg-green-400"></div>
                      <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{edu.degree}</h3>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm mb-1">
                        <span>{edu.institution}</span>
                        <span className="mx-2">•</span>
                        <span>{edu.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="space-y-6">
              {/* Skills */}
              <div className="bg-white dark:bg-[#0d1117] rounded-xl shadow-lg p-6 transition-colors duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-800 dark:text-white flex items-center">
                    <FontAwesomeIcon icon={faCode} className="mr-2" />
                    Skills
                  </h2>
                  {currentUser?._id === id && (
                    <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300">
                      <FontAwesomeIcon icon={faPen} />
                    </button>
                  )}
                </div>
                
                <div className="space-y-3">
                  {skills.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className="bg-blue-600 dark:bg-blue-500 h-2 rounded-full" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Stats */}
              <div className="bg-white dark:bg-[#0d1117] rounded-xl shadow-lg p-6 transition-colors duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-800 dark:text-white flex items-center">
                    <FontAwesomeIcon icon={faChartLine} className="mr-2" />
                    Stats
                  </h2>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stats.posts}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Posts</div>
                  </div>
                  <div className="bg-purple-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{stats.questions}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Questions</div>
                  </div>
                  <div className="bg-green-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">{stats.answers}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Answers</div>
                  </div>
                  <div className="bg-yellow-50 dark:bg-gray-700 p-4 rounded-lg text-center">
                    <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">{stats.followers}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Followers</div>
                  </div>
                </div>
              </div>
              
              {/* Social Connections */}
              <div className="bg-white dark:bg-[#0d1117] rounded-xl shadow-lg p-6 transition-colors duration-300">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold text-gray-800 dark:text-white flex items-center">
                    <FontAwesomeIcon icon={faUsers} className="mr-2" />
                    Connections
                  </h2>
                </div>
                
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <div className="text-2xl font-bold text-gray-800 dark:text-white">{stats.following}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Following</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800 dark:text-white">{stats.followers}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Followers</div>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <button className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-300">
                    Followers
                  </button>
                  <button className="flex-1 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300">
                    Following
                  </button>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="bg-white dark:bg-[#0d1117] rounded-xl shadow-lg p-6 transition-colors duration-300">
                <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Social Links</h2>
                
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 flex items-center justify-center bg-gray-800 dark:bg-gray-700 text-white rounded-full hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {Switch && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white dark:bg-[#0d1117] p-6 rounded-xl shadow-xl w-full max-w-lg relative transition-colors duration-300">
            <EditProfileForm currentUser={currentUser} setSwitch={setSwitch} />
          </div>
        </div>
      )}
      
    </div>
  );
};

export default UserProfile;