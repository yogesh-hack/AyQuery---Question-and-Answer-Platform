// components/Dashboard.jsx
import React from "react";
import { BookOpen, Pencil, Flame } from "lucide-react";

export function Dashboard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      <div className="bg-white dark:bg-[#0d1117]  rounded-2xl shadow-md p-4 flex items-center space-x-4">
        <BookOpen className="w-8 h-8 text-blue-500 dark:text-blue-300" />
        <div>
          <p className="text-lg font-semibold">45</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Total Articles</p>
        </div>
      </div>

      <div className="bg-white dark:bg-[#0d1117]  rounded-2xl shadow-md p-4 flex items-center space-x-4">
        <Pencil className="w-8 h-8 text-green-500 dark:text-green-300" />
        <div>
          <p className="text-lg font-semibold">12</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">This Month</p>
        </div>
      </div>

      <div className="bg-white dark:bg-[#0d1117]  rounded-2xl shadow-md p-4 flex items-center space-x-4">
        <Flame className="w-8 h-8 text-red-500 dark:text-red-300" />
        <div>
          <p className="text-lg font-semibold">8-day</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Writing Streak</p>
        </div>
      </div>
    </div>
  );
}
