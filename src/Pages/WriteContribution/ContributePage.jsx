import "../../App.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import { ContributionGraph } from "../../components/WriteContribute/ContributionGraph";
import { CreateWritingEntry } from "../../components/WriteContribute/CreateWritingEntry";
import { Dashboard } from "../../components/WriteContribute/Dashboard";
import { WritingProjects } from "../../components/WriteContribute/WritingProjects";

const ContributePage = ({ slideIn, handleSlideIn }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Left Sidebar */}
            <div className="lg:col-span-1 w-full">
                <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
            </div>

            {/* Combined Main Content and Right Sidebar Area */}
            <div className="lg:col-span-3 mt-24 mr-10">
                <Dashboard />
                        <CreateWritingEntry/>
                <div className="mt-10">
                    <ContributionGraph />
                </div>

                {/* Main Content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* HomeMainbar */}
                    <div className="lg:col-span-3 mb-10">
                        <WritingProjects />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContributePage;