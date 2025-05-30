// components/ContributionGraph.jsx
import React from "react";
import { eachDayOfInterval, format, subDays, isSameMonth, getMonth } from "date-fns";

const generateContributions = () => {
  const today = new Date();
  return eachDayOfInterval({ start: subDays(today, 119), end: today }).map((date) => ({
    date,
    dateString: format(date, "yyyy-MM-dd"),
    count: Math.floor(Math.random() * 5),
    month: getMonth(date),
  }));
};

const getColor = (count) => {
  if (count === 0) return "from-gray-300/50 to-gray-400/50";
  if (count === 1) return "from-green-200 to-green-300";
  if (count === 2) return "from-green-300 to-green-400";
  if (count === 3) return "from-green-400 to-green-500";
  return "from-green-500 to-green-600";
};

export function ContributionGraph() {
  const contributions = generateContributions();
  
  // Group contributions by month
  const monthsMap = new Map();
  contributions.forEach((day) => {
    const monthKey = format(day.date, "yyyy-MM");
    if (!monthsMap.has(monthKey)) {
      monthsMap.set(monthKey, []);
    }
    monthsMap.get(monthKey).push(day);
  });

  // Convert to array and split each month into weeks
  const monthsData = Array.from(monthsMap).map(([monthKey, days]) => {
    const weeks = [];
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(days.slice(i, i + 7));
    }
    return {
      monthKey,
      monthName: format(new Date(monthKey + "-01"), "MMM yyyy"),
      weeks,
    };
  });

  // Weekday labels
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="mt-6 p-6 bg-white dark:bg-[#0d1117] rounded-2xl shadow-2xl shadow-gray-200/50 dark:shadow-gray-900/50 border border-gray-100 dark:border-gray-700">
      <h2 className="text-2xl font-bold mb-6 dark:text-white text-gray-800">Your Contributions</h2>
      
      <div className="flex">
        {/* Weekday labels */}
        <div className="flex mt-6 flex-col mr-1 gap-1.5">
          {weekdays.map((day, i) => (
            <div 
              key={i} 
              className="text-xs text-gray-500 dark:text-gray-400 h-5 flex items-center justify-end pr-1"
            >
              {day}
            </div>
          ))}
        </div>
        
        {/* Months container with scroll */}
        <div className="flex-1 overflow-x-auto pb-2">
          <div className="flex gap-4">
            {monthsData.map(({ monthKey, monthName, weeks }) => (
              <div 
                key={monthKey} 
                className="flex flex-col border-r border-gray-200 dark:border-gray-700 last:border-r-0 pr-4 last:pr-0"
              >
                {/* Month header */}
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1 sticky left-0">
                  {monthName}
                </div>
                
                {/* Weeks */}
                <div className="flex gap-1.5">
                  {weeks.map((week, i) => (
                    <div key={i} className="flex flex-col gap-1.5">
                      {week.map((day, j) => (
                        <div
                          key={j}
                          title={`${format(day.date, "EEE, MMM d, yyyy")}: ${day.count} contributions`}
                          className={`
                            w-5 h-5 rounded-md 
                            bg-gradient-to-br ${getColor(day.count)}
                            shadow-md
                            transition-all duration-200
                            hover:scale-125 hover:z-10 hover:shadow-lg
                            ${day.count > 0 ? "hover:ring-2 hover:ring-white/50" : ""}
                          `}
                          style={{
                            transform: day.count > 0 ? `translateZ(${day.count * 4}px)` : "translateZ(0px)"
                          }}
                        ></div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="flex justify-between mt-4 text-sm text-gray-500 dark:text-gray-400">
        <span>Less</span>
        <div className="flex gap-1">
          {[0, 1, 2, 3, 4].map((count) => (
            <div 
              key={count} 
              className={`w-4 h-4 rounded-md bg-gradient-to-br ${getColor(count)}`}
            ></div>
          ))}
        </div>
        <span>More</span>
      </div>
    </div>
  );
}