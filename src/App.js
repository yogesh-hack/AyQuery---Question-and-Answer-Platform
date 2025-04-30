import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./AllRoutes";
import { fetchAllQuestions } from "./actions/question";
import { fetchAllTweets } from "./actions/tweet";
import { fetchAllUsers } from "./actions/users";
import { ThemeProvider } from "./context/ThemeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "../src/App.css";
import Footer from "./components/Footer/Footer";

// Component to show loader on route change
function PageLoader() {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();
    return () => {
      NProgress.done();
    };
  }, [location]);

  return null;
}

function App() {
  const dispatch = useDispatch();
  const [slideIn, setSlideIn] = useState(false);

  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(fetchAllTweets());
    dispatch(fetchAllUsers());
  }, [dispatch]);

  // Handle initial sidebar visibility based on screen size
  useEffect(() => {
    const handleResize = () => {
      setSlideIn(window.innerWidth >= 768); // Show on desktop, hide on mobile
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle body scroll locking
  useEffect(() => {
    if (slideIn && window.innerWidth < 768) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [slideIn]);

  const handleSlideIn = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setSlideIn((prev) => !prev);
  };

  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-black min-h-screen">
        <Router>
          <PageLoader />
          <Navbar handleSlideIn={handleSlideIn} />
          <AllRoutes slideIn={slideIn} handleSlideIn={handleSlideIn} />
          <Footer/>
        </Router>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
