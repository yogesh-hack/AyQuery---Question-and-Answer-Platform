import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

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

const AllRoutes = ({ slideIn, handleSlideIn }) => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Landingpage/>}
      />
      <Route path="/Auth" element={<Auth />} />
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/AskQuestion" element={<AskQuestion />} />
      <Route path="/error" element={<ErrorPage/>} />
      <Route
        path="/Store"
        element={
          <Store slideIn={slideIn} handleSlideIn={handleSlideIn} />
        }
      />
      <Route
        path="/Store/detail/:id"
        element={
          <StoreDetails slideIn={slideIn} handleSlideIn={handleSlideIn} />
        }
      />
      <Route
        path="/Questions"
        element={<Questions slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route
        path="/Games"
        element={<GamesPage slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route
        path="/Tweets"
        element={<Tweets slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route
        path="/Media"
        element={<Media slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route
        path="/Questions/:id"
        element={
          <DisplayQuestion slideIn={slideIn} handleSlideIn={handleSlideIn} />
        }
      />
      <Route
        path="/Tags"
        element={<Tags slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route
        path="/Users"
        element={<Users slideIn={slideIn} handleSlideIn={handleSlideIn} />}
      />
      <Route
        path="/Users/:id"
        element={
          <UserProfile slideIn={slideIn} handleSlideIn={handleSlideIn} />
        }
      />
      <Route
        path="/Articles"
        element={
          <Article slideIn={slideIn} handleSlideIn={handleSlideIn} />
        }
      />
      <Route
        path="/Articles/write"
        element={
          <ArticleEditor slideIn={slideIn} handleSlideIn={handleSlideIn} />
        }
      />
      <Route
        path="/careers"
        element={
          <Careers slideIn={slideIn} handleSlideIn={handleSlideIn} />
        }
      />
      <Route path="/careers/:jobId" element={<CareerApplication slideIn={slideIn} handleSlideIn={handleSlideIn} />} />
      <Route path="/test/:testId" element={<AssessmentTest />} />
      <Route path="/test/:testId/questions" element={<Test />} />

      <Route path="/Articles/blog/:slug" element={<Mainblogs />} />
      <Route
        path="/Aboutus"
        element={
          <Aboutus/>
        }
      />
        <Route path="/editor/:roomId" element={<LiveCodingPage />} />
        <Route path="/room-select" element={<LiveCodingPage />} />
      <Route
        path="/Courses"
        element={
          <Video slideIn={slideIn} handleSlideIn={handleSlideIn}/>
        }
      />
      <Route
        path="/movies"
        element={
          <Movies slideIn={slideIn} handleSlideIn={handleSlideIn}/>
        }
      />
        <Route path="/Courses/:courseTitle/:contentSlug" element={<VideoContent />} />
       <Route path="/Courses/:courseTitle" element={<Course />} />
    </Routes>
  );
};

export default AllRoutes;
