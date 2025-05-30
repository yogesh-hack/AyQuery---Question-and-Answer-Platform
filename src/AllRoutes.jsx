import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Auth from "./Pages/Auth/Auth";
import Questions from "./Pages/Questions/Questions";
import AskQuestion from "./Pages/AskQuestion/AskQuestion";
import DisplayQuestion from "./Pages/Questions/DisplayQuestion";
import Tags from "./Pages/Tags/Tags";
import Users from "./Pages/Users/Users";
import UserProfile from "./Pages/UserProfile/UserProfile";
import Video from "./Pages/WatchVideo/video";
import Aboutus from "./Pages/Aboutus/Aboutus";
import Article from "./Pages/Articles/Article";
import VerifyEmail from "./Pages/Auth/VerifyEmail";
import ErrorPage from "./components/ErrorPage";
import Store from "./Pages/Stores/Store";
import StoreDetails from "./Pages/Stores/StoreDetails";
import Mainblogs from "./components/Blogs/Mainblogs";
import VideoContent from "./components/VideoPlayer/VideoContent";
import Course from "./Pages/WatchVideo/Course";
import LiveCodingPage from "./Pages/CodeEditor/LiveCodingPage";
import ArticleEditor from "./Pages/Articles/ArticleEditor";
import Careers from "./Pages/careers/careers";
import JobApplication from "./components/Jobs/JobApplication";
import CareerApplication from "./Pages/careers/careerApplication";
import Movies from "./Pages/Movies/movies";
import Tweets from "./Pages/Tweets/Tweets";
import Media from "./Pages/Media/Media";
import AssessmentTest from "./Pages/Assessment/AssessmentTest";
import Test from "./Pages/Assessment/Test";
import Landingpage from "./Pages/LandingPage/landingpage";
import GamesPage from "./Pages/Games/GamesPage";
import ContributePage from "./Pages/WriteContribution/ContributePage";
import { WritingEditor } from "./components/WriteContribute/WritingEditor";
import ForgotPasswords from "./Pages/Auth/AboutAuth";
import AygenMain from "./Pages/AygenPage/AygenMain";
import { useLoading } from "./context/LoadingContext";
import ModernLoader from "./components/ModernLoader";
import DashboardLayout from "./CompanyDashboard/pages/Dashboard";
import Assessment from "./CompanyDashboard/pages/Assessment";

const RouteWithLoader = ({ element: Element, slideIn, handleSlideIn, ...rest }) => {
  const { setLoading } = useLoading();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setLoading(true);
    setIsLoaded(false);

    const timer = setTimeout(() => {
      setIsLoaded(true);
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [setLoading]);

  return isLoaded ? (
    <Element {...rest} slideIn={slideIn} handleSlideIn={handleSlideIn} />
  ) : null;
};

const AllRoutes = ({ slideIn, handleSlideIn }) => {
   const { loading } = useLoading();
  const location = useLocation();

 return (
  <>
    {loading && <ModernLoader />}
    <Routes location={location} key={location.key}>
      <Route path="/" element={<RouteWithLoader element={Landingpage} />} />
      <Route path="/Auth" element={<RouteWithLoader element={Auth} />} />
      <Route path="/verify-email" element={<RouteWithLoader element={VerifyEmail} />} />
      <Route path="/AskQuestion" element={<RouteWithLoader element={AskQuestion} />} />
      <Route path="/error" element={<RouteWithLoader element={ErrorPage} />} />
      <Route path="/forgot-password" element={<RouteWithLoader element={ForgotPasswords} />} />
      <Route path="/new-chat" element={<RouteWithLoader element={AygenMain} />} />
      <Route path="/company/Dashboard" element={<RouteWithLoader element={DashboardLayout}/>} />
      <Route path="/company/Assessment" element={<RouteWithLoader element={Assessment}/>} />
      <Route
        path="/Store"
        element={<RouteWithLoader element={Store} slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route
        path="/Store/detail/:id"
        element={<RouteWithLoader element={StoreDetails} slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route
        path="/Questions"
        element={<RouteWithLoader element={Questions} slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route
        path="/Colaborate"
        element={<RouteWithLoader element={ContributePage} slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route path="/Colaborate/write" element={<RouteWithLoader element={WritingEditor} />} />
      <Route
        path="/Games"
        element={<RouteWithLoader element={GamesPage} slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route
        path="/Tweets"
        element={<RouteWithLoader element={Tweets} slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route
        path="/Media"
        element={<RouteWithLoader element={Media} slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route
        path="/Questions/:id"
        element={<RouteWithLoader element={DisplayQuestion} slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route
        path="/Tags"
        element={<RouteWithLoader element={Tags} slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route
        path="/Users"
        element={<RouteWithLoader element={Users} slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route
        path="/Users/:id"
        element={<RouteWithLoader element={UserProfile} slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route
        path="/Articles"
        element={<RouteWithLoader element={Article} slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route
        path="/Articles/write"
        element={<RouteWithLoader element={ArticleEditor} slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route
        path="/careers"
        element={<RouteWithLoader element={Careers} slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route
        path="/careers/:jobId"
        element={<RouteWithLoader element={CareerApplication} slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route path="/test/:testId" element={<RouteWithLoader element={AssessmentTest} />} />
      <Route path="/test/:testId/questions" element={<RouteWithLoader element={Test} />} />
      <Route path="/Articles/blog/:slug" element={<RouteWithLoader element={Mainblogs} />} />
      <Route path="/Aboutus" element={<RouteWithLoader element={Aboutus} />} />
      <Route path="/editor/:roomId" element={<RouteWithLoader element={LiveCodingPage} />} />
      <Route path="/room-select" element={<RouteWithLoader element={LiveCodingPage} />} />
      <Route
        path="/Courses"
        element={<RouteWithLoader element={Video} slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route
        path="/movies"
        element={<RouteWithLoader element={Movies} slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route path="/Courses/:courseTitle/:contentSlug" element={<RouteWithLoader element={VideoContent} />} />
      <Route path="/Courses/:courseTitle" element={<RouteWithLoader element={Course} />} />
    </Routes>
  </>
);
}

export default AllRoutes;
