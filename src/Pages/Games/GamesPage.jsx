import "../../App.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import HomeMainbar from "../../components/HomeMainbar/HomeMainbar";
import CommunitySection from "../../components/HomeMainbar/CommunitySection";
import HeroSlider from "../../components/Games/HeroSlider";
import CountdownSection from "../../components/Games/CountdownSection";
import GamesSwiper from "../../components/Games/GamesSwiper";

const GamesPage = ({ slideIn, handleSlideIn }) => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Left Sidebar */}
            <div className="lg:col-span-1 w-full">
                <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
            </div>

            {/* Combined Main Content and Right Sidebar Area */}
            <div className="lg:col-span-3 mt-24 mr-10">
                <HeroSlider />
                <div className="mt-10">
                    <CountdownSection />
                </div>

                {/* Main Content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* HomeMainbar */}
                    <div className="lg:col-span-3">
                        <GamesSwiper />
                    </div>
                </div>
                <div class="absolute hidden lg:block bottom-28 -translate-y-36 left-1/2 -translate-x-1/2">
                    <svg width="1300" height="1001" viewBox="0 0 1300 1001" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.7" filter="url(#filter0_f_9279_7148)">
                            <circle cx="800" cy="500.03" r="300" fill="#4E6EFF"></circle>
                        </g>
                        <g opacity="0.3" filter="url(#filter1_f_9279_7148)">
                            <circle cx="500" cy="500.03" r="300" fill="#FF58D5"></circle>
                        </g>
                        <defs>
                            <filter id="filter0_f_9279_7148" x="300" y="0.029541" width="1000" height="1000" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                                <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_9279_7148"></feGaussianBlur>
                            </filter>
                            <filter id="filter1_f_9279_7148" x="0" y="0.029541" width="1000" height="1000" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                                <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_9279_7148"></feGaussianBlur>
                            </filter>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default GamesPage;