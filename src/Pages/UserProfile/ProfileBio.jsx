import React from "react";

const ProfileBio = ({ currentProfile }) => {
  return (
    <div className="container mx-auto px-4 py-6">
    <div>
      {currentProfile?.tags.length !== 0 ? (
        <>
          <h4 className="text-lg font-semibold mb-2">Tags watched</h4>
          {currentProfile?.tags.map((tag) => (
            <p key={tag} className="text-md text-gray-800">{tag}</p>
          ))}
        </>
      ) : (
        <p className="text-md text-gray-600">0 tags watched</p>
      )}
    </div>
    <div>
      {currentProfile?.about ? (
        <>
          <h4 className="text-lg font-semibold mb-2">About</h4>
          <p className="text-md text-gray-800">{currentProfile?.about}</p>
        </>
      ) : (
        <p className="text-md text-gray-600">No bio found</p>
      )}
    </div>
  </div>
  
  );
};

export default ProfileBio;
