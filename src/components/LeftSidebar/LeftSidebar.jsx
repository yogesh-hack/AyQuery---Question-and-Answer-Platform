import { NavLink } from 'react-router-dom';
import Globe from '../../assets/Globe.svg';

const LeftSidebar = ({ slideIn, handleSlideIn }) => (
  <div
    className={`${
      slideIn ? 'translate-x-0' : '-translate-x-full'
    } fixed left-10 top-24 z-50 w-64 h-full border rounded shadow bg-white dark:bg-gray-800 transition-transform duration-300 ease-in-out`}
  >
    <nav className="side-nav p-4">
      <button onClick={handleSlideIn} className="nav-btn mb-4">
        <NavLink
          to="/"
          className="side-nav-links text-lg text-gray-700 dark:text-white hover:text-blue-500"
          activeClassName="active"
        >
          <p>Home</p>
        </NavLink>
      </button>
      <div className="side-nav-div">
        <div className="mb-4">
          <p className="text-sm font-semibold text-gray-500 dark:text-gray-300">PUBLIC</p>
        </div>
        <NavLink
          to="/Questions"
          className="nav-btn w-full py-2 px-4 mb-2 text-left flex items-center"
          onClick={handleSlideIn}
          activeClassName="active"
        >
          <img src={Globe} alt="Globe" className="mr-3" />
          <p className="side-nav-links text-gray-700 dark:text-white hover:text-blue-500">Questions</p>
        </NavLink>
        <NavLink
          to="/Tags"
          className="nav-btn w-full py-2 px-4 mb-2 text-left"
          onClick={handleSlideIn}
          activeClassName="active"
        >
          <p className="side-nav-links text-gray-700 dark:text-white hover:text-blue-500">Tags</p>
        </NavLink>
        <NavLink
          to="/Users"
          className="nav-btn w-full py-2 px-4 mb-2 text-left"
          onClick={handleSlideIn}
          activeClassName="active"
        >
          <p className="side-nav-links text-gray-700 dark:text-white hover:text-blue-500">Users</p>
        </NavLink>
        <NavLink
          to="/video"
          className="nav-btn w-full py-2 px-4 mb-2 text-left"
          onClick={handleSlideIn}
          activeClassName="active"
        >
          <p className="side-nav-links text-gray-700 dark:text-white hover:text-blue-500">Watch Video</p>
        </NavLink>
      </div>
    </nav>
  </div>
);

export default LeftSidebar;
