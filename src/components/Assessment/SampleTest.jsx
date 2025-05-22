import React from 'react';
import { FaQuestionCircle, FaInfoCircle, FaMoon, FaUserCircle } from 'react-icons/fa';
import TestHeader from './TestHeader';
import { Link } from 'react-router-dom';

const questions = [
  { id: 1, title: "Good URI Design", type: "Multiple Choice" },
  { id: 2, title: "FizzBuzz", type: "Coding" },
  { id: 3, title: "Are you an expert on data structures?", type: "Multiple Choice" },
];

const SampleTest = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-[#0d1117] text-gray-800">
      <TestHeader/>

      {/* Main layout */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-20 bg-white dark:bg-[#0d1117] border-r flex flex-col items-center py-6 space-y-6">
          <FaQuestionCircle className="text-xl text-gray-500 dark:text-white hover:text-green-600 cursor-pointer" />
          <FaInfoCircle className="text-xl text-gray-500 hover:text-green-600 cursor-pointer" />
          <div className="space-y-4">
            {questions.map((q) => (
              <button key={q.id} className="w-8 h-8 rounded-full bg-gray-200 hover:bg-blue-100">
                {q.id}
              </button>
            ))}
          </div>
        </aside>

        {/* Questions Panel */}
        <main className="flex-1 px-10 py-6">
          <div className="text-sm text-gray-500 dark:text-white font-semibold uppercase mb-4">Questions</div>
          <div className="space-y-4">
            {questions.map((q) => (
              <Link to={`/test/iuh783r43/questions/${q.id}`}
                key={q.id}
                className="bg-white dark:bg-gray-800 hover:bg-indigo-50 hover:dark:bg-gray-600 p-4 rounded-xl shadow-md flex items-center justify-between"
              >
                <div>
                  <p className="font-semibold text-gray-800 dark:text-white">{q.id}. {q.title}</p>
                  <p className="text-sm text-gray-500">{q.type}</p>
                </div>
                <button className="bg-gradient-to-r from-green-400 via-blue-400 to-blue-600 text-white px-6 py-2 rounded-xl text-sm font-medium">
                  Solve
                </button>
              </Link>
            ))}
          </div>

          <div className="mt-6 flex justify-end">
            <button className="border border-green-600 text-green-700 px-6 py-2 rounded-xl font-semibold hover:bg-green-50">
              Submit Test
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default SampleTest;
