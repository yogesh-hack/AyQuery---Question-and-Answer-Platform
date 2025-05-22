import React from "react";

import "../../App.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import Mainblogs from "../../components/Blogs/Mainblogs";
import Blogs from "../../components/Blogs/Blogs";
import JobBoard from "../../components/Jobs/JobBoard";
import { Navigate, useParams } from "react-router-dom";
import JobApplication from "../../components/Jobs/JobApplication";

const CareerApplication = ({ slideIn }) => {
      const { jobId } = useParams();
    const job = 
    {
      id: 1,
      title: "Engineering Manager - Developer Experience",
      company: "Gonto",
      salary: "$75K - $100K",
      location: "London, UK",
      time: "22d",
      type: "Full Time",
      remote: false,
      role: "Management / Finance"
    }
    
  return (
    <div className="grid gap-6">
  
    {/* Main Content Area */}
    <div className="w-full mt-20">
      <JobApplication job={job} onBack={() => Navigate(-1)} />
    </div>
  </div>
  
  
  );
};

export default CareerApplication;
