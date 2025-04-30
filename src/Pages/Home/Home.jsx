import React from "react";

import "../../App.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import HomeMainbar from "../../components/HomeMainbar/HomeMainbar";
import Footer from "../../components/Footer/Footer";

const Home = ({ slideIn,handleSlideIn }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
    {/* Left Sidebar */}
    <div className="lg:col-span-1 w-full">
      <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
    </div>
  
    {/* Main Content Area */}
    <div className="lg:col-span-2 w-full mt-20">
      <HomeMainbar />
    </div>
  
    {/* Right Sidebar */}
    <div className="lg:col-span-1 w-full mt-20">
      <RightSidebar />
    </div>
  </div>
  
  
  );
};

export default Home;
