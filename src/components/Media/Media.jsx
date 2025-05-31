import {React,useState} from 'react'
import { FaRegHeart, FaRegCommentDots, FaRegPaperPlane, FaRegBookmark } from "react-icons/fa";
import { Bell, MessageSquarePlus } from 'lucide-react';
import CreateMedia from './CreateMedia';
function Media() {
  const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(null);
  const handleCardClick = idx => setSelectedIndex(idx);
  const handleClose = () => setSelectedIndex(null);

  const profile = {
  name: "Bonnie Green",
  time: "11:40",
  avatar: "https://flowbite.com/docs/images/people/profile-picture-3.jpg",
  followers: 1234,
  following: 567,
  posts: 42,
  bio: "Web Developer | Nature Lover",
  location: "Berlin, Germany",
  website: "https://bonniegreen.com",
  socials: [
    { name: "Twitter", url: "https://twitter.com/bonniegreen" },
    { name: "LinkedIn", url: "https://linkedin.com/in/bonniegreen" }
  ]
};
 const [hoveredProfileIdx, setHoveredProfileIdx] = useState(null);

  const imageUrls = [
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg",
  ];
  
  return (
    <div class="container mx-auto">
     <header className="flex items-center justify-between py-2 shadow-sm">
      <div className="flex items-center space-x-6">
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 rounded-full border border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="flex items-center space-x-4">
        <button className="relative">
          <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <button>
          <MessageSquarePlus className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </button>
        <button 
         onClick={() => setIsModalOpen(true)}
         className="bg-gradient-to-r from-green-400 via-blue-400 to-blue-600 text-white px-4 py-2 rounded-full font-semibold shadow-md hover:opacity-90">
          + Create a post
        </button>
      </div>
    </header>
        
      {/* Tab navigation */}
      <div className="p-3 flex items-center justify-between  border-b border-solid border-grey-light">
      </div>

    <h1 className="text-2xl font-semibold">Stories</h1>
  <div class="flex flex-wrap md:flex-nowrap overflow-x-auto no-scrollbar space-x-4 md:space-x-0 py-10">
    

    <div class="flex-none md:flex-1 text-center px-4 py-2 m-2">
      <div class="relative shadow-xl mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
        <img
          class="object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1502164980785-f8aa41d53611?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
          alt="Fun"
        />
      </div>
      <h1 class="pt-16 text-base font-semibold text-gray-900">Status</h1>
    </div>

    <div class="flex-none md:flex-1 text-center px-4 py-2 m-2">
      <div class="relative shadow-xl mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
        <img
          class="object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1456415333674-42b11b9f5b7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
          alt="Travel"
        />
      </div>
      <h1 class="pt-16 text-base font-semibold text-gray-900">Travel</h1>
    </div>

    <div class="flex-none md:flex-1 text-center px-4 py-2 m-2">
      <div class="relative shadow-xl mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
        <img
          class="object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1494972308805-463bc619d34e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80"
          alt="Food"
        />
      </div>
      <h1 class="pt-16 text-base font-semibold text-gray-900">Food</h1>
    </div>

    <div class="flex-none md:flex-1 text-center px-4 py-2 m-2">
      <div class="relative shadow-xl mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
        <img
          class="object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1516834474-48c0abc2a902?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
          alt="Sketch"
        />
      </div>
      <h1 class="pt-16 text-base font-semibold text-gray-900">Sketch</h1>
    </div>

    <div class="flex-none md:flex-1 text-center px-4 py-2 m-2">
      <div class="relative shadow-xl mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
        <img
          class="object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
          alt="My Work"
        />
      </div>
      <h1 class="pt-16 text-base font-semibold text-gray-900">My Work</h1>
    </div>
    
  </div>
   <div className="relative">
      <h1 className="text-2xl font-semibold mb-3">Media</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {imageUrls.map((url, index) => (
        <div
          className="flex items-start gap-2.5 cursor-pointer"
          key={index}
        >
          <div className="flex flex-col gap-1 w-full">
            <div className="relative flex flex-col w-full leading-1.5 p-4 border border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-[#0d1117] dark:border-gray-800 transition-shadow hover:shadow-lg">
              {/* Left Center Chat Tail */}
              <span className="absolute left-[-14px] top-1/2 transform -translate-y-1/2 w-4 h-4">
                <svg
                  width="18"
                  height="32"
                  className="text-gray-100 dark:text-[#0d1117]"
                  viewBox="0 0 18 32"
                >
                  <path d="M18 0 Q0 16 18 32" fill="currentColor" />
                </svg>
              </span>
              {/* Header */}
              <div className="flex items-start justify-between mb-2">
                <div
                  className="relative flex flex-col items-center"
                  onMouseEnter={() => setHoveredProfileIdx(index)}
                  onMouseLeave={() => setHoveredProfileIdx(null)}
                >
                  {/* Profile Icon */}
                  <img
                    className="w-10 h-10 rounded-full border-2 border-gray-300 dark:border-gray-600 shadow-lg cursor-pointer"
                    src={profile.avatar}
                    alt="Profile"
                  />

                  {/* Popover Card */}
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 mt-3 z-50 min-w-[260px] max-w-xs bg-white dark:bg-[#161b22] rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 transition-all duration-200 ${
                      hoveredProfileIdx === index
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                    }`}
                    style={{ bottom: "-230px" }}
                  >
                    {/* Arrow */}
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <svg width={28} height={16} className="text-white dark:text-[#161b22]" viewBox="0 0 28 16">
                        <polygon points="14,16 0,0 28,0" fill="currentColor" />
                      </svg>
                    </span>
                    <div className="flex flex-col items-center px-6 pt-4 pb-5">
                      <img
                        className="w-16 h-16 rounded-full mb-2 border-2 border-gray-200 dark:border-gray-700"
                        src={profile.avatar}
                        alt="Profile"
                      />
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">{profile.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">{profile.bio}</div>
                      <div className="flex gap-2 text-xs text-gray-500 dark:text-gray-400 mb-2">
                        <span>{profile.location}</span>
                        <span>·</span>
                        <a
                          href={profile.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          Website
                        </a>
                      </div>
                      <div className="flex gap-5 text-center my-2">
                        <div>
                          <div className="font-bold text-gray-900 dark:text-white">{profile.followers}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">Followers</div>
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 dark:text-white">{profile.following}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">Following</div>
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 dark:text-white">{profile.posts}</div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">Posts</div>
                        </div>
                      </div>
                      <div className="flex gap-3 mt-2">
                        {profile.socials.map((social) => (
                          <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-blue-500 dark:text-blue-400 hover:underline"
                          >
                            {social.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 focus:outline-none"
                >
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 4 15"
                  >
                    <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                  </svg>
                </button>
              </div>
              {/* Caption */}
              <p className="text-sm text-gray-900 dark:text-white mb-2">
                This is the new office #{index + 1}
              </p>
              {/* Image */}
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src={url}
                  alt={`Comment ${index + 1}`}
                />
              </div>
              {/* Actions */}
              <div className="flex justify-between items-center px-4 py-2 border-t border-gray-200 dark:border-gray-700 mt-3">
                <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300 text-xl">
                  <FaRegHeart className="cursor-pointer hover:text-red-500 transition-colors duration-200" />
                  <FaRegCommentDots className="cursor-pointer hover:text-blue-500 transition-colors duration-200" />
                  <FaRegPaperPlane className="cursor-pointer hover:text-green-500 transition-colors duration-200" />
                </div>
                <FaRegBookmark className="cursor-pointer hover:text-yellow-500 text-gray-700 dark:text-gray-300 transition-colors duration-200 text-xl" />
              </div>
              {/* Likes & Comments Link */}
              <span className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Liked by sarasshree and others
              </span>
              <a href="#" className="text-sm text-gray-800 dark:text-gray-400">
                View all comments
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>

      {/* Animated Side Panel */}
      <div
        className={`fixed top-5 my-10 right-3 z-50 bg-white dark:bg-[#161b22] shadow-3xl rounded-xl transition-all duration-500 ease-in-out w-full sm:w-[420px] ${
          selectedIndex !== null ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{ maxWidth: 420 }}
      >
        {selectedIndex !== null && (
          <div className="relative h-full flex flex-col">
            <button
              className="absolute top-4 right-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white bg-gray-200 dark:bg-gray-700 rounded-full p-2 z-10"
              onClick={handleClose}
            >
              <svg width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>
            <div className="overflow-y-auto p-8 pt-16">
              {/* Left Center Chat Tail */}
              <span className="absolute left-[-14px] top-1/2 transform -translate-y-1/2 w-4 h-4">
                <svg
                  width="18"
                  height="32"
                  className="text-white dark:text-[#161b22]"
                  viewBox="0 0 18 32"
                >
                  <path
                    d="M18 0 Q0 16 18 32"
                    fill="currentColor"
                  />
                </svg>
              </span>
              {/* Header */}
              <div className="flex items-center space-x-3 mb-4">
                <img
                  className="w-12 h-12 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                  alt="User"
                />
                <div className="flex flex-col">
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    Bonnie Green
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    11:4{selectedIndex}
                  </span>
                </div>
              </div>
              {/* Caption */}
              <p className="text-base text-gray-900 dark:text-white mb-4">
                This is the new office #{selectedIndex + 1}
              </p>
              {/* Image */}
              <div className="mb-4">
                <img
                  className="h-auto max-w-full rounded-xl"
                  src={imageUrls[selectedIndex]}
                  alt={`Comment ${selectedIndex + 1}`}
                />
              </div>
              {/* Actions */}
              <div className="flex justify-between items-center px-4 py-2 border-t border-gray-200 dark:border-gray-700 mt-3">
                <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300 text-2xl">
                  <FaRegHeart className="cursor-pointer hover:text-red-500 transition-colors duration-200" />
                  <FaRegCommentDots className="cursor-pointer hover:text-blue-500 transition-colors duration-200" />
                  <FaRegPaperPlane className="cursor-pointer hover:text-green-500 transition-colors duration-200" />
                </div>
                <FaRegBookmark className="cursor-pointer hover:text-yellow-500 text-gray-700 dark:text-gray-300 transition-colors duration-200 text-2xl" />
              </div>
              {/* Likes & Comments Link */}
              <span className="block text-base text-gray-600 dark:text-gray-400 mt-2">
                Liked by sarasshree and others
              </span>
              <a href="#" className="text-base text-gray-800 dark:text-gray-400">
                View all comments
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Overlay */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 backdrop-blur-sm"
          onClick={handleClose}
        />
      )}
    </div>

    {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-3xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Create a Post</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <CreateMedia/>
          </div>
        </div>
      )}
</div>

  )
}

export default Media