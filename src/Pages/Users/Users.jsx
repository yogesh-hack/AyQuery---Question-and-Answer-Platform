import React from "react";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import UsersList from "./UsersList";

const Users = ({ slideIn, handleSlideIn }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
     <div className="lg:col-span-1 w-full">
     <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
    </div>
    <div className="lg:col-span-2 w-full mt-20">
        <h1 style={{ fontWeight: "400" }}>Users</h1>
        <UsersList />
      </div>
    </div>
  );
};

export default Users;
