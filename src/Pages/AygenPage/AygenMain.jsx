import React, { useState } from 'react'
import Header from '../../components/AygenAi/Header'
import Sidebar from '../../components/AygenAi/Sidebar';
import RightSidebar from '../../components/AygenAi/RightSidebar';
import ChatWindow from '../../components/AygenAi/ChatWindow';

function AygenMain() {
   const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
        <Header 
        onMenuClick={() => setSidebarOpen(!sidebarOpen)} 
        isSidebarOpen={sidebarOpen}
      />
        <div class="flex h-[calc(100vh-64px)]">
        <Sidebar 
        isOpen={sidebarOpen} 
        onClose={() => setSidebarOpen(false)}
      />
      <div className="w-full flex flex-col">
      <ChatWindow />
    </div>
      <RightSidebar/>
        </div>
        
    </div>
  )
}

export default AygenMain