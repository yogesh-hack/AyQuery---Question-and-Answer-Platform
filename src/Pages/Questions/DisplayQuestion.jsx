import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import QuestionsDetails from "./QuestionsDetails";

const DisplayQuestion = ({ slideIn, handleSlideIn }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
  {/* Main Content Area */}
  <div className="lg:col-span-3 w-full mt-20">
    <QuestionsDetails />
  </div>

  {/* Right Sidebar */}
  <div className="lg:col-span-1 w-full mt-20">
    <RightSidebar />
  </div>
</div>

  );
};

export default DisplayQuestion;
