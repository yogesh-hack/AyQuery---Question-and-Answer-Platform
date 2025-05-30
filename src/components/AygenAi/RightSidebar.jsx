import React, { useState } from 'react';

export default function RightSidebar() {
  const [rightSidebarOpen, setRightSidebarOpen] = useState(false);
  const [showMoreHistory, setShowMoreHistory] = useState(false);

  const chatHistory = {
    today: new Array(5).fill("The Future of AI and Its Impact on Society"),
    yesterday: new Array(4).fill("The Future of AI and Its Impact on Society"),
    previous: new Array(4).fill("The Future of AI and Its Impact on Society")
  };

  return (
    <aside
      className={`fixed inset-y-0 top-16 right-0 z-40 w-[288px] bg-white border-l border-gray-100 transform transition-transform duration-300 ease-in-out 
        dark:bg-gray-900 dark:border-gray-800
        ${rightSidebarOpen ? 'translate-x-0' : 'translate-x-full'} 
        lg:translate-x-0 lg:static lg:h-auto`}
    >
      <div className="h-full flex flex-col p-6">
        {/* New Chat Button */}
        <button className="w-full bg-gray-800 text-white dark:bg-white/15 dark:hover:bg-white/25 hover:bg-gray-950 font-medium text-sm py-3 px-5 rounded-full mb-4 flex items-center justify-center transition">
          New Chat
        </button>

        {/* Search */}
        <div className="pb-6 relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full py-2.5 px-4 pr-10 rounded-full border text-sm placeholder:text-gray-500 dark:placeholder:text-white/30 dark:text-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 focus:outline-none focus:border-gray-300 dark:focus:border-gray-600"
          />
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-white/30">
            🔍
          </div>
        </div>

        <div className="pb-5 overflow-y-auto custom-scrollbar">
          {renderChatSection('Today', chatHistory.today)}
          {renderChatSection('Yesterday', chatHistory.yesterday)}
          {showMoreHistory && renderChatSection('Previous 7 Days', chatHistory.previous)}

          {/* Show More Button */}
          <div className="px-3 mt-5">
            <button
              onClick={() => setShowMoreHistory(!showMoreHistory)}
              className="flex justify-between items-center text-[#7A5AF8] font-medium text-sm"
            >
              <span>{showMoreHistory ? 'Show less...' : 'Show more...'}</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3.83334 5.91673L8.00001 10.0834L12.1667 5.91673" stroke="#7A5AF8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}

function renderChatSection(title, items) {
  return (
    <div className="py-6 border-b border-gray-200 dark:border-gray-800">
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 px-3">
        {title}
      </h3>
      <div className="space-y-1">
        {items.map((item, idx) => (
          <a
            key={idx}
            href="#"
            className="block p-3 rounded-full hover:bg-gray-100 dark:hover:bg-white/5 transition"
          >
            <h4 className="font-medium text-sm text-gray-800 dark:text-white/90 truncate">
              {item}
            </h4>
          </a>
        ))}
      </div>
    </div>
  );
}
