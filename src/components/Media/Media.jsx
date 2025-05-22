import {React,useState} from 'react'
import { FaRegHeart, FaRegCommentDots, FaRegPaperPlane, FaRegBookmark } from "react-icons/fa";
import { Bell, MessageSquarePlus } from 'lucide-react';
import CreateMedia from './CreateMedia';
function Media() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
  <h1 className="text-2xl font-semibold mb-3">Media</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {imageUrls.map((url, index) => (
    <div className="flex items-start gap-2.5" key={index}>
      <div className="flex flex-col gap-1 w-full">
        <div className="flex flex-col w-full leading-1.5 p-4 border border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-[#0d1117] dark:border-gray-800">
          
          {/* Header */}
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center space-x-2">
              <img
                className="w-8 h-8 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                alt="User"
              />
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">11:4{index}</span>
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