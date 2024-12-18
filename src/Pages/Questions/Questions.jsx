import React from "react";
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";
import "../../App.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import HomeMainbar from "../../components/HomeMainbar/HomeMainbar";

const Questions = ({ slideIn, handleSlideIn }) => {
  const navigate = useNavigate();
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
  <div className="lg:col-span-1 w-full">
    <RightSidebar />
  </div>
</div>

  );
};

export default Questions;
