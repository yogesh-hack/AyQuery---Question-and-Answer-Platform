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
import { fetchAllStores } from "./actions/store";
import { LoadingProvider } from "./context/LoadingContext";

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
    dispatch(fetchAllStores());
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

  const hideLayout = location.pathname.startsWith("/Auth") ||  location.pathname.startsWith("/company")|| location.pathname === "/" || location.pathname === "/forgot-password" || location.pathname === "/verify-email" || location.pathname === "/error" || location.pathname.startsWith("/test") || location.pathname.startsWith("/new-chat");

  return (
    <>
      <PageLoader />
      {!hideLayout && <Navbar handleSlideIn={handleSlideIn} />}
      <LoadingProvider>
      <AllRoutes slideIn={slideIn} handleSlideIn={handleSlideIn} />
      </LoadingProvider>
      {!hideLayout && <Footer />}
    </>
  );
}
// In your main index.js or App.js
const ignoreResizeObserverError = () => {
  const originalError = console.error;
  console.error = (...args) => {
    if (/ResizeObserver/.test(args[0])) {
      return;
    }
    originalError.apply(console, args);
  };
};

ignoreResizeObserverError();

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
