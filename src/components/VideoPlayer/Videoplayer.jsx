import React, { useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useGesture } from 'react-use-gesture';
import ReactPlayer from 'react-player';
import { Link, useParams } from 'react-router-dom';
import CourseSide from './CourseSide';

const Videoplayer = ({ videos }) => {
   const { courseTitle } = useParams();

    return (
      <div class="isolate">
   <div class="group">
      <div class="xl:not-group-data-sidebar-collapsed:ml-(--container-2xs)">
         <div class="sticky top-0 z-10 bg-white/90 backdrop-blur-sm dark:bg-gray-950/90 flex items-center justify-between gap-x-8 px-4 py-4 sm:px-6">
            <div class="flex min-w-0 shrink items-center gap-x-4">
               <button type="button" class="xl:hidden relative *:relative before:absolute before:top-1/2 before:left-1/2 before:size-8 before:-translate-1/2 before:rounded-md before:bg-white/75 before:backdrop-blur-sm dark:before:bg-gray-950/75 data-hover:before:bg-gray-950/5 dark:data-hover:before:bg-white/5 focus:outline-hidden data-focus:before:outline-2 data-focus:before:outline-blue-700 data-focus:before:outline-solid" data-headlessui-state="">
                  <svg viewBox="0 0 16 14" fill="none" class="shrink-0 stroke-gray-950 dark:stroke-white h-3.5 shrink-0">
                     <path d="M5.5 0.5H2.5C1.39543 0.5 0.5 1.39543 0.5 2.5V11.5C0.5 12.6046 1.39543 13.5 2.5 13.5H5.5M5.5 0.5H13.5C14.6046 0.5 15.5 1.39543 15.5 2.5V11.5C15.5 12.6046 14.6046 13.5 13.5 13.5H5.5M5.5 0.5V13.5"></path>
                  </svg>
               </button>
               <div class="min-w-0">
                  <nav aria-label="Breadcrumb" class="flex items-center gap-x-2 text-sm/6"><a class="min-w-0 shrink-0 text-gray-950 dark:text-white" href="/">Compass</a><span class="text-gray-950/25 dark:text-white/25">/</span><span class="min-w-0 truncate text-gray-950 last:text-gray-600 dark:last:text-gray-400">Overview</span></nav>
               </div>
            </div>
            <nav class="flex items-center">
               <button type="button" class="lg:hidden relative *:relative before:absolute before:top-1/2 before:left-1/2 before:size-8 before:-translate-1/2 before:rounded-md before:bg-white/75 before:backdrop-blur-sm dark:before:bg-gray-950/75 data-hover:before:bg-gray-950/5 dark:data-hover:before:bg-white/5 focus:outline-hidden data-focus:before:outline-2 data-focus:before:outline-blue-700 data-focus:before:outline-solid" data-headlessui-state="">
                  <svg viewBox="0 0 16 16" fill="none" class="fill-gray-950 dark:fill-white h-4 shrink-0">
                     <circle cx="8" cy="3" r="1"></circle>
                     <circle cx="8" cy="8" r="1"></circle>
                     <circle cx="8" cy="13" r="1"></circle>
                  </svg>
               </button>
               <div class="flex gap-x-6 text-sm/6 text-gray-950 max-lg:hidden dark:text-white">
                  <a href="/">Course</a><a href="/interviews">Interviews</a><a href="/resources">Resources</a>
                  <button class="inline-flex items-center gap-x-2 focus:not-data-focus:outline-none" id="headlessui-menu-button-«re»" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="">
                     Account
                     <svg viewBox="0 0 8 4" fill="none" class="stroke-gray-950 dark:stroke-white h-1 shrink-0">
                        <path fill="none" d="M1 0.5L4 3.5L7 0.5" stroke-linecap="round" stroke-linejoin="round"></path>
                     </svg>
                  </button>
               </div>
            </nav>
         </div>
         <main class="px-4 sm:px-6">
            <div class="relative mx-auto max-w-7xl">
               <div class="absolute -inset-x-2 top-0 -z-10 h-80 overflow-hidden rounded-t-2xl mask-b-from-60% sm:h-88 md:h-112 lg:-inset-x-4 lg:h-128">
                  <img alt="" class="absolute inset-0 h-full w-full mask-l-from-60% object-cover object-center opacity-40" src="https://assets.tailwindcss.com/templates/compass/hero-background.png"/>
                  <div class="absolute inset-0 rounded-t-2xl outline-1 -outline-offset-1 outline-gray-950/10 dark:outline-white/10"></div>
               </div>
               <div class="mx-auto max-w-6xl">
                  <div class="relative">
                     <div class="px-4 pt-48 pb-12 lg:py-24">
                        <svg viewBox="0 0 151 32" fill="currentColor" class="h-8 fill-gray-950 dark:fill-white">
                           <path d="M16 0C24.8364 8.51064e-05 32 7.1635 32 16C32 24.8365 24.8364 31.9999 16 32C7.16353 32 0 24.8366 0 16C1.15965e-06 7.16344 7.16353 0 16 0ZM106.762 12.126C107.878 12.126 108.846 12.3969 109.667 12.9385C110.504 13.4635 111.152 14.2098 111.611 15.1777C112.071 16.1459 112.301 17.2868 112.301 18.5996C112.301 19.9287 112.063 21.0858 111.587 22.0703C111.111 23.0549 110.446 23.8178 109.593 24.3594C108.74 24.9009 107.73 25.1718 106.565 25.1719C105.367 25.1719 104.391 24.8929 103.636 24.335C103.125 23.9373 102.748 23.4371 102.504 22.835V29.9717H99.4023V12.3721H102.43V14.4502C102.714 13.8402 103.156 13.3362 103.759 12.9385C104.579 12.397 105.58 12.126 106.762 12.126ZM16 2.46191C8.52299 2.46191 2.46192 8.52291 2.46191 16C2.46191 23.4771 8.52299 29.5381 16 29.5381C23.4769 29.538 29.5381 23.477 29.5381 16C29.5381 8.52297 23.4769 2.462 16 2.46191ZM53.0225 6.95703C54.4336 6.95706 55.7057 7.23603 56.8379 7.79395C57.9699 8.35184 58.8972 9.13905 59.6191 10.1562C60.3576 11.1572 60.8085 12.3392 60.9727 13.7012H57.8223C57.6254 12.3722 57.0921 11.355 56.2227 10.6494C55.3529 9.92737 54.294 9.56544 53.0469 9.56543C51.9474 9.56543 50.9875 9.82844 50.167 10.3535C49.3465 10.8786 48.7066 11.6255 48.2471 12.5938C47.7876 13.5455 47.5576 14.6776 47.5576 15.9902C47.5576 17.3359 47.7876 18.5017 48.2471 19.4863C48.7065 20.4543 49.3546 21.2095 50.1914 21.751C51.0282 22.2924 51.9884 22.5625 53.0713 22.5625C54.2856 22.5625 55.3275 22.2095 56.1973 21.5039C57.067 20.7819 57.6169 19.7649 57.8467 18.4521H61.0225C60.8255 19.7978 60.3576 20.9797 59.6191 21.9971C58.8972 23.0143 57.9699 23.8015 56.8379 24.3594C55.7057 24.9009 54.4336 25.1718 53.0225 25.1719C51.7591 25.1719 50.5939 24.9507 49.5273 24.5078C48.4771 24.0483 47.5572 23.4084 46.7695 22.5879C45.9818 21.7674 45.3749 20.7985 44.9482 19.6826C44.5216 18.5668 44.3086 17.3438 44.3086 16.0146C44.3086 14.6856 44.5217 13.4714 44.9482 12.3721C45.3749 11.2726 45.9739 10.3207 46.7451 9.5166C47.5328 8.69614 48.4518 8.06417 49.502 7.62109C50.5686 7.17802 51.7425 6.95703 53.0225 6.95703ZM68.4834 12.126C69.8289 12.126 71.002 12.4051 72.0029 12.9629C73.0039 13.5044 73.7839 14.2593 74.3418 15.2275C74.8997 16.1957 75.1787 17.3197 75.1787 18.5996C75.1787 19.8796 74.8917 21.0205 74.3174 22.0215C73.7594 23.0061 72.9795 23.777 71.9785 24.335C70.9775 24.8929 69.8126 25.1719 68.4834 25.1719C67.1543 25.1719 65.9812 24.8928 64.9639 24.335C63.9629 23.777 63.1829 23.006 62.625 22.0215C62.0671 21.0205 61.7881 19.8796 61.7881 18.5996C61.7881 17.3197 62.0671 16.1957 62.625 15.2275C63.1829 14.2593 63.9629 13.5044 64.9639 12.9629C65.9812 12.405 67.1543 12.126 68.4834 12.126ZM119.02 12.126C120.201 12.126 121.178 12.4129 121.949 12.9873C122.505 13.3894 122.906 13.907 123.155 14.5391V12.3721H126.183V24.9258H123.155V22.8613C122.88 23.4554 122.445 23.9549 121.851 24.3594C121.03 24.9009 120.053 25.1719 118.921 25.1719C117.772 25.1718 116.771 24.9098 115.918 24.3848C115.081 23.8433 114.433 23.0882 113.974 22.1201C113.514 21.1519 113.284 20.011 113.284 18.6982C113.284 17.3691 113.522 16.2121 113.998 15.2275C114.474 14.243 115.139 13.48 115.992 12.9385C116.862 12.397 117.871 12.126 119.02 12.126ZM133.277 12.126C134.836 12.126 136.083 12.4621 137.019 13.1348C137.97 13.7911 138.495 14.7022 138.594 15.8672H135.764C135.682 15.3586 135.419 14.9735 134.976 14.7109C134.549 14.4484 133.958 14.3164 133.203 14.3164C132.498 14.3164 131.964 14.4315 131.604 14.6611C131.243 14.8744 131.062 15.1945 131.062 15.6211C131.062 15.9493 131.201 16.2283 131.48 16.458C131.759 16.6713 132.227 16.8603 132.884 17.0244L135.05 17.5166C136.28 17.7956 137.208 18.2796 137.831 18.9688C138.471 19.658 138.791 20.4709 138.791 21.4062C138.791 22.604 138.331 23.5312 137.412 24.1875C136.493 24.8438 135.205 25.1719 133.548 25.1719C131.808 25.1719 130.422 24.8109 129.388 24.0889C128.354 23.3505 127.788 22.3332 127.689 21.0371H130.521C130.603 21.6768 130.906 22.1611 131.431 22.4893C131.956 22.8174 132.662 22.9814 133.548 22.9814C134.352 22.9814 134.951 22.8584 135.345 22.6123C135.755 22.3497 135.96 21.9798 135.96 21.5039C135.96 21.1595 135.845 20.8802 135.615 20.667C135.385 20.4375 134.951 20.2491 134.312 20.1016L132.293 19.6338C130.915 19.3384 129.889 18.8785 129.216 18.2549C128.559 17.6149 128.231 16.819 128.231 15.8672C128.232 14.7022 128.674 13.7911 129.561 13.1348C130.463 12.4621 131.702 12.126 133.277 12.126ZM145.041 12.126C146.6 12.126 147.848 12.462 148.783 13.1348C149.735 13.7911 150.26 14.7022 150.358 15.8672H147.527C147.445 15.3588 147.183 14.9734 146.74 14.7109C146.314 14.4484 145.723 14.3164 144.968 14.3164C144.262 14.3164 143.728 14.4314 143.367 14.6611C143.006 14.8744 142.826 15.1946 142.826 15.6211C142.826 15.9492 142.965 16.2283 143.244 16.458C143.523 16.6713 143.991 16.8603 144.647 17.0244L146.813 17.5166C148.044 17.7956 148.972 18.2795 149.596 18.9688C150.236 19.658 150.556 20.4709 150.556 21.4062C150.556 22.604 150.096 23.5312 149.177 24.1875C148.258 24.8438 146.97 25.1718 145.312 25.1719C143.573 25.1719 142.186 24.8109 141.152 24.0889C140.119 23.3505 139.553 22.3333 139.454 21.0371H142.284C142.366 21.6769 142.67 22.1611 143.195 22.4893C143.72 22.8174 144.426 22.9814 145.312 22.9814C146.116 22.9814 146.716 22.8584 147.109 22.6123C147.52 22.3497 147.725 21.9798 147.725 21.5039C147.725 21.1595 147.61 20.8802 147.38 20.667C147.15 20.4374 146.715 20.2492 146.075 20.1016L144.057 19.6338C142.678 19.3384 141.653 18.8784 140.98 18.2549C140.324 17.6149 139.995 16.819 139.995 15.8672C139.995 14.7022 140.438 13.7911 141.324 13.1348C142.227 12.462 143.466 12.126 145.041 12.126ZM92.6475 12.126C93.9602 12.126 94.9862 12.503 95.7246 13.2578C96.4794 13.9962 96.8564 14.9812 96.8564 16.2119V24.9258H93.7305V16.8271C93.7304 16.089 93.5502 15.5477 93.1895 15.2031C92.8285 14.8422 92.3113 14.6612 91.6387 14.6611C91.0315 14.6611 90.4816 14.8011 89.9893 15.0801C89.497 15.359 89.111 15.753 88.832 16.2617C88.5533 16.7702 88.4141 17.3607 88.4141 18.0332V24.9258H85.2881V16.8271C85.288 16.089 85.0989 15.5477 84.7217 15.2031C84.3607 14.8421 83.8437 14.6612 83.1709 14.6611C82.5801 14.6611 82.0382 14.8011 81.5459 15.0801C81.0538 15.359 80.6596 15.7531 80.3643 16.2617C80.0855 16.7702 79.9463 17.3608 79.9463 18.0332V24.9258H76.8447V12.3721H79.8721V14.6855C80.2783 13.9838 80.8106 13.4088 81.4727 12.9629C82.2767 12.405 83.2118 12.126 84.2783 12.126C85.5581 12.126 86.5672 12.4951 87.3057 13.2334C87.7013 13.6202 87.9902 14.0689 88.1738 14.5781C88.5672 13.9248 89.0894 13.3859 89.7432 12.9629C90.58 12.405 91.5481 12.126 92.6475 12.126ZM24.9541 15.9863L9.93457 24.6572L12.4395 15.9863L9.93457 7.31543L24.9541 15.9863ZM68.4834 14.6123C67.4824 14.6123 66.6535 14.9653 65.9971 15.6709C65.3409 16.3765 65.0127 17.3446 65.0127 18.5752C65.0127 19.412 65.1607 20.1421 65.4561 20.7656C65.7678 21.3728 66.1779 21.8487 66.6865 22.1934C67.2116 22.5216 67.8106 22.6855 68.4834 22.6855C69.1398 22.6855 69.7307 22.5216 70.2559 22.1934C70.7809 21.8488 71.191 21.3727 71.4863 20.7656C71.7817 20.1421 71.9297 19.412 71.9297 18.5752C71.9297 17.3447 71.6015 16.3765 70.9453 15.6709C70.3053 14.9653 69.4844 14.6123 68.4834 14.6123ZM119.808 14.6855C118.79 14.6855 117.986 15.0387 117.396 15.7441C116.805 16.4334 116.509 17.4102 116.509 18.6738C116.509 19.9373 116.805 20.9134 117.396 21.6025C117.986 22.2917 118.798 22.6367 119.832 22.6367C120.849 22.6367 121.653 22.2918 122.244 21.6025C122.835 20.897 123.131 19.9128 123.131 18.6494C123.131 17.3858 122.827 16.409 122.22 15.7197C121.629 15.0305 120.825 14.6856 119.808 14.6855ZM105.753 14.6611C104.768 14.6611 103.972 15.0141 103.365 15.7197C102.758 16.409 102.454 17.3858 102.454 18.6494C102.454 19.9128 102.758 20.889 103.365 21.5781C103.972 22.2673 104.776 22.6123 105.777 22.6123C106.778 22.6123 107.574 22.2673 108.165 21.5781C108.756 20.8725 109.052 19.8876 109.052 18.624C109.052 17.3607 108.748 16.3845 108.141 15.6953C107.55 15.0061 106.754 14.6611 105.753 14.6611ZM13.9941 19.4707L20.0283 15.9873H15.001L13.9941 19.4707Z"></path>
                        </svg>
                        <h1 class="sr-only">Course overview</h1>
                        <p class="mt-7 max-w-lg text-base/7 text-pretty text-gray-600 dark:text-gray-400">A comprehensive journey that helps you navigate uncertainty and make choices aligned with your values and goals.</p>
                        <div class="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm/7 font-semibold text-gray-950 sm:gap-3 dark:text-white">
                           <div class="flex items-center gap-1.5">
                              <svg viewBox="0 0 16 16" fill="none" class="stroke-gray-950/40 dark:stroke-white/40 h-4 shrink-0">
                                 <path d="M13.5 12.5V.5H4.5M13.5 12.5l-.26.39c-.45.67-.45 1.48 0 2.15l.26.46H4c-.83 0-1.5-.67-1.5-1.5v0M13.5 12.5H4.5M2.5 14V2.5C2.5 1.4 3.4.5 4.5.5v0M2.5 14c0-.83.67-1.5 1.5-1.5h.5M4.5.5v12" stroke-linejoin="round"></path>
                              </svg>
                              4 modules
                           </div>
                           <span class="hidden text-gray-950/25 sm:inline dark:text-white/25">·</span>
                           <div class="flex items-center gap-1.5">
                              <svg viewBox="0 0 16 16" fill="none" class="stroke-gray-950/40 dark:stroke-white/40 h-4 shrink-0">
                                 <path d="M10.5 4.5H6.5c-.55 0-1 .45-1 1v6m4-7h3c.55 0 1 .45 1 1v9c0 .55-.45 1-1 1H6.5c-.55 0-1-.45-1-1v-3m4-7V1.5c0-.55-.45-1-1-1h-7c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h3"></path>
                              </svg>
                              20 lessons
                           </div>
                           <span class="hidden text-gray-950/25 sm:inline dark:text-white/25">·</span>
                           <div class="flex items-center gap-1.5">
                              <svg viewBox="0 0 16 16" fill="none" class="stroke-gray-950/40 dark:stroke-white/40 h-4 shrink-0">
                                 <circle cx="8" cy="8" r="7.5"></circle>
                                 <path d="M8 4V8H12"></path>
                              </svg>
                              3 hr 26 min
                           </div>
                        </div>
                        <div class="mt-10">
                           <Link to={`/Courses/${courseTitle}/Compass-full-course`}  class="inline-flex items-center gap-x-2 rounded-full bg-gray-950 px-3 py-0.5 text-sm/7 font-semibold text-white hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600" href="/landscape-of-choice">
                              <svg viewBox="0 0 8 8" fill="none" class="fill-white h-2 shrink-0">
                                 <path d="M7.25 3.567a.5.5 0 0 1 0 .866L2.75 7.031a.5.5 0 0 1-.75-.433V1.402a.5.5 0 0 1 .75-.433l4.5 2.598Z"></path>
                              </svg>
                              Start the course
                           </Link>
                        </div>
                     </div>
                     <div class="grid grid-cols-1 gap-y-16 pb-10 sm:px-4">
                        <section id="orientation" class="grid grid-cols-4 border-t border-gray-950/10 dark:border-white/10">
                           <div class="col-span-full sm:col-span-1">
                              <div class="-mt-px inline-flex border-t border-gray-950 pt-px dark:border-white">
                                 <div class="pt-4 text-sm/7 font-semibold text-gray-950 sm:pt-10 dark:text-white">Part 1</div>
                              </div>
                           </div>
                           <div class="col-span-full pt-6 sm:col-span-3 sm:pt-10">
                              <div class="max-w-2xl">
                                 <h2 class="text-2xl/7 font-medium tracking-tight text-pretty text-gray-950 dark:text-white">Orientation: Understanding Where You Are</h2>
                                 <p class="mt-4 text-base/7 text-gray-700 sm:text-sm/7 dark:text-gray-400">You need to know where you're starting from, before you can pretend to decide where you're going.</p>
                                 <ol class="mt-6 space-y-4">
                                    <li>
                                       <div class="flow-root">
                                          <a class="-mx-3 -my-2 flex gap-3 rounded-xl px-3 py-2 text-sm/7 hover:bg-gray-950/4 dark:hover:bg-white/5" href="/landscape-of-choice">
                                             <div class="flex h-lh shrink items-center">
                                                <svg viewBox="0 0 16 16" fill="none" class="fill-gray-950 stroke-gray-950/40 dark:fill-white dark:stroke-white/40 h-4 shrink-0">
                                                   <circle fill="none" cx="8" cy="8" r="7.5"></circle>
                                                   <path stroke="none" d="M10.25 7.56699C10.5833 7.75944 10.5833 8.24056 10.25 8.43301L7.25 10.1651C6.91667 10.3575 6.5 10.117 6.5 9.73205L6.5 6.26795C6.5 5.88305 6.91667 5.64249 7.25 5.83494L10.25 7.56699Z"></path>
                                                </svg>
                                             </div>
                                             <div>
                                                <div><span class="font-semibold text-gray-950 dark:text-white">The Landscape of Choice</span><span class="mx-2 hidden text-gray-950/25 sm:inline dark:text-white/25">·</span><span class="hidden text-gray-500 sm:inline">14:36</span></div>
                                                <p class="text-gray-700 dark:text-gray-400">A practical map for navigating the illusion that you actually have any agency at all.</p>
                                                <div class="text-gray-500 sm:hidden">14:36</div>
                                             </div>
                                          </a>
                                       </div>
                                    </li>
                                    <li>
                                       <div class="flow-root">
                                          <a class="-mx-3 -my-2 flex gap-3 rounded-xl px-3 py-2 text-sm/7 hover:bg-gray-950/4 dark:hover:bg-white/5" href="/paradox-of-agency">
                                             <div class="flex h-lh shrink items-center">
                                                <svg viewBox="0 0 16 16" fill="none" class="fill-gray-950 stroke-gray-950/40 dark:fill-white dark:stroke-white/40 h-4 shrink-0">
                                                   <circle fill="none" cx="8" cy="8" r="7.5"></circle>
                                                   <path stroke="none" d="M10.25 7.56699C10.5833 7.75944 10.5833 8.24056 10.25 8.43301L7.25 10.1651C6.91667 10.3575 6.5 10.117 6.5 9.73205L6.5 6.26795C6.5 5.88305 6.91667 5.64249 7.25 5.83494L10.25 7.56699Z"></path>
                                                </svg>
                                             </div>
                                             <div>
                                                <div><span class="font-semibold text-gray-950 dark:text-white">The Paradox of Agency</span></div>
                                                <p class="text-gray-700 dark:text-gray-400">Explore whether you're living your life or just reacting to everyone else's.</p>
                                             </div>
                                          </a>
                                       </div>
                                    </li>
                                    <li>
                                       <div class="flow-root">
                                          <a class="-mx-3 -my-2 flex gap-3 rounded-xl px-3 py-2 text-sm/7 hover:bg-gray-950/4 dark:hover:bg-white/5" href="/liberation-from-regret">
                                             <div class="flex h-lh shrink items-center">
                                                <svg viewBox="0 0 16 16" fill="none" class="fill-gray-950 stroke-gray-950/40 dark:fill-white dark:stroke-white/40 h-4 shrink-0">
                                                   <circle fill="none" cx="8" cy="8" r="7.5"></circle>
                                                   <path stroke="none" d="M10.25 7.56699C10.5833 7.75944 10.5833 8.24056 10.25 8.43301L7.25 10.1651C6.91667 10.3575 6.5 10.117 6.5 9.73205L6.5 6.26795C6.5 5.88305 6.91667 5.64249 7.25 5.83494L10.25 7.56699Z"></path>
                                                </svg>
                                             </div>
                                             <div>
                                                <div><span class="font-semibold text-gray-950 dark:text-white">Liberation from Regret</span><span class="mx-2 hidden text-gray-950/25 sm:inline dark:text-white/25">·</span><span class="hidden text-gray-500 sm:inline">15:47</span></div>
                                                <p class="text-gray-700 dark:text-gray-400">If no alternative choice was ever possible, regret becomes logically unnecessary.</p>
                                                <div class="text-gray-500 sm:hidden">15:47</div>
                                             </div>
                                          </a>
                                       </div>
                                    </li>
                                    <li>
                                       <div class="flow-root">
                                          <a class="-mx-3 -my-2 flex gap-3 rounded-xl px-3 py-2 text-sm/7 hover:bg-gray-950/4 dark:hover:bg-white/5" href="/recognizing-patterns">
                                             <div class="flex h-lh shrink items-center">
                                                <svg viewBox="0 0 16 16" fill="none" class="fill-gray-950 stroke-gray-950/40 dark:fill-white dark:stroke-white/40 h-4 shrink-0">
                                                   <circle fill="none" cx="8" cy="8" r="7.5"></circle>
                                                   <path stroke="none" d="M10.25 7.56699C10.5833 7.75944 10.5833 8.24056 10.25 8.43301L7.25 10.1651C6.91667 10.3575 6.5 10.117 6.5 9.73205L6.5 6.26795C6.5 5.88305 6.91667 5.64249 7.25 5.83494L10.25 7.56699Z"></path>
                                                </svg>
                                             </div>
                                             <div>
                                                <div><span class="font-semibold text-gray-950 dark:text-white">Recognizing Patterns</span></div>
                                                <p class="text-gray-700 dark:text-gray-400">Failures weren't freely chosen but were inevitable given your circumstances.</p>
                                             </div>
                                          </a>
                                       </div>
                                    </li>
                                    <li>
                                       <div class="flow-root">
                                          <a class="-mx-3 -my-2 flex gap-3 rounded-xl px-3 py-2 text-sm/7 hover:bg-gray-950/4 dark:hover:bg-white/5" href="/values-and-goals">
                                             <div class="flex h-lh shrink items-center">
                                                <svg viewBox="0 0 16 16" fill="none" class="fill-gray-950 stroke-gray-950/40 dark:fill-white dark:stroke-white/40 h-4 shrink-0">
                                                   <circle fill="none" cx="8" cy="8" r="7.5"></circle>
                                                   <path stroke="none" d="M10.25 7.56699C10.5833 7.75944 10.5833 8.24056 10.25 8.43301L7.25 10.1651C6.91667 10.3575 6.5 10.117 6.5 9.73205L6.5 6.26795C6.5 5.88305 6.91667 5.64249 7.25 5.83494L10.25 7.56699Z"></path>
                                                </svg>
                                             </div>
                                             <div>
                                                <div><span class="font-semibold text-gray-950 dark:text-white">Values and Goals</span><span class="mx-2 hidden text-gray-950/25 sm:inline dark:text-white/25">·</span><span class="hidden text-gray-500 sm:inline">22:08</span></div>
                                                <p class="text-gray-700 dark:text-gray-400">Identify patterns in your interests and abilities that reveal your predetermined direction.</p>
                                                <div class="text-gray-500 sm:hidden">22:08</div>
                                             </div>
                                          </a>
                                       </div>
                                    </li>
                                 </ol>
                              </div>
                           </div>
                        </section>
                        <section id="direction" class="grid grid-cols-4 border-t border-gray-950/10 dark:border-white/10">
                           <div class="col-span-full sm:col-span-1">
                              <div class="-mt-px inline-flex border-t border-gray-950 pt-px dark:border-white">
                                 <div class="pt-4 text-sm/7 font-semibold text-gray-950 sm:pt-10 dark:text-white">Part 2</div>
                              </div>
                           </div>
                           <div class="col-span-full pt-6 sm:col-span-3 sm:pt-10">
                              <div class="max-w-2xl">
                                 <h2 class="text-2xl/7 font-medium tracking-tight text-pretty text-gray-950 dark:text-white">Direction: Choosing a Path</h2>
                                 <p class="mt-4 text-base/7 text-gray-700 sm:text-sm/7 dark:text-gray-400">Experience the sensation of choice without the burden of true responsibility.</p>
                                 <ol class="mt-6 space-y-4">
                                    <li>
                                       <div class="flow-root">
                                          <a class="-mx-3 -my-2 flex gap-3 rounded-xl px-3 py-2 text-sm/7 hover:bg-gray-950/4 dark:hover:bg-white/5" href="/mapping-causal-factors">
                                             <div class="flex h-lh shrink items-center">
                                                <svg viewBox="0 0 16 16" fill="none" class="fill-gray-950 stroke-gray-950/40 dark:fill-white dark:stroke-white/40 h-4 shrink-0">
                                                   <circle fill="none" cx="8" cy="8" r="7.5"></circle>
                                                   <path stroke="none" d="M10.25 7.56699C10.5833 7.75944 10.5833 8.24056 10.25 8.43301L7.25 10.1651C6.91667 10.3575 6.5 10.117 6.5 9.73205L6.5 6.26795C6.5 5.88305 6.91667 5.64249 7.25 5.83494L10.25 7.56699Z"></path>
                                                </svg>
                                             </div>
                                             <div>
                                                <div><span class="font-semibold text-gray-950 dark:text-white">Mapping the Causal Factors</span><span class="mx-2 hidden text-gray-950/25 sm:inline dark:text-white/25">·</span><span class="hidden text-gray-500 sm:inline">14:52</span></div>
                                                <p class="text-gray-700 dark:text-gray-400">The causes acting on you can give you insight into where they might take you.</p>
                                                <div class="text-gray-500 sm:hidden">14:52</div>
                                             </div>
                                          </a>
                                       </div>
                                    </li>
                                    <li>
                                       <div class="flow-root">
                                          <a class="-mx-3 -my-2 flex gap-3 rounded-xl px-3 py-2 text-sm/7 hover:bg-gray-950/4 dark:hover:bg-white/5" href="/reframing-uncertainty">
                                             <div class="flex h-lh shrink items-center">
                                                <svg viewBox="0 0 16 16" fill="none" class="fill-gray-950 stroke-gray-950/40 dark:fill-white dark:stroke-white/40 h-4 shrink-0">
                                                   <circle fill="none" cx="8" cy="8" r="7.5"></circle>
                                                   <path stroke="none" d="M10.25 7.56699C10.5833 7.75944 10.5833 8.24056 10.25 8.43301L7.25 10.1651C6.91667 10.3575 6.5 10.117 6.5 9.73205L6.5 6.26795C6.5 5.88305 6.91667 5.64249 7.25 5.83494L10.25 7.56699Z"></path>
                                                </svg>
                                             </div>
                                             <div>
                                                <div><span class="font-semibold text-gray-950 dark:text-white">Reframing Uncertainty as Agency</span></div>
                                                <p class="text-gray-700 dark:text-gray-400">If you squint, not being able to predict the future looks sort of like free will.</p>
                                             </div>
                                          </a>
                                       </div>
                                    </li>
                                    <li>
                                       <div class="flow-root">
                                          <a class="-mx-3 -my-2 flex gap-3 rounded-xl px-3 py-2 text-sm/7 hover:bg-gray-950/4 dark:hover:bg-white/5" href="/decision-paralysis">
                                             <div class="flex h-lh shrink items-center">
                                                <svg viewBox="0 0 16 16" fill="none" class="fill-gray-950 stroke-gray-950/40 dark:fill-white dark:stroke-white/40 h-4 shrink-0">
                                                   <circle fill="none" cx="8" cy="8" r="7.5"></circle>
                                                   <path stroke="none" d="M10.25 7.56699C10.5833 7.75944 10.5833 8.24056 10.25 8.43301L7.25 10.1651C6.91667 10.3575 6.5 10.117 6.5 9.73205L6.5 6.26795C6.5 5.88305 6.91667 5.64249 7.25 5.83494L10.25 7.56699Z"></path>
                                                </svg>
                                             </div>
                                             <div>
                                                <div><span class="font-semibold text-gray-950 dark:text-white">Overcoming Decision Paralysis</span></div>
                                                <p class="text-gray-700 dark:text-gray-400">You can't be paralysed by choices you don't actually have.</p>
                                             </div>
                                          </a>
                                       </div>
                                    </li>
                                    <li>
                                       <div class="flow-root">
                                          <a class="-mx-3 -my-2 flex gap-3 rounded-xl px-3 py-2 text-sm/7 hover:bg-gray-950/4 dark:hover:bg-white/5" href="/path-of-least-resistance">
                                             <div class="flex h-lh shrink items-center">
                                                <svg viewBox="0 0 16 16" fill="none" class="fill-gray-950 stroke-gray-950/40 dark:fill-white dark:stroke-white/40 h-4 shrink-0">
                                                   <circle fill="none" cx="8" cy="8" r="7.5"></circle>
                                                   <path stroke="none" d="M10.25 7.56699C10.5833 7.75944 10.5833 8.24056 10.25 8.43301L7.25 10.1651C6.91667 10.3575 6.5 10.117 6.5 9.73205L6.5 6.26795C6.5 5.88305 6.91667 5.64249 7.25 5.83494L10.25 7.56699Z"></path>
                                                </svg>
                                             </div>
                                             <div>
                                                <div><span class="font-semibold text-gray-950 dark:text-white">Perceiving the Path of Least Resistance</span><span class="mx-2 hidden text-gray-950/25 sm:inline dark:text-white/25">·</span><span class="hidden text-gray-500 sm:inline">19:07</span></div>
                                                <p class="text-gray-700 dark:text-gray-400">Recognizing which direction requires the least psychological struggle.</p>
                                                <div class="text-gray-500 sm:hidden">19:07</div>
                                             </div>
                                          </a>
                                       </div>
                                    </li>
                                    <li>
                                       <div class="flow-root">
                                          <a class="-mx-3 -my-2 flex gap-3 rounded-xl px-3 py-2 text-sm/7 hover:bg-gray-950/4 dark:hover:bg-white/5" href="/surrendering-outcome">
                                             <div class="flex h-lh shrink items-center">
                                                <svg viewBox="0 0 16 16" fill="none" class="fill-gray-950 stroke-gray-950/40 dark:fill-white dark:stroke-white/40 h-4 shrink-0">
                                                   <circle fill="none" cx="8" cy="8" r="7.5"></circle>
                                                   <path stroke="none" d="M10.25 7.56699C10.5833 7.75944 10.5833 8.24056 10.25 8.43301L7.25 10.1651C6.91667 10.3575 6.5 10.117 6.5 9.73205L6.5 6.26795C6.5 5.88305 6.91667 5.64249 7.25 5.83494L10.25 7.56699Z"></path>
                                                </svg>
                                             </div>
                                             <div>
                                                <div><span class="font-semibold text-gray-950 dark:text-white">Surrendering to the Outcome</span><span class="mx-2 hidden text-gray-950/25 sm:inline dark:text-white/25">·</span><span class="hidden text-gray-500 sm:inline">23:43</span></div>
                                                <p class="text-gray-700 dark:text-gray-400">Accepting that whatever path you choose has no bearing on where you'll go.</p>
                                                <div class="text-gray-500 sm:hidden">23:43</div>
                                             </div>
                                          </a>
                                       </div>
                                    </li>
                                 </ol>
                              </div>
                           </div>
                        </section>
                        <section id="navigation" class="grid grid-cols-4 border-t border-gray-950/10 dark:border-white/10">
                           <div class="col-span-full sm:col-span-1">
                              <div class="-mt-px inline-flex border-t border-gray-950 pt-px dark:border-white">
                                 <div class="pt-4 text-sm/7 font-semibold text-gray-950 sm:pt-10 dark:text-white">Part 3</div>
                              </div>
                           </div>
                           <div class="col-span-full pt-6 sm:col-span-3 sm:pt-10">
                              <div class="max-w-2xl">
                                 <h2 class="text-2xl/7 font-medium tracking-tight text-pretty text-gray-950 dark:text-white">Navigation: Steering Through the Inevitable</h2>
                                 <p class="mt-4 text-base/7 text-gray-700 sm:text-sm/7 dark:text-gray-400">Techniques for aligning with your inevitable trajectory while avoiding nihilism.</p>
                                 <ol class="mt-6 space-y-4">
                                    <li>
                                       <div class="flow-root">
                                          <a class="-mx-3 -my-2 flex gap-3 rounded-xl px-3 py-2 text-sm/7 hover:bg-gray-950/4 dark:hover:bg-white/5" href="/widening-field-of-view">
                                             <div class="flex h-lh shrink items-center">
                                                <svg viewBox="0 0 16 16" fill="none" class="fill-gray-950 stroke-gray-950/40 dark:fill-white dark:stroke-white/40 h-4 shrink-0">
                                                   <circle fill="none" cx="8" cy="8" r="7.5"></circle>
                                                   <path stroke="none" d="M10.25 7.56699C10.5833 7.75944 10.5833 8.24056 10.25 8.43301L7.25 10.1651C6.91667 10.3575 6.5 10.117 6.5 9.73205L6.5 6.26795C6.5 5.88305 6.91667 5.64249 7.25 5.83494L10.25 7.56699Z"></path>
                                                </svg>
                                             </div>
                                             <div>
                                                <div><span class="font-semibold text-gray-950 dark:text-white">Widening Your Field of View</span><span class="mx-2 hidden text-gray-950/25 sm:inline dark:text-white/25">·</span><span class="hidden text-gray-500 sm:inline">15:34</span></div>
                                                <p class="text-gray-700 dark:text-gray-400">The universe can be cruel and it's important to see that coming.</p>
                                                <div class="text-gray-500 sm:hidden">15:34</div>
                                             </div>
                                          </a>
                                       </div>
                                    </li>
                                    <li>
                                       <div class="flow-root">
                                          <a class="-mx-3 -my-2 flex gap-3 rounded-xl px-3 py-2 text-sm/7 hover:bg-gray-950/4 dark:hover:bg-white/5" href="/dealing-with-coincidence">
                                             <div class="flex h-lh shrink items-center">
                                                <svg viewBox="0 0 16 16" fill="none" class="fill-gray-950 stroke-gray-950/40 dark:fill-white dark:stroke-white/40 h-4 shrink-0">
                                                   <circle fill="none" cx="8" cy="8" r="7.5"></circle>
                                                   <path stroke="none" d="M10.25 7.56699C10.5833 7.75944 10.5833 8.24056 10.25 8.43301L7.25 10.1651C6.91667 10.3575 6.5 10.117 6.5 9.73205L6.5 6.26795C6.5 5.88305 6.91667 5.64249 7.25 5.83494L10.25 7.56699Z"></path>
                                                </svg>
                                             </div>
                                             <div>
                                                <div><span class="font-semibold text-gray-950 dark:text-white">Dealing with Coincidence</span></div>
                                                <p class="text-gray-700 dark:text-gray-400">If something does go the way you intended, realize that this was purely coincidental.</p>
                                             </div>
                                          </a>
                                       </div>
                                    </li>
                                    <li>
                                       <div class="flow-root">
                                          <a class="-mx-3 -my-2 flex gap-3 rounded-xl px-3 py-2 text-sm/7 hover:bg-gray-950/4 dark:hover:bg-white/5" href="/forgiving-others">
                                             <div class="flex h-lh shrink items-center">
                                                <svg viewBox="0 0 16 16" fill="none" class="fill-gray-950 stroke-gray-950/40 dark:fill-white dark:stroke-white/40 h-4 shrink-0">
                                                   <circle fill="none" cx="8" cy="8" r="7.5"></circle>
                                                   <path stroke="none" d="M10.25 7.56699C10.5833 7.75944 10.5833 8.24056 10.25 8.43301L7.25 10.1651C6.91667 10.3575 6.5 10.117 6.5 9.73205L6.5 6.26795C6.5 5.88305 6.91667 5.64249 7.25 5.83494L10.25 7.56699Z"></path>
                                                </svg>
                                             </div>
                                             <div>
                                                <div><span class="font-semibold text-gray-950 dark:text-white">Forgiving Others</span></div>
                                                <p class="text-gray-700 dark:text-gray-400">When actions are beyond one's control, punishment is illogical.</p>
                                             </div>
                                          </a>
                                       </div>
                                    </li>
                                    <li>
                                       <div class="flow-root">
                                          <a class="-mx-3 -my-2 flex gap-3 rounded-xl px-3 py-2 text-sm/7 hover:bg-gray-950/4 dark:hover:bg-white/5" href="/anxiety-messages">
                                             <div class="flex h-lh shrink items-center">
                                                <svg viewBox="0 0 16 16" fill="none" class="fill-gray-950 stroke-gray-950/40 dark:fill-white dark:stroke-white/40 h-4 shrink-0">
                                                   <circle fill="none" cx="8" cy="8" r="7.5"></circle>
                                                   <path stroke="none" d="M10.25 7.56699C10.5833 7.75944 10.5833 8.24056 10.25 8.43301L7.25 10.1651C6.91667 10.3575 6.5 10.117 6.5 9.73205L6.5 6.26795C6.5 5.88305 6.91667 5.64249 7.25 5.83494L10.25 7.56699Z"></path>
                                                </svg>
                                             </div>
                                             <div>
                                                <div><span class="font-semibold text-gray-950 dark:text-white">What Anxiety Is Trying to Tell You</span></div>
                                                <p class="text-gray-700 dark:text-gray-400">A lack of control can make you anxious, but realize this has no bearing on outcomes.</p>
                                             </div>
                                          </a>
                                       </div>
                                    </li>
                                    <li>
                                       <div class="flow-root">
                                          <a class="-mx-3 -my-2 flex gap-3 rounded-xl px-3 py-2 text-sm/7 hover:bg-gray-950/4 dark:hover:bg-white/5" href="/maintaining-self">
                                             <div class="flex h-lh shrink items-center">
                                                <svg viewBox="0 0 16 16" fill="none" class="fill-gray-950 stroke-gray-950/40 dark:fill-white dark:stroke-white/40 h-4 shrink-0">
                                                   <circle fill="none" cx="8" cy="8" r="7.5"></circle>
                                                   <path stroke="none" d="M10.25 7.56699C10.5833 7.75944 10.5833 8.24056 10.25 8.43301L7.25 10.1651C6.91667 10.3575 6.5 10.117 6.5 9.73205L6.5 6.26795C6.5 5.88305 6.91667 5.64249 7.25 5.83494L10.25 7.56699Z"></path>
                                                </svg>
                                             </div>
                                             <div>
                                                <div><span class="font-semibold text-gray-950 dark:text-white">Maintaining a Sense of Self</span></div>
                                                <p class="text-gray-700 dark:text-gray-400">Who you think you are has been assigned to you by circumstance.</p>
                                             </div>
                                          </a>
                                       </div>
                                    </li>
                                 </ol>
                              </div>
                           </div>
                        </section>
                        <section id="destination" class="grid grid-cols-4 border-t border-gray-950/10 dark:border-white/10">
                           <div class="col-span-full sm:col-span-1">
                              <div class="-mt-px inline-flex border-t border-gray-950 pt-px dark:border-white">
                                 <div class="pt-4 text-sm/7 font-semibold text-gray-950 sm:pt-10 dark:text-white">Part 4</div>
                              </div>
                           </div>
                           <div class="col-span-full pt-6 sm:col-span-3 sm:pt-10">
                              <div class="max-w-2xl">
                                 <h2 class="text-2xl/7 font-medium tracking-tight text-pretty text-gray-950 dark:text-white">Destination: Arriving Where You Must</h2>
                                 <p class="mt-4 text-base/7 text-gray-700 sm:text-sm/7 dark:text-gray-400">How to be content with the inconsequential destiny you've been given.</p>
                                 <ol class="mt-6 space-y-4">
                                    <li>
                                       <div class="flow-root">
                                          <a class="-mx-3 -my-2 flex gap-3 rounded-xl px-3 py-2 text-sm/7 hover:bg-gray-950/4 dark:hover:bg-white/5" href="/reframing-achievement">
                                             <div class="flex h-lh shrink items-center">
                                                <svg viewBox="0 0 16 16" fill="none" class="fill-gray-950 stroke-gray-950/40 dark:fill-white dark:stroke-white/40 h-4 shrink-0">
                                                   <circle fill="none" cx="8" cy="8" r="7.5"></circle>
                                                   <path stroke="none" d="M10.25 7.56699C10.5833 7.75944 10.5833 8.24056 10.25 8.43301L7.25 10.1651C6.91667 10.3575 6.5 10.117 6.5 9.73205L6.5 6.26795C6.5 5.88305 6.91667 5.64249 7.25 5.83494L10.25 7.56699Z"></path>
                                                </svg>
                                             </div>
                                             <div>
                                                <div><span class="font-semibold text-gray-950 dark:text-white">Reframing Achievement and Failure</span></div>
                                                <p class="text-gray-700 dark:text-gray-400">Pride and regret are just psychological coping mechanisms.</p>
                                             </div>
                                          </a>
                                       </div>
                                    </li>
                                    <li>
                                       <div class="flow-root">
                                          <a class="-mx-3 -my-2 flex gap-3 rounded-xl px-3 py-2 text-sm/7 hover:bg-gray-950/4 dark:hover:bg-white/5" href="/surrendering-to-success">
                                             <div class="flex h-lh shrink items-center">
                                                <svg viewBox="0 0 16 16" fill="none" class="fill-gray-950 stroke-gray-950/40 dark:fill-white dark:stroke-white/40 h-4 shrink-0">
                                                   <circle fill="none" cx="8" cy="8" r="7.5"></circle>
                                                   <path stroke="none" d="M10.25 7.56699C10.5833 7.75944 10.5833 8.24056 10.25 8.43301L7.25 10.1651C6.91667 10.3575 6.5 10.117 6.5 9.73205L6.5 6.26795C6.5 5.88305 6.91667 5.64249 7.25 5.83494L10.25 7.56699Z"></path>
                                                </svg>
                                             </div>
                                             <div>
                                                <div><span class="font-semibold text-gray-950 dark:text-white">Surrendering to Success</span><span class="mx-2 hidden text-gray-950/25 sm:inline dark:text-white/25">·</span><span class="hidden text-gray-500 sm:inline">20:47</span></div>
                                                <p class="text-gray-700 dark:text-gray-400">Achievements reveal capabilities that were always present rather than self development.</p>
                                                <div class="text-gray-500 sm:hidden">20:47</div>
                                             </div>
                                          </a>
                                       </div>
                                    </li>
                                    <li>
                                       <div class="flow-root">
                                          <a class="-mx-3 -my-2 flex gap-3 rounded-xl px-3 py-2 text-sm/7 hover:bg-gray-950/4 dark:hover:bg-white/5" href="/giving-credit">
                                             <div class="flex h-lh shrink items-center">
                                                <svg viewBox="0 0 16 16" fill="none" class="fill-gray-950 stroke-gray-950/40 dark:fill-white dark:stroke-white/40 h-4 shrink-0">
                                                   <circle fill="none" cx="8" cy="8" r="7.5"></circle>
                                                   <path stroke="none" d="M10.25 7.56699C10.5833 7.75944 10.5833 8.24056 10.25 8.43301L7.25 10.1651C6.91667 10.3575 6.5 10.117 6.5 9.73205L6.5 6.26795C6.5 5.88305 6.91667 5.64249 7.25 5.83494L10.25 7.56699Z"></path>
                                                </svg>
                                             </div>
                                             <div>
                                                <div><span class="font-semibold text-gray-950 dark:text-white">Giving Credit Where it's Due</span><span class="mx-2 hidden text-gray-950/25 sm:inline dark:text-white/25">·</span><span class="hidden text-gray-500 sm:inline">16:07</span></div>
                                                <p class="text-gray-700 dark:text-gray-400">Recognize the broader system that produced your achievement.</p>
                                                <div class="text-gray-500 sm:hidden">16:07</div>
                                             </div>
                                          </a>
                                       </div>
                                    </li>
                                    <li>
                                       <div class="flow-root">
                                          <a class="-mx-3 -my-2 flex gap-3 rounded-xl px-3 py-2 text-sm/7 hover:bg-gray-950/4 dark:hover:bg-white/5" href="/unburden-accountability">
                                             <div class="flex h-lh shrink items-center">
                                                <svg viewBox="0 0 16 16" fill="none" class="fill-gray-950 stroke-gray-950/40 dark:fill-white dark:stroke-white/40 h-4 shrink-0">
                                                   <circle fill="none" cx="8" cy="8" r="7.5"></circle>
                                                   <path stroke="none" d="M10.25 7.56699C10.5833 7.75944 10.5833 8.24056 10.25 8.43301L7.25 10.1651C6.91667 10.3575 6.5 10.117 6.5 9.73205L6.5 6.26795C6.5 5.88305 6.91667 5.64249 7.25 5.83494L10.25 7.56699Z"></path>
                                                </svg>
                                             </div>
                                             <div>
                                                <div><span class="font-semibold text-gray-950 dark:text-white">Unburden Yourself from Accountability</span><span class="mx-2 hidden text-gray-950/25 sm:inline dark:text-white/25">·</span><span class="hidden text-gray-500 sm:inline">18:43</span></div>
                                                <p class="text-gray-700 dark:text-gray-400">When things haven't gone your way, it literally couldn't have been your fault.</p>
                                                <div class="text-gray-500 sm:hidden">18:43</div>
                                             </div>
                                          </a>
                                       </div>
                                    </li>
                                    <li>
                                       <div class="flow-root">
                                          <a class="-mx-3 -my-2 flex gap-3 rounded-xl px-3 py-2 text-sm/7 hover:bg-gray-950/4 dark:hover:bg-white/5" href="/writing-autobiography">
                                             <div class="flex h-lh shrink items-center">
                                                <svg viewBox="0 0 16 16" fill="none" class="fill-gray-950 stroke-gray-950/40 dark:fill-white dark:stroke-white/40 h-4 shrink-0">
                                                   <circle fill="none" cx="8" cy="8" r="7.5"></circle>
                                                   <path stroke="none" d="M10.25 7.56699C10.5833 7.75944 10.5833 8.24056 10.25 8.43301L7.25 10.1651C6.91667 10.3575 6.5 10.117 6.5 9.73205L6.5 6.26795C6.5 5.88305 6.91667 5.64249 7.25 5.83494L10.25 7.56699Z"></path>
                                                </svg>
                                             </div>
                                             <div>
                                                <div><span class="font-semibold text-gray-950 dark:text-white">Exercise: Writing your autobiography</span><span class="mx-2 hidden text-gray-950/25 sm:inline dark:text-white/25">·</span><span class="hidden text-gray-500 sm:inline">24:46</span></div>
                                                <p class="text-gray-700 dark:text-gray-400">A way to come to grips with your inconsequence.</p>
                                                <div class="text-gray-500 sm:hidden">24:46</div>
                                             </div>
                                          </a>
                                       </div>
                                    </li>
                                 </ol>
                              </div>
                           </div>
                        </section>
                     </div>
                  </div>
               </div>
            </div>
         </main>
      </div>
   </div>
</div>
    )
}

export default Videoplayer