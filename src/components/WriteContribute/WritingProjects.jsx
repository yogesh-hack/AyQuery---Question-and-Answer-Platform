// components/WritingProjects.jsx
import React, { useState } from "react";
import { Flame, Star, Clock, Book, FileText, Feather, ScrollText } from "lucide-react";

const categories = [
  { name: "Stories", icon: <ScrollText className="w-5 h-5" />, color: "pink" },
  { name: "Books", icon: <Book className="w-5 h-5" />, color: "green" },
  { name: "Articles", icon: <FileText className="w-5 h-5" />, color: "blue" },
  { name: "Blogs", icon: <Feather className="w-5 h-5" />, color: "purple" }
];

const filters = [
  { name: "Trending", icon: <Flame className="w-4 h-4" />, color: "orange" },
  { name: "Popular", icon: <Star className="w-4 h-4" />, color: "yellow" },
  { name: "Newest", icon: <Clock className="w-4 h-4" />, color: "sky" }
];

const projects = {
  Stories: [
    {
      title: "Midnight Stories",
      description: "A collection of flash fiction inspired by dreams and nightmares.",
      updated: "5 days ago",
      trending: true,
      popular: true,
      newest: false
    },
    {
      title: "Urban Legends",
      description: "Modern retellings of classic urban legends with a twist.",
      updated: "2 weeks ago",
      trending: false,
      popular: true,
      newest: false
    }
  ],
  Books: [
    {
      title: "The AI Revolution",
      description: "Comprehensive guide to AI advancements and future predictions.",
      updated: "2 days ago",
      trending: true,
      popular: true,
      newest: true
    }
  ],
  Articles: [
    {
      title: "Quantum Computing Explained",
      description: "Breaking down complex quantum concepts for beginners.",
      updated: "1 week ago",
      trending: true,
      popular: false,
      newest: false
    }
  ],
  Blogs: [
    {
      title: "Developer Diaries",
      description: "Weekly blog posts about my journey as a software developer.",
      updated: "3 days ago",
      trending: false,
      popular: true,
      newest: true
    }
  ]
};

export function WritingProjects() {
  const [activeCategory, setActiveCategory] = useState("Stories");
  const [activeFilter, setActiveFilter] = useState("Trending");

  const getColorClasses = (color, type = "bg") => {
    const colors = {
      pink: `${type}-pink-500`,
      green: `${type}-green-500`,
      blue: `${type}-blue-500`,
      purple: `${type}-purple-500`,
      orange: `${type}-orange-500`,
      yellow: `${type}-yellow-500`,
      sky: `${type}-sky-500`
    };
    return colors[color] || `${type}-gray-500`;
  };

  const filteredProjects = projects[activeCategory]?.filter(project => {
    if (activeFilter === "Trending") return project.trending;
    if (activeFilter === "Popular") return project.popular;
    if (activeFilter === "Newest") return project.newest;
    return true;
  });

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-6 dark:text-white">Writing Projects</h2>
      
      {/* 3D Category Navigation */}
      <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => setActiveCategory(category.name)}
            className={`flex items-center px-4 py-3 rounded-xl transition-all duration-300 transform hover:-translate-y-1 ${
              activeCategory === category.name 
                ? `bg-gradient-to-br ${getColorClasses(category.color, "from")} ${getColorClasses(category.color, "to")} text-white shadow-lg`
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow-md hover:shadow-lg"
            }`}
          >
            <span className={`mr-2 ${activeCategory === category.name ? "text-white" : getColorClasses(category.color, "text")}`}>
              {category.icon}
            </span>
            <span className="font-medium whitespace-nowrap">{category.name}</span>
          </button>
        ))}
      </div>
      
      {/* Filter Chips */}
      <div className="flex space-x-2 mb-6">
        {filters.map((filter) => (
          <button
            key={filter.name}
            onClick={() => setActiveFilter(filter.name)}
            className={`flex items-center px-3 py-1.5 rounded-full text-sm transition-all ${
              activeFilter === filter.name
                ? `bg-gradient-to-r ${getColorClasses(filter.color, "from")} ${getColorClasses(filter.color, "to")} text-white shadow-md`
                : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
            }`}
          >
            <span className={`mr-1.5 ${activeFilter === filter.name ? "text-white" : getColorClasses(filter.color, "text")}`}>
              {filter.icon}
            </span>
            {filter.name}
          </button>
        ))}
      </div>
      
      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects?.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#0d1117] p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700 relative overflow-hidden"
          >
            {/* Status Badges */}
            <div className="absolute top-3 right-3 flex space-x-1.5">
              {project.trending && (
                <span className="flex items-center px-2 py-1 rounded-full bg-orange-100 dark:bg-orange-900/50 text-orange-700 dark:text-orange-300 text-xs">
                  <Flame className="w-3 h-3 mr-1" />
                  Trending
                </span>
              )}
              {project.popular && (
                <span className="flex items-center px-2 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300 text-xs">
                  <Star className="w-3 h-3 mr-1" />
                  Popular
                </span>
              )}
              {project.newest && (
                <span className="flex items-center px-2 py-1 rounded-full bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300 text-xs">
                  <Clock className="w-3 h-3 mr-1" />
                  New
                </span>
              )}
            </div>
            
            <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mt-3 mb-2 pr-10">{project.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{project.description}</p>
            <div className="flex justify-between items-center text-xs text-gray-400 dark:text-gray-500">
              <span>Last updated: {project.updated}</span>
              <button className="text-blue-600 dark:text-blue-400 hover:underline">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {filteredProjects?.length === 0 && (
        <div className="text-center py-10 text-gray-500 dark:text-gray-400">
          No {activeFilter.toLowerCase()} {activeCategory.toLowerCase()} found
        </div>
      )}
    </div>
  );
}