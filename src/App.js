import { BrowserRouter as Router } from "react-router-dom";
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
import { useLocation } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";

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

// Component that goes inside Router
function AppContent() {
  const dispatch = useDispatch();
  const [slideIn, setSlideIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(fetchAllTweets());
    dispatch(fetchAllUsers());
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      setSlideIn(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const hideLayout = location.pathname.startsWith("/Auth") || location.pathname === "/verify-email" || location.pathname === "/error";

  return (
    <>
      <PageLoader />
      {!hideLayout && <Navbar handleSlideIn={handleSlideIn} />}
      <AllRoutes slideIn={slideIn} handleSlideIn={handleSlideIn} />
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <div className="bg-white dark:bg-black min-h-screen">
        <Router>
          <ErrorBoundary>
          <AppContent />
          </ErrorBoundary>
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
