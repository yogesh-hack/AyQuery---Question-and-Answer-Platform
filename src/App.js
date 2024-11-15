import { BrowserRouter as Router ,  useLocation} from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./AllRoutes";
import { fetchAllQuestions } from "./actions/question";
import { fetchAllUsers } from "./actions/users";
import { ThemeProvider } from "./context/ThemeContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'; // Import NProgress styles
import '../src/App.css'

// Component to manage NProgress based on route changes
function PageLoader() {
  const location = useLocation();

  useEffect(() => {
    // Start the loader when route changes
    NProgress.start();
    return () => {
      // Complete the loader once the route change completes
      NProgress.done();
    };
  }, [location]);

  return null; // This component doesn't render anything
}
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllQuestions());
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const [slideIn, setSlideIn] = useState(true);

  const handleSlideIn = () => {
    setSlideIn(!slideIn);
  }
  return (
    <ThemeProvider>
    <div className="bg-white dark:bg-black">
      <Router>
      <PageLoader />
        <Navbar handleSlideIn={handleSlideIn} />
        <AllRoutes slideIn={slideIn} handleSlideIn={handleSlideIn} />
        
      </Router>
    </div>
    <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    </ThemeProvider>
  );
}

export default App;
