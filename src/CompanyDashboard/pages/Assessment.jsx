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
import AssessmentBuilder from '../Components/AssessmentBuilder';

const Assessment = () => {
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

      <AssessmentBuilder/>
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

export default Assessment;