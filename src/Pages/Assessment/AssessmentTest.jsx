import React from 'react'
import { Link } from 'react-router-dom'

function AssessmentTest() {
  return (
    <div class="min-h-screen flex items-center justify-center px-6">
    <div class="bg-white dark:bg-gray-900 shadow-2xl rounded-2xl max-w-6xl w-full flex overflow-hidden">
      <div class="w-1/2 p-10 space-y-6 bg-gradient-to-br from-indigo-100 to-purple-80 dark:from-indigo-900 dark:to-purple-80">
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Cisco_logo_blue_2016.svg" alt="Cisco Logo" class="w-32"/>
        <h1 class="text-3xl font-bold dark:text-white">Welcome to</h1>
        <h2 class="text-2xl font-semibold text-blue-900 dark:text-blue-300">FY26 | Cisco Day - Apprentice</h2>
        <p class="text-xl font-medium text-gray-600 dark:text-gray-400">Online Assessment-SRE | 21-May-2025</p>
        <div class="text-sm text-gray-500 dark:text-gray-400">
          <p><strong>Test duration:</strong> 60 mins</p>
          <p><strong>No. of questions:</strong> 51 questions</p>
        </div>
        <div class="text-sm space-x-4">
          <a href="#" class="text-blue-700 hover:underline dark:text-blue-400">Platform Help</a>
          <a href="#" class="text-blue-700 hover:underline dark:text-blue-400">Execution Environment</a>
          <a href="#" class="text-blue-700 hover:underline dark:text-blue-400">FAQ</a>
        </div>
      </div>

      <div class="w-1/2 p-10 bg-gray-100 dark:bg-gray-950 space-y-6">
        <h3 class="text-2xl font-semibold dark:text-white">Instructions</h3>
        <ol class="list-decimal pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          <li>This is a timed test. Ensure no interruptions during the test, as the timer cannot be paused.</li>
          <li>Ensure you have a stable internet connection.</li>
          <li>We recommend trying the <a href="#" class="text-blue-600 dark:text-blue-400 underline">sample test</a> before starting.</li>
          <li>Review the <a href="#" class="text-blue-600 dark:text-blue-400 underline">FAQs</a> for common queries before beginning.</li>
        </ol>

        <div class="flex space-x-4 pt-4">
          <button class="bg-gradient-to-r from-green-400 via-blue-400 to-blue-600 text-white font-semibold px-6 py-2 rounded-xl hover:bg-blue-600 transition">Continue</button>
          <Link to="/test/iuh783r43/questions" class="border border-green-600 text-green-700 font-semibold px-6 py-2 rounded-xl hover:bg-green-50 dark:hover:bg-gray-800 transition">Try Sample Test</Link>
        </div>
      </div>

    </div>
  </div>
  )
}

export default AssessmentTest