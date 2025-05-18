import React from 'react'
import { Link } from 'react-router-dom'

const Ebookstore = ({storeList}) => {
    if (!storeList) {
        return <div>Loading stores...</div>;
      }
    if (storeList.length === 0) {
        return <div>No stores available</div>;
      }      
    return (
        <div>
            {storeList.map((store) => (
            <div class="w-full px-4 md:w-1/2 lg:w-1/3 2xl:w-1/4">
                <div class="mb-10 rounded-xl border border-stroke bg-gray-100 p-[18px] dark:bg-gray-800 dark:border-gray-700">
                    <Link to="/store/detail/345" class="relative mb-5 overflow-hidden rounded-lg">
                    <img 
  src={store.storeCoverImage && store.storeCoverImage.length > 0 ? store.storeCoverImage[0] : 'https://nft-tailwind.preview.uideck.com/src/images/picks/image-04.svg'} 
  alt="store cover" 
  className="w-full" 
/>

                        <button class="absolute right-4 top-4 inline-flex items-center rounded-md bg-white px-2 py-1 dark:bg-gray-700">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.99999 11.8709L6.15416 11.1009C3.14999 8.37675 1.16666 6.57425 1.16666 4.37508C1.16666 2.57258 2.57832 1.16675 4.37499 1.16675C5.38999 1.16675 6.36416 1.63925 6.99999 2.38008C7.63582 1.63925 8.60999 1.16675 9.62499 1.16675C11.4217 1.16675 12.8333 2.57258 12.8333 4.37508C12.8333 6.57425 10.85 8.37675 7.84582 11.1009L6.99999 11.8709Z" fill="#F85486"></path>
                            </svg>

                            <span class="pl-1 text-xs font-semibold text-black dark:text-white"> {store.likes.length}K </span>
                        </button>
                    </Link>
                    <div>
                        <h3>
                            <a href="javascript:void(0)" class="mb-3 inline-block text-lg font-semibold text-dark hover:text-primary dark:text-white dark:hover:text-primary">{store.storeTitle}</a>
                        </h3>
                        <div class="mb-6 flex items-center justify-between">
                            <div class="w-full">
                                <div class="flex items-center">
                                    <div class="mr-2 h-8 w-full max-w-[32px] rounded-md">
                                        <img src="https://nft-tailwind.preview.uideck.com/src/images/picks/creator-04.png" alt="creator" class="h-full w-full object-cover object-center" />
                                    </div>
                                    <div class="w-full">
                                        <h4 class="text-xs font-semibold text-dark dark:text-white">
                                            @{store.userPosted}

                                            <span class="block text-xs font-medium text-body-color dark:text-gray-400"> creator </span>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full">
                                <h5 class="text-right text-xs font-semibold text-dark dark:text-white">
                                    $ {store.storePrice}

                                    <span class="block text-xs font-medium text-body-color dark:text-gray-400"> Current Price </span>
                                </h5>
                            </div>
                        </div>

                        <div class="flex items-center justify-between border-t-2 border-stroke pt-5">
                            <a href="javascript:void(0)" class="bg-gradient-to-r from-green-400 via-blue-400 to-blue-600 text-white px-4 py-2 rounded-full font-semibold shadow-md hover:opacity-90 dark:text-gray-300 dark:bg-gradient-to-r dark:from-green-500 dark:via-blue-500 dark:to-blue-700">
                                Buy Now
                            </a>
                            <a href="javascript:void(0)" class="flex items-center justify-center rounded-md py-3 px-4 text-sm font-semibold text-dark hover:text-primary sm:px-5 dark:text-white dark:hover:text-primary">
                                <span class="pr-1">
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 4.5V6.75L12 3.75L9 0.75V3C7.4087 3 5.88258 3.63214 4.75736 4.75736C3.63214 5.88258 3 7.4087 3 9C3 10.1775 3.345 11.2725 3.93 12.195L5.025 11.1C4.6875 10.4775 4.5 9.75 4.5 9C4.5 7.80653 4.97411 6.66193 5.81802 5.81802C6.66193 4.97411 7.80652 4.5 9 4.5ZM14.07 5.805L12.975 6.9C13.305 7.53 13.5 8.25 13.5 9C13.5 10.1935 13.0259 11.3381 12.182 12.182C11.3381 13.0259 10.1935 13.5 9 13.5V11.25L6 14.25L9 17.25V15C10.5913 15 12.1174 14.3679 13.2426 13.2426C14.3679 12.1174 15 10.5913 15 9C15 7.8225 14.655 6.7275 14.07 5.805Z" fill="currentColor"></path>
                                    </svg>
                                </span>
                                <span class="bg-gradient-to-r from-green-400 via-blue-400 to-blue-600 bg-clip-text text-transparent">
                                    Add to Wishlist
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            ))} 
        </div>
    )
}

export default Ebookstore