import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../actions/users";

const EditProfileForm = ({ currentUser, setSwitch }) => {
  const [name, setName] = useState(currentUser?.result?.name);
  const [about, setAbout] = useState(currentUser?.result?.about);
  const [tags, setTags] = useState([]);
  const dispatch = useDispatch();
  console.log(tags);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (tags[0] === "" || tags.length === 0) {
      alert("Update tags field");
    } else {
      dispatch(updateProfile(currentUser?.result?._id, { name, about, tags }));
    }
    setSwitch(false);
  };

  return (
    <div className="container mx-auto px-4 py-6">
    <h1 className="text-2xl font-semibold mb-4">Edit Your Profile</h1>
    <h2 className="text-xl font-medium text-gray-600 mb-4">Public information</h2>
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <h3 className="text-lg font-semibold mb-2">Display name</h3>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">About me</h3>
        <textarea
          id="about"
          cols="30"
          rows="6"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Watched tags</h3>
        <p className="text-sm text-gray-600 mb-2">Add tags separated by 1 space</p>
        <input
          type="text"
          id="tags"
          onChange={(e) => setTags(e.target.value.split(" "))}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex space-x-4">
        <input
          type="submit"
          value="Save profile"
          className="user-submit-btn w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
        />
        <button
          type="button"
          className="user-cancel-btn w-full bg-gray-300 py-2 px-4 rounded-md hover:bg-gray-400 transition duration-300"
          onClick={() => setSwitch(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  </div>
  );
};

export default EditProfileForm;
