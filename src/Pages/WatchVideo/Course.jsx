import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import Videoplayer from "../../components/VideoPlayer/Videoplayer";
import sample from '../../assets/sample.mp4'
import sample2 from '../../assets/sample2.mp4'
import CourseSide from "../../components/VideoPlayer/CourseSide";
import CoursesGrid from "../../components/VideoPlayer/CoursesList";

const Course = ({ slideIn, handleSlideIn }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
    {/* Left Sidebar */}
    <div className="lg:col-span-1 w-full">
      <CourseSide/>
    </div>
  
    {/* Main Content Area */}
    <div className="lg:col-span-3 w-full mt-20">
      <Videoplayer/>
    </div>
  </div>
  );
};

export default Course;
