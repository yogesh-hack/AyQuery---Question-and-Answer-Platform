import React from 'react';

const CaseManagementDashboard = () => {
  // Sample data
  const workflowSteps = [
    { id: 1, name: "Allocate Case to User", status: "pending" },
    { id: 2, name: "Acknowledge Case receipt to customer", status: "pending" },
    { id: 3, name: "Identify Issue Category", status: "active" },
    { id: 4, name: "Identify Issue Severity", status: "pending" },
    { id: 5, name: "Identify Issue Impact", status: "pending" },
    { id: 6, name: "Allocate to Resolution Team", status: "pending" },
    { id: 7, name: "Advise Customer of Resolution estimate", status: "pending" },
    { id: 8, name: "Identify Issue Dependencies", status: "pending" },
    { id: 9, name: "Identify Issue Resolution", status: "pending" },
    { id: 10, name: "Estimate Resolution Time", status: "pending" },
    { id: 11, name: "Advise Customer of Resolution Estimate", status: "pending" },
    { id: 12, name: "Advise Customer Issue Resolved", status: "pending" },
    { id: 13, name: "Technical Resolution", status: "pending" },
    { id: 14, name: "Request Processing", status: "pending" },
    { id: 15, name: "Customer Communication", status: "pending" },
    { id: 16, name: "Customer Notification", status: "pending" },
    { id: 17, name: "Testing and Verification", status: "pending" },
    { id: 18, name: "Problem Resolution", status: "pending" },
    { id: 19, name: "Customer Satisfaction", status: "pending" },
    { id: 20, name: "New Tools", status: "pending" },
  ];

  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen p-6 font-sans">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-blue-400 mb-2">Case Management System</h1>
        <p className="text-gray-400">Track and manage customer cases through the resolution workflow</p>
      </header>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-blue-500 shadow-lg">
          <h3 className="text-gray-400 text-sm uppercase tracking-wider">Active Cases</h3>
          <p className="text-2xl font-bold mt-1">24</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-green-500 shadow-lg">
          <h3 className="text-gray-400 text-sm uppercase tracking-wider">Resolved Today</h3>
          <p className="text-2xl font-bold mt-1">12</p>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg border-l-4 border-purple-500 shadow-lg">
          <h3 className="text-gray-400 text-sm uppercase tracking-wider">Avg. Resolution Time</h3>
          <p className="text-2xl font-bold mt-1">3h 42m</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Workflow Progress */}
        <div className="lg:col-span-2">
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-blue-400">Case Workflow Progress</h2>
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Create New Case
              </button>
            </div>

            <div className="space-y-3">
              {workflowSteps.map((step) => (
                <div 
                  key={step.id} 
                  className={`p-4 rounded-lg border ${step.status === 'active' ? 
                    'border-blue-500 bg-gray-700' : 
                    'border-gray-700 hover:bg-gray-700 transition-colors'}`}
                >
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${
                      step.status === 'active' ? 
                        'bg-blue-600' : 
                        'bg-gray-600'
                    }`}>
                      <span className="text-xs">{step.id}</span>
                    </div>
                    <div className="flex-grow">
                      <h3 className={`font-medium ${
                        step.status === 'active' ? 'text-blue-400' : 'text-gray-200'
                      }`}>
                        {step.name}
                      </h3>
                    </div>
                    {step.status === 'active' && (
                      <span className="bg-blue-900 text-blue-300 text-xs px-2 py-1 rounded-full">
                        In Progress
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions & Status */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-blue-400 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-3">
              <button className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                New Case
              </button>
              <button className="bg-green-600 hover:bg-green-700 p-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule
              </button>
              <button className="bg-purple-600 hover:bg-purple-700 p-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Notify
              </button>
              <button className="bg-yellow-600 hover:bg-yellow-700 p-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Settings
              </button>
            </div>
          </div>

          {/* Current Status */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-blue-400 mb-4">Current Status</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm text-gray-400 mb-1">Current Step</h3>
                <p className="text-lg font-medium text-blue-400">Identify Issue Category</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-400 mb-1">Time in Current Step</h3>
                <p className="text-lg font-medium">1h 23m</p>
              </div>
              <div>
                <h3 className="text-sm text-gray-400 mb-1">Estimated Time Remaining</h3>
                <p className="text-lg font-medium">2h 37m</p>
              </div>
              <div className="pt-4 border-t border-gray-700">
                <button className="w-full bg-green-600 hover:bg-green-700 py-2 rounded-lg font-medium transition-colors">
                  Mark as Complete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseManagementDashboard;