import React from "react";

const WidgetTags = () => {
  const tags = [
    "c",
    "css",
    "express",
    "firebase",
    "html",
    "java",
    "javascript",
    "mern",
    "mongodb",
    "mysql",
    "next.js",
    "node.js",
    "php",
    "python",
    "reactjs",
  ];

  return (
    <div className="widget-tags bg-white shadow-md rounded-lg p-6 dark:bg-gray-800 dark:text-white">
  <h4 className="text-xl font-semibold">Watched tags</h4>
  <div className="flex flex-wrap gap-2 mt-4">
    {tags.map((tag) => (
      <p key={tag} className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white py-1 px-3 rounded-full text-sm">
        {tag}
      </p>
    ))}
  </div>
</div>
  )
};

export default WidgetTags;
