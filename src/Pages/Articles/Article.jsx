import React from "react";

import "../../App.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import Mainblogs from "../../components/Blogs/Mainblogs";
import Blogs from "../../components/Blogs/Blogs";

const Article = ({ slideIn }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
    {/* Left Sidebar */}
    <div className="lg:col-span-1 w-full">
      <LeftSidebar slideIn={slideIn} />
    </div>
  
    {/* Main Content Area */}
    <div className="lg:col-span-3 w-full">
      <Blogs/>
    </div>
  </div>
  
  
  );
};

export default Article;
