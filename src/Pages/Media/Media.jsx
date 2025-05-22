import "../../App.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import MediaMain from "../../components/Media/MediaMain";

const Media = ({ slideIn, handleSlideIn }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Left Sidebar */}
      <div className="lg:col-span-1 w-full">
        <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn } />
      </div>

      {/* Combined Main Content and Right Sidebar Area */}
      <div className="lg:col-span-3 mt-24 mr-10">
        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* HomeMainbar */}
          <div className="lg:col-span-2">
            <MediaMain />
          </div>
          
          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;