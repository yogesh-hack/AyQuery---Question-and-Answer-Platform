import React from "react";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  return (
    <Link to={`/Users/${user._id}`} className="user-profile-link block p-4 bg-white border rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
  <div className="flex items-center space-x-4">
    <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center text-xl font-semibold">
      {user.name.charAt(0).toUpperCase()}
    </div>
    <div>
      <h5 className="text-lg font-medium">{user.name}</h5>
    </div>
  </div>
</Link>

  );
};

export default User;
