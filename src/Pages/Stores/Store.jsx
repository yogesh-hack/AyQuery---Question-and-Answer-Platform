import {React, useState} from 'react'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import { useSelector } from "react-redux";
import Ebookstore from '../../components/Stores/Ebookstore'

const Store = ({ slideIn, handleSlideIn }) => {
  const storesList = useSelector((state) => state.storesReducer);
  console.log("storesList", storesList.data);
  const [activeTab, setActiveTab] = useState(0);
  const tabTitles = ['E-Book', 'CheatSheet', 'Tutorials'];

    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Left Sidebar */}
            <div className="lg:col-span-1 w-full">
                <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-3 w-full mt-20">
                <h1 className="text-4xl font-bold text-center">Store</h1>
                <p className="text-center mt-4">Welcome to the Store! Here you can find various items and products.</p>
                 <div className="mb-10 text-center">
          <div className="relative inline-flex p-1 mx-auto bg-gray-200 rounded-full dark:bg-gray-800 w-[370px]">
            {/* Sliding indicator */}
            <span
              className="absolute top-1/2 left-0 z-0 h-11 w-[120px] -translate-y-1/2 transform rounded-full bg-white shadow-theme-xs transition-transform duration-300 ease-in-out dark:bg-white/10"
              style={{
                transform: `translateX(${activeTab * 120}px) translateY(-50%)`,
              }}
            />
            {/* Tab Buttons */}
            {tabTitles.map((title, index) => (
              <button
                key={title}
                onClick={() => setActiveTab(index)}
                className={`relative z-10 flex h-11 w-[120px] items-center justify-center text-base font-medium transition-colors duration-200 ${
                  activeTab === index
                    ? 'text-gray-800 dark:text-white/90'
                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white/80'
                }`}
              >
                {title}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
{activeTab === 0 && (
<Ebookstore storeList={storesList.data.filter(store => store.storeType === "Ebook")} />
  // <Ebookstore storeList={storesList.data}/>
)}

{activeTab === 1 && (
  storesList.data.some(store => store.storeType === "Cheatsheet") 
    ? <Ebookstore storeList={storesList.data.filter(store => store.storeType === "Cheatsheet")} />
    : "📄 CheatSheets Coming Soon"
)}

{activeTab === 2 && (
  storesList.data.some(store => store.storeType === "Tutorial") 
    ? <Ebookstore storeList={storesList.data.filter(store => store.storeType === "Tutorial")} />
    : "🎥 Tutorials Coming Soon"
)}

      </div>
    </div>
    )
}

export default Store