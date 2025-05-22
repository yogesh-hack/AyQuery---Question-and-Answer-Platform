import React from "react";

import "../../App.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import Mainblogs from "../../components/Blogs/Mainblogs";
import Blogs from "../../components/Blogs/Blogs";
import JobBoard from "../../components/Jobs/JobBoard";

const Careers = ({ slideIn }) => {
  return (
    <div className="grid gap-6">
  
    {/* Main Content Area */}
    <div className="w-full mt-20">
      <JobBoard/>
    </div>
  </div>
  
  
  );
};

export default Careers;
