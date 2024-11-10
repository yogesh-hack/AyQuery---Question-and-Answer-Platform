import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake, faPen } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import Avatar from "../../components/Avatar/Avatar";
import EditProfileForm from "./EditProfileForm";
import ProfileBio from "./ProfileBio";

const UserProfile = ({ slideIn, handleSlideIn }) => {
  const { id } = useParams();
  const users = useSelector((state) => state.usersReducer);
  const currentProfile = users.filter((user) => user._id === id)[0];
  const currentUser = useSelector((state) => state.currentUserReducer);
  const [Switch, setSwitch] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

    <div className="lg:col-span-1 w-full">
    <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
    </div>
    <div className="lg:col-span-2 w-full mt-20">
      <section>
        <div className="user-details-container flex items-center space-x-4 mb-6">
          <div className="user-details flex items-center space-x-4">
            <Avatar
              backgroundColor="purple"
              color="white"
              fontSize="50px"
              px="40px"
              py="30px"
            >
              {currentProfile?.name.charAt(0).toUpperCase()}
            </Avatar>
            <div className="user-name">
              <h1 className="text-2xl font-semibold">{currentProfile?.name}</h1>
              <p className="text-md text-gray-600">
                <FontAwesomeIcon icon={faBirthdayCake} /> Joined{" "}
                {moment(currentProfile?.joinedOn).fromNow()}
              </p>
            </div>
          </div>
          {currentUser?.result._id === id && (
            <button
              type="button"
              onClick={() => setSwitch(true)}
              className="edit-profile-btn bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
            >
              <FontAwesomeIcon icon={faPen} /> Edit Profile
            </button>
          )}
        </div>
        {Switch ? (
          <EditProfileForm currentUser={currentUser} setSwitch={setSwitch} />
        ) : (
          <ProfileBio currentProfile={currentProfile} />
        )}
      </section>
    </div>
  </div>
  );
};

export default UserProfile;
