import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import Videoplayer from "../../components/VideoPlayer/Videoplayer";
import sample from '../../assets/sample.mp4'
import sample2 from '../../assets/sample2.mp4'

const Video = ({ slideIn, handleSlideIn }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
    {/* Left Sidebar */}
    <div className="lg:col-span-1 w-full">
    <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
    </div>
  
    {/* Main Content Area */}
    <div className="lg:col-span-2 w-full mt-20">
      <Videoplayer videos={[sample, sample2]} />
    </div>
  
    {/* Right Sidebar */}
    <div className="lg:col-span-1 w-full">
      <RightSidebar />
    </div>
  </div>
  );
};

export default Video;
