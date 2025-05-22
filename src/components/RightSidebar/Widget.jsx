import React from "react";
import comment from "../../assets/comment-alt-solid.svg";
import pen from "../../assets/pen-solid.svg";
import blackLogo from "../../assets/blacklogo.svg";
import WidgetTags from "./WidgetTags";

const Widget = () => {
  return (
    <div className="dark:bg-[#0d1117] bg-white text-white p-4 rounded-lg w-full space-y-6">
  {/* Search Bar */}
  <div>
    <input
      type="text"
      placeholder="Search"
      className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-[#161b22] text-dark dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  {/* New Discussions */}
  <div>
    <h3 className="text-xs font-semibold uppercase text-black dark:text-gray-400 mb-4">
      New Discussions
    </h3>

    <div className="space-y-4">
      {/* Item */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <img src="https://randomuser.me/api/portraits/women/65.jpg" className="w-5 h-5 rounded-full" />
          <span className="text-sm text-blue-400 font-medium">MaryLync77</span>
        </div>
        <p className="text-sm text-gray-600 dark:text-white font-medium">
          Search Startup Jobs – Week 5 – Build in Public – Slow Week
        </p>
        <p className="text-xs text-gray-400">22 Feb · 14 Comments</p>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-1">
          <img src="https://randomuser.me/api/portraits/men/42.jpg" className="w-5 h-5 rounded-full" />
          <span className="text-sm text-blue-400 font-medium">Zakaria_C</span>
        </div>
        <p className="text-sm text-gray-600 dark:text-white font-medium">
          What are the most useful tools for SEO marketing?
        </p>
        <p className="text-xs text-gray-400">22 Feb · 44 Comments</p>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-1">
          <img src="https://randomuser.me/api/portraits/women/32.jpg" className="w-5 h-5 rounded-full" />
          <span className="text-sm text-blue-400 font-medium">ElenMary182</span>
        </div>
        <p className="text-sm text-gray-600 dark:text-white font-medium">
          How can you minimize the customer acquisition cost?
        </p>
        <p className="text-xs text-gray-400">20 Feb · 19 Comments</p>
      </div>
    </div>
  </div>

  {/* Latest Startups */}
  <div>
    <h3 className="text-xs font-semibold uppercase text-gray-400 mb-4">
      Latest Startups
    </h3>

    <div className="space-y-4">
      {[
        { name: "Visual Studio X", color: "bg-violet-600" },
        { name: "Gymp DevTools", color: "bg-emerald-600" },
        { name: "Paytable Inc", color: "bg-cyan-600" },
      ].map((startup) => (
        <div className="flex items-center justify-between" key={startup.name}>
          <div className="flex items-center gap-3">
            <div className={`w-6 h-6 ${startup.color} rounded-full`} />
            <span className="text-sm text-gray-600 dark:text-white">{startup.name}</span>
          </div>
          <button className="text-xs bg-blue-700 hover:bg-blue-600 px-3 py-1 rounded-full text-white">
            Follow
          </button>
        </div>
      ))}
    </div>
  </div>
  <WidgetTags/>
</div>

  );
};

export default Widget;
