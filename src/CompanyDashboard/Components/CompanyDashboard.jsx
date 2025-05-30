import React from 'react';

export default function CompanyDashboard() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6">
      {/* Top Nav */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Company Dashboard</h1>
        <div className="flex gap-4">
          <button className="bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded">Notifications</button>
          <img src="/avatar.png" alt="profile" className="w-10 h-10 rounded-full" />
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Write Post */}
        <div className="col-span-2 bg-gray-100 dark:bg-gray-800 p-4 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Create a Post</h2>
          <textarea
            className="w-full h-24 p-3 rounded-lg bg-white dark:bg-gray-700 dark:text-white"
            placeholder="What's on your mind?"
          ></textarea>
          <div className="flex justify-between mt-3">
            <div className="flex gap-2">
              <button className="text-sm bg-gray-300 dark:bg-gray-600 px-3 py-1 rounded">#Hashtag</button>
              <button className="text-sm bg-gray-300 dark:bg-gray-600 px-3 py-1 rounded">@Tag</button>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Post</button>
          </div>
        </div>

        {/* Company Profile */}
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Company Profile</h2>
          <ul className="text-sm space-y-2">
            <li><strong>Name:</strong> Acme Corp</li>
            <li><strong>Employees:</strong> 120</li>
            <li><strong>Revenue:</strong> $1.2M</li>
            <li><strong>Website:</strong> <a href="#" className="text-blue-500">acme.com</a></li>
            <li><strong>Founded:</strong> 2010</li>
          </ul>
        </div>

        {/* Interview Management */}
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Interview Management</h2>
          <ul className="text-sm space-y-2">
            <li>✔️ Schedule Interviews</li>
            <li>📄 View Applications</li>
            <li>📝 Feedback Forms</li>
            <li>📊 Interview Reports</li>
          </ul>
        </div>

        {/* Assessment Center */}
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Assessment Center</h2>
          <ul className="text-sm space-y-2">
            <li>➕ Create Assessments</li>
            <li>📨 Invite Candidates</li>
            <li>📈 View Results</li>
          </ul>
        </div>

        {/* Hackathon Panel */}
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Hackathons</h2>
          <ul className="text-sm space-y-2">
            <li>📣 Host New Hackathon</li>
            <li>🧑‍💻 View Participants</li>
            <li>🏆 Declare Winners</li>
          </ul>
        </div>

        {/* Analytics */}
        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">Analytics</h2>
          <ul className="text-sm space-y-2">
            <li>👀 Profile Views: 320</li>
            <li>👍 Post Engagements: 180</li>
            <li>📥 Applications: 45</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
