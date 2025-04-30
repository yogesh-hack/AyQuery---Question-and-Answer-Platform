import React from 'react'
import { FaRegHeart, FaRegCommentDots, FaRegPaperPlane, FaRegBookmark } from "react-icons/fa";

function Media() {
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
    <div class="container mx-auto mt-10">
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

  

 

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {imageUrls.map((url, index) => (
        <div className="flex items-start gap-2.5" key={index}>
          <div className="flex flex-col gap-1">
            <div className="flex flex-col w-full max-w-[326px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
              <div className="flex items-center space-x-2 rtl:space-x-reverse mb-2">
                <img
                  className="w-8 h-8 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                  alt="User"
                />
                <span className="text-sm font-semibold text-gray-900 dark:text-white">Bonnie Green</span>
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">11:4{index}</span>
                <button
                  type="button"
                  className="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
                >
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 4 15"
                  >
                    <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                  </svg>
                </button>
              </div>
              <p className="text-sm font-normal text-gray-900 dark:text-white">This is the new office #{index + 1}</p>
              <div>
                <img className="h-auto max-w-full rounded-lg" src={url} alt={`Comment ${index + 1}`} />
              </div>
              <div className="flex justify-between items-center px-4 py-2 border-t border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300 text-xl">
        <FaRegHeart className="cursor-pointer hover:text-red-500 transition-colors duration-200" />
        <FaRegCommentDots className="cursor-pointer hover:text-blue-500 transition-colors duration-200" />
        <FaRegPaperPlane className="cursor-pointer hover:text-green-500 transition-colors duration-200" />
      </div>
      <FaRegBookmark className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-yellow-500 transition-colors duration-200 text-xl" />
    </div>
    <span className="text-sm font-normal text-gray-600 dark:text-gray-400">Liked by sarasshree and others</span>

<a href='#' className="text-sm font-normal text-gray-800 dark:text-gray-400"> view all comments</a>
            </div>
            
          </div>
        </div>
      ))}
    </div>

</div>

  )
}

export default Media