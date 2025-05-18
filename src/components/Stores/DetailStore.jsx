import React from 'react'

const DetailStore = () => {
  return (
    <section class="pt-8 pb-24">
      <div className="container">
  <div className="-mx-4 flex flex-wrap">
    {/* Image Section */}
    <div className="w-full px-4 lg:w-1/2">
      <div className="mb-12 flex w-full items-center justify-center rounded-xl border border-stroke bg-bg-color py-8 sm:py-14 md:py-24 lg:mb-0 lg:py-16 xl:py-28">
        <img src="/images/react-ebook-cover.png" alt="React Mastery eBook Cover" />
      </div>
    </div>

    {/* Details Section */}
    <div className="w-full px-4 lg:w-1/2">
      <div className="xl:pl-8">
        <div className="mb-9 justify-between sm:flex">
          <h2 className="mb-3 text-3xl font-bold text-white sm:mb-0 sm:text-[38px] lg:text-3xl xl:text-[38px]">Mastery React eBook</h2>
          <button className="inline-flex items-center rounded-md bg-white px-2 py-1">
            <svg width="14" height="14" fill="none" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 11.87L6.15 11.1C3.15 8.38 1.17 6.57 1.17 4.38C1.17 2.57 2.58 1.17 4.38 1.17C5.39 1.17 6.36 1.64 7 2.38C7.64 1.64 8.61 1.17 9.62 1.17C11.42 1.17 12.83 2.57 12.83 4.38C12.83 6.57 10.85 8.38 7.85 11.1L7 11.87Z" fill="#F85486" />
            </svg>
            <span className="pl-1 text-xs font-semibold text-black">2.3K</span>
          </button>
        </div>

        <div className="mb-9 sm:flex">
          <div className="flex items-center border-body-color pr-0 pb-3 sm:border-r-2 sm:pr-8 sm:pb-0">
            <div className="mr-2 h-11 w-full max-w-[44px] rounded-md">
              <img src="/images/author-avatar.png" alt="author" className="h-full w-full object-cover object-center" />
            </div>
            <div className="w-full">
              <h3 className="text-base font-semibold text-white">
                @ReactWizard
                <span className="block text-base font-medium text-body-color">Author</span>
              </h3>
            </div>
          </div>
        </div>

        <p className="mb-9 text-base font-medium leading-relaxed text-body-color">
          Dive deep into the world of React.js with this comprehensive eBook covering everything from hooks and context to performance optimization and deployment. Ideal for developers at any level.
        </p>

        <div className="mb-6 flex flex-wrap items-center justify-between rounded-lg border border-stroke bg-bg-color">
          <div className="w-full sm:w-1/2">
            <div className="space-y-2 border-stroke p-6 sm:border-r">
              <p className="text-base font-semibold text-body-color">Author: <span className="text-dark dark:text-white">React Wizard</span></p>
              <p className="text-base font-semibold text-body-color">Pages: <span className="text-dark dark:text-white">280</span></p>
              <p className="text-base font-semibold text-body-color">Published On: <span className="text-dark dark:text-white">Jan 10, 2024</span></p>
            </div>
          </div>
          <div className="w-full sm:w-1/2 sm:text-center">
            <div className="space-y-3 p-6">
              <p className="text-base font-semibold text-body-color">Price: <span className="text-white">$29.99</span></p>
              <p className="inline-flex items-center justify-center rounded-md bg-white/10 py-[10px] px-8 text-base font-semibold text-white">Limited Offer</p>
            </div>
          </div>
        </div>

        <div className="mb-8 overflow-hidden rounded-lg border border-stroke bg-bg-color">
          <div className="flex w-full flex-wrap items-center border-b border-stroke px-1 pb-4 pt-1">
            <div className="px-[6px] pt-3">
              <button className="rounded-md border border-stroke py-2 px-5 text-base font-semibold text-white hover:border-primary hover:bg-primary">Chapters</button>
            </div>
            <div className="px-[6px] pt-3">
              <button className="rounded-md border border-stroke py-2 px-5 text-base font-semibold text-white hover:border-primary hover:bg-primary">Reviews</button>
            </div>
            <div className="px-[6px] pt-3">
              <button className="rounded-md border border-stroke py-2 px-5 text-base font-semibold text-white hover:border-primary hover:bg-primary">License</button>
            </div>
          </div>

          <div className="py-2 px-4 space-y-4">
            <div className="text-sm font-medium text-body-color">Last updated 2 weeks ago</div>
            <div className="text-sm font-medium text-body-color">⭐ 4.8 based on 157 reviews</div>
          </div>
        </div>

        <button  className="w-full bg-gradient-to-r from-green-400 via-blue-400 to-blue-600 text-white px-4 py-2 rounded-full font-semibold shadow-md hover:opacity-90">Buy Now</button>
      </div>
    </div>
  </div>
</div>

    </section>
  )
}

export default DetailStore