import { useState } from 'react';
import {
  FiHome,
  FiUsers,
  FiSettings,
  FiPieChart,
  FiCalendar,
  FiMail,
  FiX
} from 'react-icons/fi';
import Header from '../Components/Header';

const DashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {mobileSidebarOpen && (
        <div 
          className="fixed inset-0 z-20 bg-black opacity-50 lg:hidden"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      <aside 
        className={`fixed z-30 inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full'} lg:relative lg:translate-x-0 transition-all duration-200 ease-in-out bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col ${mobileSidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full lg:translate-x-0'}`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">Dashboard</h1>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-1 rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 lg:hidden"
          >
            <FiX className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto">
          <div className="p-4">
            <ul className="space-y-2">
             <SidebarItem icon={<FiHome />} text="Dashboard" active />
<SidebarItem icon={<FiMail />} text="Posts" />
<SidebarItem icon={<FiCalendar />} text="Interviews" />
<SidebarItem icon={<FiUsers />} text="Assessments" />
<SidebarItem icon={<FiPieChart />} text="Hackathons" />
<SidebarItem icon={<FiSettings />} text="Analytics" />
<SidebarItem icon={<FiSettings />} text="Settings" />

            </ul>

            <div className="mt-8">
              <h3 className="px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Settings
              </h3>
              <ul className="mt-2 space-y-2">
                <SidebarItem icon={<FiSettings className="w-5 h-5" />} text="Settings" />
              </ul>
            </div>
          </div>
        </nav>

        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <img
                className="w-10 h-10 rounded-full"
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="User profile"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">Sarah Johnson</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 truncate">sarah@example.com</p>
            </div>
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header/>

        <main className="flex-1 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-4">
  <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">What's on your mind?</h2>
  <textarea className="w-full h-24 p-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white" placeholder="Share an update..." />
  <div className="mt-2 flex justify-between items-center">
    <div className="flex space-x-2">
      <button className="text-sm px-3 py-1 rounded bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300">#Hashtag</button>
      <button className="text-sm px-3 py-1 rounded bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300">@Tag</button>
    </div>
    <button className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-md">Post</button>
  </div>
</div>

  <div className="flex flex-col lg:flex-row gap-4">
    <div className="flex-1">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
       <DashboardCard
  title="Total Applications"
  value="1,254"
  change="+6% from last week"
  icon={<FiUsers className="w-6 h-6 text-blue-500" />}
/>

<DashboardCard
  title="Interview Scheduled"
  value="342"
  change="+12% from last week"
  icon={<FiCalendar className="w-6 h-6 text-green-500" />}
/>

<DashboardCard
  title="Hackathon Entries"
  value="98"
  change="+5% from last week"
  icon={<FiPieChart className="w-6 h-6 text-purple-500" />}
/>

      </div>
      <div className="w-full space-y-4">
<div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-4">
  <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">Recent Assessments</h2>
  <ul className="space-y-3">
    <li className="text-sm text-gray-700 dark:text-gray-300">ReactJS Assessment - 84% Average</li>
    <li className="text-sm text-gray-700 dark:text-gray-300">NodeJS Assessment - 78% Average</li>
  </ul>
</div>
     </div>
     
     <div className="w-full space-y-4">
        
<div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-4">
  <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">Upcoming Interviews</h2>
  <ul className="space-y-3">
    <li className="flex justify-between text-sm text-gray-700 dark:text-gray-300">
      <span>Frontend Developer - Alice Smith</span>
      <span>Tomorrow, 11 AM</span>
    </li>
    <li className="flex justify-between text-sm text-gray-700 dark:text-gray-300">
      <span>Backend Developer - John Doe</span>
      <span>Friday, 2 PM</span>
    </li>
  </ul>
</div>
        </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Project Pipeline Overview</h2>
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-md">This Quarter</button>
            <button className="px-3 py-1 text-sm text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md">Last Quarter</button>
          </div>
        </div>
        <div className="h-80 bg-gray-50 dark:bg-gray-700 rounded-md border border-gray-200 dark:border-gray-600 flex items-center justify-center text-gray-400 dark:text-gray-300">
          Project pipeline chart placeholder
        </div>
      </div>
    </div>

    <div className="w-full lg:w-80 space-y-4">
         <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
  <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Company Profile</h2>
  <p className="text-sm text-gray-600 dark:text-gray-300">Company Name: <span className="font-medium text-gray-900 dark:text-white">TechNova Inc.</span></p>
  <p className="text-sm text-gray-600 dark:text-gray-300">Website: <a href="https://technova.com" className="text-blue-600 dark:text-blue-400">technova.com</a></p>
  <p className="text-sm text-gray-600 dark:text-gray-300">Employees: 254</p>
  <div className="flex space-x-2 mt-2">
    <a href="#"><img src="/linkedin.svg" className="w-5 h-5" alt="LinkedIn" /></a>
    <a href="#"><img src="/twitter.svg" className="w-5 h-5" alt="Twitter" /></a>
</div>

      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <ActivityItem user="Alice Patel" action="submitted Q2 report" time="1 hour ago" avatar="https://randomuser.me/api/portraits/women/68.jpg" />
          <ActivityItem user="David Kim" action="onboarded new client" time="3 hours ago" avatar="https://randomuser.me/api/portraits/men/55.jpg" />
          <ActivityItem user="Monica Reyes" action="scheduled a meeting" time="5 hours ago" avatar="https://randomuser.me/api/portraits/women/61.jpg" />
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-4">Upcoming Events</h2>
        <div className="space-y-4">
          <EventItem title="Board Meeting" time="Wed, 3:00 PM" color="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200" />
          <EventItem title="Client Demo" time="Thu, 11:00 AM" color="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200" />
          <EventItem title="HR Review" time="Mon, 9:00 AM" color="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200" />
        </div>
      </div>
    </div>
  </div>
</main>

      </div>
    </div>
  );
};

const SidebarItem = ({ icon, text, active = false, badge = null }) => {
  return (
    <li>
      <a
        href="#"
        className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${active ? 'bg-indigo-50 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
      >
        <span className={`mr-3 ${active ? 'text-indigo-500 dark:text-indigo-300' : 'text-gray-400 dark:text-gray-400'}`}>{icon}</span>
        {text}
        {badge && (
          <span className="ml-auto inline-block py-0.5 px-2 text-xs rounded-full bg-indigo-100 dark:bg-indigo-800 text-indigo-800 dark:text-indigo-200">
            {badge}
          </span>
        )}
      </a>
    </li>
  );
};

const DashboardCard = ({ title, value, change, icon }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">{title}</p>
          <p className="mt-1 text-2xl font-semibold text-gray-900 dark:text-white">{value}</p>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{change}</p>
        </div>
        <div className="p-3 rounded-full bg-gray-50 dark:bg-gray-700">
          {icon}
        </div>
      </div>
    </div>
  );
};

const ActivityItem = ({ user, action, time, avatar }) => {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0">
        <img className="h-8 w-8 rounded-full" src={avatar} alt={user} />
      </div>
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-900 dark:text-white">
          <span className="hover:underline">{user}</span> {action}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{time}</p>
      </div>
    </div>
  );
};

const EventItem = ({ title, time, color }) => {
  return (
    <div className="flex items-center">
      <div className={`flex-shrink-0 h-2 w-2 rounded-full ${color}`}></div>
      <div className="ml-3">
        <p className="text-sm font-medium text-gray-900 dark:text-white">{title}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{time}</p>
      </div>
    </div>
  );
};

export default DashboardLayout;