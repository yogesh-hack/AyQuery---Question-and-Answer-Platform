import React from 'react'
import Header from '../../components/LandingMain/Header'
import Footer from '../../components/LandingMain/Footer'
import { Link } from 'react-router-dom'

function Landingpage() {
    return (
        <div class="dark:bg-dark">
            <Header />
            <main>
                <section class="pt-16 relative overflow-hidden">
                    <div class="wrapper">
                        <div class="max-w-[800px] mx-auto">
                            <div class="text-center pb-16">
                                <div class="rounded-full mb-6 h-10 border border-purple-800 shadow-xl inline-flex items-center">
                                    <div class="bg-white dark:bg-dark py-2 text-sm items-center gap-2 px-5 inline-flex dark:text-white/90 rounded-full z-10 relative">
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.1699 0.58575C14.9429 -0.19525 13.7499 -0.19525 13.5229 0.58575L13.2029 1.69275C12.5109 4.07875 11.5669 5.94175 8.99994 6.58375L7.80794 6.88175C7.63097 6.91697 7.47168 7.01246 7.35721 7.15195C7.24274 7.29144 7.18018 7.4663 7.18018 7.64675C7.18018 7.8272 7.24274 8.00206 7.35721 8.14155C7.47168 8.28104 7.63097 8.37653 7.80794 8.41175L8.99994 8.70975C11.5669 9.35275 12.5109 11.2157 13.2029 13.6007L13.5229 14.7078C13.7499 15.4897 14.9429 15.4897 15.1699 14.7078L15.4899 13.6007C16.1819 11.2157 17.1269 9.35275 19.6939 8.71075L20.8839 8.41175C21.0609 8.37653 21.2202 8.28104 21.3347 8.14155C21.4491 8.00206 21.5117 7.8272 21.5117 7.64675C21.5117 7.4663 21.4491 7.29144 21.3347 7.15195C21.2202 7.01246 21.0609 6.91697 20.8839 6.88175L19.6939 6.58375C17.1269 5.94175 16.1819 4.07875 15.4899 1.69375L15.1699 0.58575Z" fill="url(#paint0_linear_9274_1469)"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.28304 11.8368C5.14704 11.3488 4.43104 11.3488 4.29604 11.8368L4.10304 12.5288C3.68805 14.0188 3.12205 15.1838 1.58104 15.5858L0.867045 15.7718C0.759268 15.7971 0.663206 15.8581 0.594451 15.9448C0.525695 16.0316 0.488281 16.1391 0.488281 16.2498C0.488281 16.3605 0.525695 16.4679 0.594451 16.5547C0.663206 16.6415 0.759268 16.7025 0.867045 16.7278L1.58104 16.9148C3.12104 17.3158 3.68805 18.4808 4.10304 19.9708L4.29604 20.6628C4.43104 21.1518 5.14704 21.1518 5.28304 20.6628L5.47605 19.9708C5.89005 18.4808 6.45805 17.3158 7.99804 16.9148L8.71204 16.7278C8.81982 16.7025 8.91588 16.6415 8.98464 16.5547C9.05339 16.4679 9.09081 16.3605 9.09081 16.2498C9.09081 16.1391 9.05339 16.0316 8.98464 15.9448C8.91588 15.8581 8.81982 15.7971 8.71204 15.7718L7.99804 15.5858C6.45805 15.1848 5.89005 14.0198 5.47605 12.5288L5.28304 11.8368Z" fill="url(#paint1_linear_9274_1469)"></path>
                                            <defs>
                                                <linearGradient id="paint0_linear_9274_1469" x1="7.18018" y1="0" x2="21.5117" y2="15.2943" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#FF58D5"></stop>
                                                    <stop offset="1" stop-color="#FFA0E7"></stop>
                                                </linearGradient>
                                                <linearGradient id="paint1_linear_9274_1469" x1="9.09081" y1="11.4708" x2="0.488281" y2="21.0295" gradientUnits="userSpaceOnUse">
                                                    <stop stop-color="#7A5AF8"></stop>
                                                    <stop offset="1" stop-color="#B5A2FF"></stop>
                                                </linearGradient>
                                            </defs>
                                        </svg>
                                        <p className='text-dark'>AI-Powered Collaboration Platform for Creators & Developers</p>
                                    </div>
                                </div>
                                <h1 class="text-gray-700 mx-auto font-bold mb-4 text-4xl sm:text-[50px] dark:text-white/90 sm:leading-[64px] max-w-[700px]">
                                    Transform Ideas into Reality with Ayquery
                                </h1>
                                <p class="max-w-[637px] text-center mx-auto dark:text-gray-400 text-gray-500 text-base">
                                    Unleash your creativity in our all-in-one platform where creators, developers, and innovators collaborate to build, share, and monetize digital content. From AI-assisted writing to code playgrounds and professional assessments, Ayquery empowers you to work smarter and earn from your expertise.
                                </p>
                                <div class="mt-9 flex sm:flex-row flex-col gap-3 relative z-30 items-center justify-center">
                                    <a href="text-generator.html" class="bg-blue-500 transition h-12 inline-flex items-center justify-center hover:bg-primary-600 px-6 py-3 rounded-full text-white text-sm">View Tools</a>
                                    <a href="https://www.youtube.com/watch?v=_iHmNaQBtKk" class="rounded-full video-popup flex h-12 gap-3 items-center text-sm border bg-white dark:bg-white/10 dark:border-white/[0.05] dark:text-white border-gray-100 p-1.5 pr-6">
                                        <span class="p-2 rounded-full bg-blue-500 inline-flex items-center justify-center text-sm font-medium">
                                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M3.5 3.71077L3.5 12.3482C3.5 13.5211 4.78545 14.2402 5.78489 13.6265L12.8183 9.30776C13.7717 8.7223 13.7717 7.33672 12.8183 6.75125L5.7849 2.43251C4.78545 1.81882 3.5 2.53795 3.5 3.71077Z" fill="white"></path>
                                            </svg>
                                        </span>
                                        Watch Intro
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="max-w-[1000px] mx-auto relative">
                            <div class="p-3 sm:p-[18px] relative z-30 rounded-[32px] border border-white/30 dark:border-white/10 bg-white/20">
                                <img src="./assets/images/hero/hero-img.jpg" alt="" class="w-full rounded-2xl block dark:hidden" />
                                <img src="./assets/images/hero/hero-img-dark.png" alt="" class="w-full rounded-2xl hidden dark:block" />
                            </div>
                            <div class="absolute hidden lg:block z-10 -top-20 -translate-y-20 left-1/2 -translate-x-1/2">
                                <svg width="1300" height="1001" viewBox="0 0 1300 1001" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.7" filter="url(#filter0_f_9279_7148)">
                                        <circle cx="800" cy="500.03" r="300" fill="#4E6EFF"></circle>
                                    </g>
                                    <g opacity="0.3" filter="url(#filter1_f_9279_7148)">
                                        <circle cx="500" cy="500.03" r="300" fill="#FF58D5"></circle>
                                    </g>
                                    <defs>
                                        <filter id="filter0_f_9279_7148" x="300" y="0.029541" width="1000" height="1000" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                                            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_9279_7148"></feGaussianBlur>
                                        </filter>
                                        <filter id="filter1_f_9279_7148" x="0" y="0.029541" width="1000" height="1000" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                                            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_9279_7148"></feGaussianBlur>
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="hero-glow-bg w-full h-[670px] absolute z-10 bottom-0"></div>
                    <div class="wrapper">
                        <div class="max-w-[1016px] relative z-30 mx-auto pt-14 pb-16">
                            <p class="text-center text-white/50 text-lg font-medium">
                                Trusted by worlds largest companies including...
                            </p>
                            <div class="flex flex-wrap justify-center items-center gap-7 md:gap-14 mt-10">
                                <img src="https://ai-agent.preview.uideck.com/assets/images/brands/br-1.svg" class="opacity-50 transition hover:opacity-100" alt="" />
                            </div>
                        </div>
                    </div>
                    <div class="hidden lg:block">
                        <img src="./assets/images/hero/shape-left-1.svg" class="absolute top-14 left-16 floating-1" alt="" />
                        <img src="./assets/images/hero/shape-left-2.svg" class="absolute left-[145px] top-[298px] floating-2" alt="" />
                        <img src="./assets/images/hero/shape-right-1.svg" class="absolute right-16 top-[108px] floating-3" alt="" />
                        <img src="./assets/images/hero/shape-right-2.svg" class="absolute top-[316px] right-[298px] floating-4" alt="" />
                    </div>
                </section>
                <section class="py-28 bg-gray-50 dark:bg-white/[0.01]">
                    <div class="wrapper">
                        <div class="max-w-2xl mx-auto mb-12 text-center">
                            <h2 class="mb-3 font-bold text-center text-gray-800 text-3xl dark:text-white/90 md:text-title-lg">
                                Core Features
                            </h2>
                            <p class="max-w-xl mx-auto leading-6 text-gray-500 dark:text-gray-400">
                                All-in-one ecosystem for knowledge sharing, creativity, productivity, collaboration, and entertainment. Whether you're a developer, student, content creator, or job seeker — AyQuery brings everything under one roof.
                            </p>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
                            <div class="core-feature-wrapper bg-white p-9 border border-gray-200 dark:border-white/[0.03] dark:bg-white/[0.05]">
                                <div class="core-feature-icon mb-9">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <path d="M25.902 5.41671H9.16675C7.09568 5.41671 5.41675 7.09564 5.41675 9.16671V30.8334C5.41675 32.9044 7.09568 34.5834 9.16675 34.5834H30.8334C32.9045 34.5834 34.5834 32.9044 34.5834 30.8334V14.0971L28.9827 19.6978C27.9748 20.7057 26.6527 21.3388 25.2356 21.4922L22.3241 21.8072C21.1953 21.9293 20.0719 21.5335 19.269 20.7306C18.4662 19.9277 18.0703 18.8044 18.1924 17.6755L18.5075 14.764C18.6608 13.3469 19.2939 12.0248 20.3018 11.0169L25.902 5.41671Z" fill="white"></path>
                                        <path d="M34.7914 4.18764C33.6524 3.04861 31.8056 3.04862 30.6666 4.18765L29.524 5.33025L34.6694 10.4756L35.812 9.33301C36.951 8.19399 36.951 6.34725 35.812 5.20822L34.7914 4.18764Z" fill="white"></path>
                                        <path d="M32.9016 12.2434L27.7562 7.09801L22.0695 12.7847C21.4648 13.3894 21.085 14.1827 20.993 15.0329L20.6779 17.9445C20.6372 18.3208 20.7692 18.6952 21.0368 18.9628C21.3044 19.2305 21.6789 19.3624 22.0551 19.3217L24.9667 19.0067C25.8169 18.9147 26.6102 18.5348 27.2149 17.9301L32.9016 12.2434Z" fill="white"></path>
                                    </svg>
                                </div>
                                <h3 class="mb-4 text-gray-800 dark:text-white/90 font-bold text-xl md:text-2xl max-w-[312px]">
                                    Universal Q&A Hub
                                </h3>
                                <p class="text-gray-500 max-w-[312px] dark:text-gray-400">
                                    Ask and answer questions across tech, design, marketing, writing, and more.
                                </p>
                            </div>
                            <div class="core-feature-wrapper bg-white p-9 border border-gray-200 dark:border-white/[0.03] dark:bg-white/[0.05]">
                                <div class="core-feature-icon mb-9">
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.2711 30.0755C14.1949 28.19 12.9483 26.4182 11.2671 24.7764C8.94449 22.508 7.50024 19.3382 7.50024 15.8332C7.50024 8.92972 13.0966 3.33337 20.0001 3.33337C26.9034 3.33337 32.4997 8.92972 32.4997 15.8332C32.4997 19.3379 31.0557 22.5077 28.7334 24.7759C26.9982 26.4707 25.7261 28.3037 25.7261 30.2574V32.9167C25.7261 34.9877 24.0472 36.6667 21.9761 36.6667H18.0211C15.9501 36.6667 14.2711 34.9877 14.2711 32.9167V30.0755ZM10.0002 15.8332C10.0002 10.3104 14.4773 5.83337 20.0001 5.83337C25.5227 5.83337 29.9997 10.3104 29.9997 15.8332C29.9997 18.6374 28.8472 21.1702 26.9866 22.9875C25.7512 24.194 24.4672 25.7095 23.7651 27.5H16.2356C15.5333 25.7097 14.2491 24.1942 13.0139 22.9879C11.153 21.1705 10.0002 18.6375 10.0002 15.8332ZM16.7711 30.3549C16.7736 30.323 16.7747 30.2907 16.7747 30.2582C16.7747 30.1814 16.7736 30.105 16.7711 30.0292V30H23.2261V32.9167C23.2261 33.607 22.6666 34.1667 21.9761 34.1667H18.0211C17.3307 34.1667 16.7711 33.607 16.7711 32.9167V30.3549Z" fill="white"></path>
                                        <path d="M10.0002 15.8332C10.0002 10.3104 14.4773 5.83337 20.0001 5.83337C25.5227 5.83337 29.9997 10.3104 29.9997 15.8332C29.9997 18.6374 28.8472 21.1702 26.9866 22.9875C25.7512 24.194 24.4672 25.7095 23.7651 27.5H16.2356C15.5333 25.7097 14.2491 24.1942 13.0139 22.9879C11.153 21.1705 10.0002 18.6375 10.0002 15.8332Z" fill="white"></path>
                                        <path d="M2.08325 15.8334C2.08325 15.143 2.6429 14.5834 3.33325 14.5834H4.99992C5.69027 14.5834 6.24992 15.143 6.24992 15.8334C6.24992 16.5237 5.69027 17.0834 4.99992 17.0834H3.33325C2.6429 17.0834 2.08325 16.5237 2.08325 15.8334Z" fill="white"></path>
                                        <path d="M6.19137 6.41744C5.5935 6.07225 4.82902 6.2771 4.48383 6.87497C4.13867 7.47283 4.3435 8.23732 4.94137 8.5825L6.38475 9.41583C6.98262 9.76102 7.7471 9.55617 8.09228 8.9583C8.43745 8.36043 8.23262 7.59595 7.63475 7.25077L6.19137 6.41744Z" fill="white"></path>
                                        <path d="M4.48383 24.7916C4.13867 24.1938 4.3435 23.4293 4.94137 23.0841L6.38475 22.2508C6.98262 21.9056 7.7471 22.1105 8.09228 22.7083C8.43745 23.3061 8.23262 24.0706 7.63475 24.4158L6.19137 25.2491C5.5935 25.5943 4.82902 25.3895 4.48383 24.7916Z" fill="white"></path>
                                        <path d="M35.0002 14.5834C34.3099 14.5834 33.7502 15.143 33.7502 15.8334C33.7502 16.5237 34.3099 17.0834 35.0002 17.0834H36.6669C37.3572 17.0834 37.9169 16.5237 37.9169 15.8334C37.9169 15.143 37.3572 14.5834 36.6669 14.5834H35.0002Z" fill="white"></path>
                                        <path d="M31.9091 22.7083C32.2543 22.1105 33.0188 21.9056 33.6166 22.2508L35.06 23.0841C35.658 23.4293 35.8628 24.1938 35.5176 24.7916C35.1725 25.3895 34.408 25.5943 33.81 25.2491L32.3666 24.4158C31.7688 24.0706 31.564 23.3061 31.9091 22.7083Z" fill="white"></path>
                                        <path d="M32.3666 7.25077C31.7688 7.59595 31.564 8.36043 31.9091 8.9583C32.2543 9.55617 33.0188 9.76102 33.6166 9.41583L35.06 8.5825C35.658 8.23732 35.8628 7.47283 35.5176 6.87497C35.1725 6.2771 34.408 6.07225 33.81 6.41744L32.3666 7.25077Z" fill="white"></path>
                                    </svg>
                                </div>
                                <h3 class="mb-4 text-gray-800 dark:text-white/90 font-bold text-xl md:text-2xl max-w-[312px]">
                                    Multi-Media Integration
                                </h3>
                                <p class="text-gray-500 max-w-[312px] dark:text-gray-400">
                                    Embed tweets, videos, images, and live code directly into your posts or projects.
                                </p>
                            </div>
                            <div class="core-feature-wrapper bg-white p-9 border border-gray-200 dark:border-white/[0.03] dark:bg-white/[0.05]">
                                <div class="core-feature-icon mb-9">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2499 4.58337C21.2499 3.89302 20.6903 3.33337 19.9999 3.33337C19.3096 3.33337 18.7499 3.89302 18.7499 4.58337V7.50004H9.58325C7.51219 7.50004 5.83325 9.17897 5.83325 11.25V15.4167H5.41658C4.26599 15.4167 3.33325 16.3494 3.33325 17.5V22.5C3.33325 23.6507 4.26599 24.5834 5.41658 24.5834H5.83325V28.75C5.83325 30.821 7.51219 32.5 9.58325 32.5H30.4166C32.4876 32.5 34.1666 30.821 34.1666 28.75V24.5834H34.5833C35.7339 24.5834 36.6666 23.6507 36.6666 22.5V17.5C36.6666 16.3494 35.7339 15.4167 34.5833 15.4167H34.1666V11.25C34.1666 9.17897 32.4876 7.50004 30.4166 7.50004H21.2499V4.58337ZM15.8409 14.375C16.9915 14.375 17.9242 15.3077 17.9242 16.4583C17.9242 17.609 16.9915 18.5418 15.8409 18.5418C14.6903 18.5418 13.7576 17.609 13.7576 16.4583C13.7576 15.3077 14.6903 14.375 15.8409 14.375ZM26.2426 16.4583C26.2426 15.3077 25.3098 14.375 24.1593 14.375C23.0086 14.375 22.0759 15.3077 22.0759 16.4583C22.0759 17.609 23.0086 18.5418 24.1593 18.5418C25.3098 18.5418 26.2426 17.609 26.2426 16.4583ZM16.6824 22.0097C16.2523 21.4697 15.4659 21.3803 14.9258 21.8103C14.3857 22.2403 14.2965 23.0268 14.7265 23.5668C15.9589 25.1148 17.8635 26.1107 20 26.1107C22.1365 26.1107 24.0414 25.1148 25.2737 23.5668C25.7037 23.0268 25.6145 22.2403 25.0744 21.8103C24.5344 21.3803 23.7479 21.4697 23.3179 22.0097C22.5394 22.9875 21.3429 23.6107 20 23.6107C18.6572 23.6107 17.4607 22.9875 16.6824 22.0097Z" fill="white"></path>
                                    </svg>
                                </div>
                                <h3 class="mb-4 text-gray-800 dark:text-white/90 font-bold text-xl md:text-2xl max-w-[312px]">
                                    Collaborative Books & Stories   
                                </h3>
                                <p class="text-gray-500 max-w-[312px] dark:text-gray-400">
                                   Write, edit, and publish collaborative books, articles, and interactive stories with your team or community.
                                </p>
                            </div>
                            <div class="core-feature-wrapper bg-white p-9 border border-gray-200 dark:border-white/[0.03] dark:bg-white/[0.05]">
                                <div class="core-feature-icon mb-9">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.33329 20C3.33329 10.7953 10.7952 3.33337 19.9999 3.33337C29.2048 3.33337 36.6666 10.7953 36.6666 20C36.6666 29.2047 29.2048 36.6667 19.9999 36.6667H4.58329C4.07772 36.6667 3.62192 36.3622 3.42844 35.895C3.23497 35.428 3.3419 34.8904 3.6994 34.5329L7.36397 30.8682C4.85285 27.951 3.33329 24.152 3.33329 20ZM15.8409 13.125C16.9915 13.125 17.9242 14.0577 17.9242 15.2083C17.9242 16.3589 16.9915 17.2918 15.8409 17.2918C14.6903 17.2918 13.7576 16.3589 13.7576 15.2083C13.7576 14.0577 14.6903 13.125 15.8409 13.125ZM26.2426 15.2083C26.2426 14.0577 25.3099 13.125 24.1593 13.125C23.0086 13.125 22.0759 14.0577 22.0759 15.2083C22.0759 16.3589 23.0086 17.2918 24.1593 17.2918C25.3099 17.2918 26.2426 16.3589 26.2426 15.2083ZM16.6823 20.7597C16.2523 20.2197 15.4659 20.1303 14.9258 20.5603C14.3857 20.9903 14.2965 21.7768 14.7265 22.3168C15.9589 23.8648 17.8635 24.8607 20.0002 24.8607C22.1367 24.8607 24.0413 23.8648 25.2737 22.3168C25.7037 21.7768 25.6145 20.9903 25.0743 20.5603C24.5343 20.1303 23.7478 20.2197 23.3178 20.7597C22.5393 21.7375 21.343 22.3607 20.0002 22.3607C18.6573 22.3607 17.4608 21.7375 16.6823 20.7597Z" fill="white"></path>
                                    </svg>
                                </div>
                                <h3 class="mb-4 text-gray-800 dark:text-white/90 font-bold text-xl md:text-2xl max-w-[312px]">
                                    Live Streaming & Entertainment
                                </h3>
                                <p class="text-gray-500 max-w-[312px] dark:text-gray-400">
                                   Stream games, share movie nights, or enjoy TV shows — all inside AyQuery.
                                </p>
                            </div>
                            <div class="core-feature-wrapper bg-white p-9 border border-gray-200 dark:border-white/[0.03] dark:bg-white/[0.05]">
                                <div class="core-feature-icon mb-9">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9999 6.25C20.3604 6.25 20.7034 6.40565 20.9408 6.67702L27.8526 14.5787L34.6249 9.03498C35.0193 8.71218 35.5699 8.66108 36.0169 8.90583C36.4639 9.15058 36.7176 9.64218 36.6581 10.1483L34.4178 29.1882C34.1956 31.0767 32.5951 32.5 30.6936 32.5H9.30638C7.40483 32.5 5.80427 31.0767 5.58207 29.1882L3.34185 10.1483C3.2823 9.64218 3.53595 9.15058 3.98293 8.90583C4.42992 8.66108 4.98073 8.71218 5.37507 9.03498L12.1473 14.5787L19.0591 6.67702C19.2964 6.40565 19.6394 6.25 19.9999 6.25ZM19.9999 9.39857L13.2325 17.1352C12.7884 17.6428 12.0217 17.7067 11.4998 17.2795L6.18638 12.9299L7.4363 23.5532H32.5636L33.8136 12.9299L28.5001 17.2795C27.9783 17.7067 27.2114 17.6428 26.7674 17.1352L19.9999 9.39857ZM32.2694 26.0532H7.73045L8.06495 28.896C8.13902 29.5255 8.67253 30 9.30638 30H30.6936C31.3274 30 31.8609 29.5255 31.9349 28.896L32.2694 26.0532Z" fill="white"></path>
                                        <path d="M19.9999 9.39857L13.2325 17.1352C12.7884 17.6428 12.0217 17.7067 11.4998 17.2795L6.18638 12.9299L7.4363 23.5532H32.5636L33.8136 12.9299L28.5001 17.2795C27.9783 17.7067 27.2114 17.6428 26.7674 17.1352L19.9999 9.39857Z" fill="white"></path>
                                    </svg>
                                </div>
                                <h3 class="mb-4 text-gray-800 dark:text-white/90 font-bold text-xl md:text-2xl max-w-[312px]">
                                    Real Company Assessment Hirring Tests
                                </h3>
                                <p class="text-gray-500 max-w-[312px] dark:text-gray-400">
                                    Practice coding and aptitude tests modeled after actual companies' hiring processes.
                                </p>
                            </div>
                            <div class="core-feature-wrapper bg-white p-9 border border-gray-200 dark:border-white/[0.03] dark:bg-white/[0.05]">
                                <div class="core-feature-icon mb-9">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.7373 3.39262C22.2553 3.55808 22.6069 4.03952 22.6069 4.58333V15.358H32.0248C32.4926 15.358 32.9212 15.6193 33.1357 16.0351C33.3501 16.4508 33.3144 16.9514 33.0433 17.3328L19.6618 36.1412C19.3466 36.5844 18.7809 36.7729 18.2629 36.6074C17.7449 36.4419 17.3933 35.9604 17.3933 35.4167V24.6419H7.97535C7.50754 24.6419 7.07889 24.3807 6.86444 23.9649C6.64997 23.5492 6.68562 23.0486 6.95682 22.6674L20.3383 3.8587C20.6536 3.41558 21.2191 3.22713 21.7373 3.39262ZM10.3987 22.1419H18.6433C18.9748 22.1419 19.2928 22.2738 19.5271 22.5081C19.7616 22.7426 19.8933 23.0604 19.8933 23.3919V31.5034L29.6014 17.8581H21.3569C20.6664 17.8581 20.1069 17.2984 20.1069 16.6081V8.49655L10.3987 22.1419Z" fill="white"></path>
                                        <path d="M10.3987 22.1419H18.6433C18.9748 22.1419 19.2928 22.2738 19.5271 22.5081C19.7616 22.7426 19.8933 23.0604 19.8933 23.3919V31.5034L29.6014 17.8581H21.3569C20.6664 17.8581 20.1069 17.2984 20.1069 16.6081V8.49655L10.3987 22.1419Z" fill="white"></path>
                                    </svg>
                                </div>
                                <h3 class="mb-4 text-gray-800 dark:text-white/90 font-bold text-xl md:text-2xl max-w-[312px]">
                                    Jobs & Courses Marketplace
                                </h3>
                                <p class="text-gray-500 max-w-[312px] dark:text-gray-400">
                                    Post or apply for jobs and internships. Learn from handpicked online courses to grow your career.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="py-14 md:py-28 dark:bg-dark-primary">
                    <div class="wrapper">
                        <div class="max-w-2xl mx-auto mb-12 text-center">
                            <h2 class="mb-3 font-bold text-center text-gray-800 dark:text-white/90 text-3xl md:text-title-lg">
                                All the AI tools you need, at your Fingertips.
                            </h2>
                            <p class="max-w-2xl mx-auto leading-6 text-gray-500 dark:text-gray-400">
                                Unlock the Potential of Innovation, Discover the Advanced AI
                                Tools Transforming Your Ideas into Reality with Unmatched
                                Precision and Intelligence.
                            </p>
                        </div>
                        <div class="max-w-[1008px] mx-auto">
                            <div>
                                <div class="flex flex-wrap sm:justify-center mx-auto gap-2 p-1 w-full mb-8 dark:bg-white/[0.05] bg-gray-100 rounded-2xl lg:rounded-full max-w-fit">
                                    <button class="flex items-center h-12 gap-2 px-4 py-3 text-sm font-medium transition-colors duration-200 rounded-full text-gray-500 dark:text-gray-400 bg-transparent">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                            <g filter="url(#filter0_d_9279_144)">
                                                <g filter="url(#filter1_i_9279_144)">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.73756 24.3018L8.73873 24.3004L8.74774 24.2896C8.75625 24.2794 8.76968 24.2632 8.78739 24.2413C8.82285 24.1974 8.87538 24.1311 8.94012 24.0452C9.06988 23.8731 9.24715 23.6245 9.43387 23.3229C9.76956 22.7807 10.1139 22.1021 10.2867 21.4087C9.20833 19.876 8.57495 18.0067 8.57495 15.9912C8.57495 10.7859 12.7947 6.56616 18 6.56616C23.2052 6.56616 27.4249 10.7859 27.4249 15.9912C27.4249 21.1964 23.2052 25.4162 18 25.4162C16.8208 25.4162 15.6908 25.1993 14.6487 24.8028C13.5925 25.1989 12.2804 25.3471 11.2517 25.4026C10.681 25.4334 10.1743 25.4366 9.81007 25.4322C9.62767 25.43 9.48031 25.4258 9.37769 25.4222C9.32636 25.4203 9.28618 25.4186 9.25835 25.4174L9.22601 25.4158L9.21706 25.4154L9.21361 25.4152L9.24995 24.7412C9.21308 25.4152 9.21361 25.4152 9.21361 25.4152C8.95701 25.4012 8.73013 25.2426 8.6292 25.0063C8.52835 24.7702 8.57065 24.4968 8.73756 24.3018ZM13.6249 14.8663C13.0035 14.8663 12.4999 15.37 12.4999 15.9913C12.4999 16.6127 13.0035 17.1163 13.6249 17.1163H13.6349C14.2562 17.1163 14.7599 16.6127 14.7599 15.9913C14.7599 15.37 14.2562 14.8663 13.6349 14.8663H13.6249ZM17.9999 14.8663C17.3785 14.8663 16.8749 15.37 16.8749 15.9913C16.8749 16.6127 17.3785 17.1163 17.9999 17.1163H18.0099C18.6312 17.1163 19.1349 16.6127 19.1349 15.9913C19.1349 15.37 18.6312 14.8663 18.0099 14.8663H17.9999ZM22.3749 14.8663C21.7535 14.8663 21.2499 15.37 21.2499 15.9913C21.2499 16.6127 21.7535 17.1163 22.3749 17.1163H22.3849C23.0062 17.1163 23.5099 16.6127 23.5099 15.9913C23.5099 15.37 23.0062 14.8663 22.3849 14.8663H22.3749Z" fill="url(#paint0_radial_9279_144)"></path>
                                                </g>
                                            </g>
                                            <defs>
                                                <filter id="filter0_d_9279_144" x="-2" y="-2" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                                                    <feOffset dy="2"></feOffset>
                                                    <feGaussianBlur stdDeviation="4"></feGaussianBlur>
                                                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0.498039 0 0 0 0 0.407843 0 0 0 0 1 0 0 0 0.25 0"></feColorMatrix>
                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_9279_144"></feBlend>
                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_9279_144" result="shape"></feBlend>
                                                </filter>
                                                <filter id="filter1_i_9279_144" x="8.57495" y="6.56616" width="20.3739" height="20.3915" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                                                    <feOffset dx="1.52381" dy="1.52381"></feOffset>
                                                    <feGaussianBlur stdDeviation="1.14286"></feGaussianBlur>
                                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"></feColorMatrix>
                                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_9279_144"></feBlend>
                                                </filter>
                                                <radialGradient id="paint0_radial_9279_144" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(18.8129 22.0965) rotate(-60.1772) scale(18.6241 18.6153)">
                                                    <stop stop-color="#7F68FF"></stop>
                                                    <stop offset="1" stop-color="#BEB2FF"></stop>
                                                </radialGradient>
                                            </defs>
                                        </svg>
                                       AI Answer Assistant
                                    </button>
                                    <button class="flex items-center h-12 gap-2 px-4 py-3 text-sm font-medium transition-colors duration-200 rounded-full text-gray-500 dark:text-gray-400 bg-transparent">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                            <g filter="url(#filter0_d_9279_147)">
                                                <g filter="url(#filter1_i_9279_147)">
                                                    <path d="M13.6522 10.124C12.8594 10.124 12.2166 10.7667 12.2166 11.5596C12.2166 12.3524 12.8594 12.9951 13.6522 12.9951C14.445 12.9951 15.0877 12.3524 15.0877 11.5596C15.0877 10.7667 14.445 10.124 13.6522 10.124Z" fill="url(#paint0_radial_9279_147)"></path>
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 6.4375C10.0325 6.4375 8.4375 8.03249 8.4375 10V20C8.4375 21.9675 10.0325 23.5625 12 23.5625H22C23.9675 23.5625 25.5625 21.9675 25.5625 20V10C25.5625 8.03249 23.9675 6.4375 22 6.4375H12ZM9.5625 10C9.5625 8.65381 10.6538 7.5625 12 7.5625H22C23.3462 7.5625 24.4375 8.65381 24.4375 10V12.5688C23.8719 12.4375 23.2829 12.3681 22.6783 12.3681C19.4925 12.3681 16.7568 14.29 15.5652 17.0367C14.629 16.121 13.3471 15.5556 11.933 15.5556C11.0795 15.5556 10.2734 15.7619 9.5625 16.127V10Z" fill="url(#paint1_radial_9279_147)"></path>
                                                </g>
                                            </g>
                                            <defs>
                                                <filter id="filter0_d_9279_147" x="-3" y="-3" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                                                    <feOffset dy="2"></feOffset>
                                                    <feGaussianBlur stdDeviation="4"></feGaussianBlur>
                                                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.435294 0 0 0 0 0.345098 0 0 0 0.25 0"></feColorMatrix>
                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_9279_147"></feBlend>
                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_9279_147" result="shape"></feBlend>
                                                </filter>
                                                <filter id="filter1_i_9279_147" x="8.4375" y="6.4375" width="18.6488" height="18.6488" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                                                    <feOffset dx="1.52381" dy="1.52381"></feOffset>
                                                    <feGaussianBlur stdDeviation="1.14286"></feGaussianBlur>
                                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"></feColorMatrix>
                                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_9279_147"></feBlend>
                                                </filter>
                                                <radialGradient id="paint0_radial_9279_147" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13.9454 22.1904) rotate(-58.7716) scale(25.6788 25.6788)">
                                                    <stop stop-color="#FF6F58"></stop>
                                                    <stop offset="1" stop-color="#FFA293"></stop>
                                                </radialGradient>
                                                <radialGradient id="paint1_radial_9279_147" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13.9454 22.1904) rotate(-58.7716) scale(25.6788 25.6788)">
                                                    <stop stop-color="#FF6F58"></stop>
                                                    <stop offset="1" stop-color="#FFA293"></stop>
                                                </radialGradient>
                                            </defs>
                                        </svg>
                                        Code Generator & Debugger
                                    </button>
                                    <button class="flex items-center h-12 gap-2 px-4 py-3 text-sm font-medium transition-colors duration-200 rounded-full bg-white dark:text-white/90 dark:bg-white/10 text-gray-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                            <g filter="url(#filter0_d_9279_150)">
                                                <g filter="url(#filter1_i_9279_150)">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.4375 10C8.4375 8.03249 10.0325 6.4375 12 6.4375H22C23.9675 6.4375 25.5625 8.03249 25.5625 10V20C25.5625 21.9675 23.9675 23.5625 22 23.5625H12C10.0325 23.5625 8.4375 21.9675 8.4375 20V10ZM18.4373 11.123C18.5047 10.8197 18.3134 10.5193 18.0102 10.4519C17.7069 10.3845 17.4065 10.5757 17.3391 10.879L15.5618 18.8766C15.4944 19.1798 15.6856 19.4803 15.9889 19.5477C16.2922 19.6151 16.5926 19.4239 16.66 19.1206L18.4373 11.123ZM20.2665 12.8471C20.0469 12.6275 19.6907 12.6274 19.471 12.8471C19.2513 13.0668 19.2513 13.4229 19.471 13.6426L20.8282 14.9999L19.471 16.357C19.2513 16.5767 19.2513 16.9329 19.471 17.1525C19.6907 17.3722 20.0468 17.3722 20.2665 17.1525L22.0214 15.3977C22.241 15.178 22.241 14.8219 22.0214 14.6022L20.2665 12.8471ZM14.5224 13.6494C14.742 13.4297 14.742 13.0736 14.5223 12.8539C14.3027 12.6343 13.9465 12.6343 13.7268 12.854L11.9788 14.6022C11.7591 14.8219 11.7591 15.178 11.9788 15.3977L13.7269 17.1457C13.9465 17.3654 14.3027 17.3654 14.5224 17.1457C14.742 16.926 14.742 16.5699 14.5224 16.3502L13.172 14.9999L14.5224 13.6494Z" fill="url(#paint0_radial_9279_150)"></path>
                                                </g>
                                            </g>
                                            <defs>
                                                <filter id="filter0_d_9279_150" x="-3" y="-3" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                                                    <feOffset dy="2"></feOffset>
                                                    <feGaussianBlur stdDeviation="4"></feGaussianBlur>
                                                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0.0901961 0 0 0 0 0.654902 0 0 0 0 1 0 0 0 0.25 0"></feColorMatrix>
                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_9279_150"></feBlend>
                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_9279_150" result="shape"></feBlend>
                                                </filter>
                                                <filter id="filter1_i_9279_150" x="8.4375" y="6.4375" width="18.125" height="18.125" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                                                    <feOffset dx="1" dy="1"></feOffset>
                                                    <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"></feColorMatrix>
                                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_9279_150"></feBlend>
                                                </filter>
                                                <radialGradient id="paint0_radial_9279_150" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.7385 20.5335) rotate(-60.1541) scale(16.9079 16.9079)">
                                                    <stop stop-color="#17A7FF"></stop>
                                                    <stop offset="1" stop-color="#84D0FF"></stop>
                                                </radialGradient>
                                            </defs>
                                        </svg>
                                        AI Content Creator
                                    </button>
                                    <button class="flex items-center h-12 px-4 py-3 text-sm font-medium transition-colors duration-200 rounded-full text-gray-500 dark:text-gray-400 bg-transparent">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="32" viewBox="0 0 38 32" fill="none">
                                            <g filter="url(#filter0_d_9279_153)">
                                                <g filter="url(#filter1_i_9279_153)">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.875 10.1305C8.875 8.10037 10.5208 6.45459 12.551 6.45459H25.449C27.4792 6.45459 29.125 8.10037 29.125 10.1305V17.8694C29.125 19.8996 27.4792 21.5454 25.449 21.5454H12.551C10.5208 21.5454 8.875 19.8996 8.875 17.8694V10.1305ZM21.8102 13.429C22.227 13.6955 22.227 14.3043 21.8102 14.5708L18.0934 16.9471C17.6424 17.2355 17.0509 16.9116 17.0509 16.3762V11.6236C17.0509 11.0882 17.6424 10.7643 18.0934 11.0527L21.8102 13.429Z" fill="url(#paint0_radial_9279_153)"></path>
                                                </g>
                                            </g>
                                            <defs>
                                                <filter id="filter0_d_9279_153" x="-1" y="-4" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                                                    <feOffset dy="2"></feOffset>
                                                    <feGaussianBlur stdDeviation="4"></feGaussianBlur>
                                                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.67451 0 0 0 0 0.0980392 0 0 0 0.25 0"></feColorMatrix>
                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_9279_153"></feBlend>
                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_9279_153" result="shape"></feBlend>
                                                </filter>
                                                <filter id="filter1_i_9279_153" x="8.875" y="6.45459" width="21.7738" height="16.6146" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                                                    <feOffset dx="1.52381" dy="1.52381"></feOffset>
                                                    <feGaussianBlur stdDeviation="1.14286"></feGaussianBlur>
                                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"></feColorMatrix>
                                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_9279_153"></feBlend>
                                                </filter>
                                                <radialGradient id="paint0_radial_9279_153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(19.8733 18.8761) rotate(-52.4062) scale(16.3099 18.2642)">
                                                    <stop stop-color="#FFAC19"></stop>
                                                    <stop offset="1" stop-color="#FFCE78"></stop>
                                                </radialGradient>
                                            </defs>
                                        </svg>
                                        AI Interview Coach
                                    </button>
                                    {/* <button class="flex items-center h-12 gap-2 px-4 py-3 text-sm font-medium transition-colors duration-200 rounded-full text-gray-500 dark:text-gray-400 bg-transparent">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="32" viewBox="0 0 36 32" fill="none">
                                            <g filter="url(#filter0_d_9279_160)">
                                                <g filter="url(#filter1_i_9279_160)">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 10.1784C8 8.17331 9.62546 6.54785 11.6306 6.54785H24.3694C26.3745 6.54785 28 8.17332 28 10.1784V17.8217C28 19.8268 26.3745 21.4523 24.3694 21.4523H11.6306C9.62546 21.4523 8 19.8268 8 17.8217V10.1784ZM12.3775 10.6036C12.1178 10.4225 11.7605 10.4862 11.5794 10.7459C11.3983 11.0056 11.462 11.3629 11.7217 11.544L16.7981 15.0839C17.5204 15.5877 18.4803 15.5877 19.2026 15.0839L24.279 11.544C24.5387 11.3629 24.6024 11.0056 24.4213 10.7459C24.2402 10.4862 23.8829 10.4225 23.6232 10.6036L18.5468 14.1435C18.2185 14.3725 17.7822 14.3725 17.4539 14.1435L12.3775 10.6036Z" fill="url(#paint0_radial_9279_160)"></path>
                                                </g>
                                            </g>
                                            <defs>
                                                <filter id="filter0_d_9279_160" x="-2" y="-4" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                                                    <feOffset dy="2"></feOffset>
                                                    <feGaussianBlur stdDeviation="4"></feGaussianBlur>
                                                    <feComposite in2="hardAlpha" operator="out"></feComposite>
                                                    <feColorMatrix type="matrix" values="0 0 0 0 0.168627 0 0 0 0 0.811765 0 0 0 0 1 0 0 0 0.25 0"></feColorMatrix>
                                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_9279_160"></feBlend>
                                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_9279_160" result="shape"></feBlend>
                                                </filter>
                                                <filter id="filter1_i_9279_160" x="8" y="6.54785" width="21.5238" height="16.4284" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>
                                                    <feOffset dx="1.52381" dy="1.52381"></feOffset>
                                                    <feGaussianBlur stdDeviation="1.14286"></feGaussianBlur>
                                                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite>
                                                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"></feColorMatrix>
                                                    <feBlend mode="normal" in2="shape" result="effect1_innerShadow_9279_160"></feBlend>
                                                </filter>
                                                <radialGradient id="paint0_radial_9279_160" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(18.8625 18.816) rotate(-52.4062) scale(16.1086 18.0387)">
                                                    <stop stop-color="#2BCFFF"></stop>
                                                    <stop offset="1" stop-color="#8EE5FF"></stop>
                                                </radialGradient>
                                            </defs>
                                        </svg>
                                        Email Generator
                                    </button> */}
                                </div>
                                <div class="overflow-hidden tab-img-bg rounded-4xl">
                                    <div x-show="activeTab === 'text'" class="p-6">
                                        <div class="p-3 tab-img-overlay">
                                            <img src="./assets/images/tab-image/tab-image-1.jpg" alt="" class="w-full rounded-2xl block dark:hidden" />
                                            <img src="./assets/images/tab-image/tab-image-1-dark.jpg" alt="" class="w-full rounded-2xl hidden dark:block" />
                                        </div>
                                    </div>
                                    <div x-show="activeTab === 'image'" class="p-6">
                                        <div class="p-3 tab-img-overlay">
                                            <img src="./assets/images/tab-image/tab-image-2.jpg" alt="" class="w-full rounded-2xl block dark:hidden" />
                                            <img src="./assets/images/tab-image/tab-image-2-dark.jpg" alt="" class="w-full rounded-2xl hidden dark:block" />
                                        </div>
                                    </div>
                                    <div x-show="activeTab === 'code'" class="p-6">
                                        <div class="p-3 tab-img-overlay">
                                            <img src="./assets/images/tab-image/tab-image-3.jpg" alt="" class="w-full rounded-2xl block dark:hidden" />
                                            <img src="./assets/images/tab-image/tab-image-3-dark.jpg" alt="" class="w-full rounded-2xl hidden dark:block" />
                                        </div>
                                    </div>
                                    <div x-show="activeTab === 'video'" class="p-6">
                                        <div class="p-3 tab-img-overlay">
                                            <img src="./assets/images/tab-image/tab-image-4.jpg" alt="" class="w-full rounded-2xl block dark:hidden" />
                                            <img src="./assets/images/tab-image/tab-image-4-dark.jpg" alt="" class="w-full rounded-2xl hidden dark:block" />
                                        </div>
                                    </div>
                                    <div x-show="activeTab === 'email'" class="p-6">
                                        <div class="p-3 tab-img-overlay">
                                            <img src="./assets/images/tab-image/tab-image-5.jpg" alt="" class="w-full rounded-2xl block dark:hidden" />
                                            <img src="./assets/images/tab-image/tab-image-5-dark.jpg" alt="" class="w-full rounded-2xl hidden dark:block" />
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-6 text-center">
                                    <h2 class="mb-2 text-xl font-bold text-gray-800 dark:text-white/90">
                                        Easiest way to generate text
                                    </h2>
                                    <p class="max-w-xl mx-auto mb-6 text-sm text-gray-500 dark:text-gray-400">
                                        Unlock the Potential of Innovation. Discover the Advanced AI
                                        Tools Transforming Your Ideas into Reality with Unmatched
                                        Precision and Intelligence.
                                    </p>
                                    <button class="px-6 py-3 text-sm font-medium text-white transition-colors rounded-full bg-primary-500 hover:bg-primary-600">
                                        Try it now for free
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="bg-gray-900 py-14 md:py-28">
                    <div class="wrapper">
                        <div class="max-w-2xl mx-auto mb-12 text-center">
                            <h2 class="max-w-lg mx-auto mb-3 font-bold text-center text-white dark:text-white/90 text-3xl md:text-title-lg">
                                The key benefits of using our tools.
                            </h2>
                            <p class="max-w-2xl mx-auto text-base dark: font-normal leading-6 text-white/50">
                                Unlock the Potential of Innovation. Discover the Advanced AI
                                Tools Transforming Your Ideas into Reality with Unmatched
                                Precision and Intelligence.
                            </p>
                        </div>
                        <div class="max-w-[1008px] mx-auto">
                            <div class="grid lg:grid-cols-12 gap-8">
                                <div class="lg:col-span-6">
                                    <div class="relative flex flex-col justify-between bg-purple-500 rounded-[20px] p-9 md:p-13">
                                        <div class="max-w-sm mb-32">
                                            <h3 class="font-bold text-white text-2xl md:text-3xl mb-4">
                                               Save time switching between multiple tools
                                            </h3>
                                            <p class="text-base text-white/70">
                                                Transform your ideas into groundbreaking realities with
                                                advanced AI tools.
                                            </p>
                                        </div>
                                        <div>
                                            <img src="./assets/images/benefits/ind-1.svg" class="absolute left-8 top-[61%] floating-1" alt="" />
                                            <img src="./assets/images/benefits/ind-2.svg" class="absolute right-28 top-[55%] floating-2" alt="" />
                                            <img src="./assets/images/benefits/ind-3.svg" class="right-8 absolute bottom-[15%] floating-3" alt="" />
                                            <img src="https://ai-agent.preview.uideck.com/assets/images/benefits/bn-1.svg" class="-mb-8 md:-mb-11" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="lg:col-span-6">
                                    <div class="bg-pink-500 rounded-[20px] p-12 overflow-hidden">
                                        <div>
                                            <img src="https://ai-agent.preview.uideck.com/assets/images/benefits/bn-2.svg" alt="" />
                                        </div>
                                        <div>
                                            <h3 class="font-bold max-w-xs text-white text-2xl md:text-3xl mb-4">
                                                 Grow your knowledge and portfolio in one place
                                            </h3>
                                            <p class="text-base max-w-sm text-white/70">
                                                Unlock the Potential of Innovation, Discover the
                                                Advanced AI Tools Intelligence.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="lg:col-span-12">
                                    <div class="lg:px-12 p-8 bg-[#2D0B70] lg:pb-0 lg:p-12 relative rounded-[20px] h-full lg:flex lg:flex-row justify-between bg-cover flex-col gap-5">
                                        <div class="max-w-sm relative z-10">
                                            <h3 class="font-bold text-white text-2xl md:text-3xl mb-4">
                                                 Get noticed with intelligent chat AI 
                                            </h3>
                                            <p class="text-base text-white/70 mb-8">
                                                Discover the cutting-edge AI tools that bring your ideas
                                                to life with exceptional accuracy.
                                            </p>
                                            <Link to="/new-chat" class="font-medium inline-block text-sm text-white rounded-full bg-primary-500 hover:bg-primary-600 transition py-3 px-6">
                                                Try it now for Free
                                            </Link>
                                        </div>
                                        <div>
                                            <img src="https://ai-agent.preview.uideck.com/assets/images/benefits/bn-3.svg" class="hidden lg:block relative z-10" alt="" />
                                        </div>
                                        <img src="https://ai-agent.preview.uideck.com/assets/images/benefits/blur-shape.png" alt="" class="h-full w-full -z-0 absolute top-0 right-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="md:py-28 py-14 relative" x-data="{ showAll: false }">
                    <div class="wrapper">
                        <div>
                            <div class="max-w-2xl mx-auto mb-12 text-center">
                                <h2 class="mb-3 font-bold text-center text-gray-800 text-3xl dark:text-white/90 md:text-title-lg">
                                    What our uses says
                                </h2>
                                <p class="max-w-xl mx-auto leading-6 text-gray-500 dark:text-gray-400">
                                    Unlock the Potential of Innovation. Discover the Advanced AI
                                    Tools Transforming Your Ideas into Reality with Unmatched
                                    Precision and Intelligence.
                                </p>
                            </div>
                            <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                                <div class="p-2 bg-gray-50 dark:bg-white/5 dark:border-gray-800 dark:hover:border-white/10 border rounded-[20px] border-gray-100 hover:border-primary-200 transition">
                                    <div class="flex items-center p-3 mb-3 bg-white/90 dark:bg-white/[0.03] rounded-2xl">
                                        <div>
                                            <img src="./assets/images/users/user-1.png" alt="Ralph Edwards" class="w-[52px] h-[52px] ring-2 ring-white dark:ring-gray-700 mr-4 rounded-full drop-shadow-[0_8px_20px_rgba(0,0,0,0.08)]" />
                                        </div>
                                        <div>
                                            <h3 class="text-gray-800 font-base dark:text-white/90">
                                                Ralph Edwards
                                            </h3>
                                            <p class="text-sm text-gray-500 dark:text-gray-400">
                                                Big Kahuna Burger Ltd
                                            </p>
                                        </div>
                                    </div>
                                    <div class="p-5 rounded-2xl bg-white/90 dark:bg-white/[0.03]">
                                        <p class="text-base leading-6 text-gray-700 dark:text-gray-400">
                                            As a Senior Software Developer I found TailAdmin perfect
                                            write code that easy can be used in my projects, which
                                            some are production already.
                                        </p>
                                    </div>
                                </div>
                                <div class="p-2 bg-gray-50 dark:bg-white/5 dark:border-gray-800 dark:hover:border-white/10 border rounded-[20px] border-gray-100 hover:border-primary-200 transition">
                                    <div class="flex items-center p-3 mb-3 dark:bg-white/[0.03] bg-white/90 rounded-2xl">
                                        <div>
                                            <img src="./assets/images/users/user-2.png" alt="Ralph Edwards" class="w-[52px] h-[52px] ring-2 ring-white dark:ring-gray-700 mr-4 rounded-full drop-shadow-[0_8px_20px_rgba(0,0,0,0.08)]" />
                                        </div>
                                        <div>
                                            <h3 class="text-gray-800 font-base dark:text-white/90">
                                                Albert Flores
                                            </h3>
                                            <p class="text-sm text-gray-500 dark:text-gray-400">
                                                Biffco Enterprises Ltd.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="p-5 rounded-2xl bg-white/90 dark:bg-white/[0.03]">
                                        <p class="text-base leading-6 text-gray-700 dark:text-gray-400">
                                            As a Senior Software Developer I found TailAdmin perfect
                                            write code that easy can be used in my projects, which
                                            some are production already.
                                        </p>
                                    </div>
                                </div>
                                <div class="p-2 bg-gray-50 dark:bg-white/5 dark:border-gray-800 dark:hover:border-white/10 border rounded-[20px] border-gray-100 hover:border-primary-200 transition">
                                    <div class="flex items-center p-3 mb-3 bg-white/90 rounded-2xl dark:bg-white/[0.03]">
                                        <div>
                                            <img src="./assets/images/users/user-3.png" alt="Ralph Edwards" class="w-[52px] h-[52px] ring-2 ring-white dark:ring-gray-700 mr-4 rounded-full drop-shadow-[0_8px_20px_rgba(0,0,0,0.08)]" />
                                        </div>
                                        <div>
                                            <h3 class="text-gray-800 font-base dark:text-white/90">
                                                Jenny Wilson
                                            </h3>
                                            <p class="text-sm text-gray-500 dark:text-gray-400">
                                                Acme Co.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="p-5 rounded-2xl bg-white/90 dark:bg-white/[0.03]">
                                        <p class="text-base leading-6 text-gray-700 dark:text-gray-400">
                                            As a Senior Software Developer I found TailAdmin perfect
                                            write code that easy can be used in my projects, which
                                            some are production already.
                                        </p>
                                    </div>
                                </div>
                                <div class="p-2 bg-gray-50 dark:bg-white/5 dark:border-gray-800 dark:hover:border-white/10 border rounded-[20px] border-gray-100 hover:border-primary-200 transition">
                                    <div class="flex items-center p-3 mb-3 bg-white/90 rounded-2xl dark:bg-white/[0.03]">
                                        <div>
                                            <img src="./assets/images/users/user-4.png" alt="Ralph Edwards" class="w-[52px] h-[52px] ring-2 ring-white dark:ring-gray-700 mr-4 rounded-full drop-shadow-[0_8px_20px_rgba(0,0,0,0.08)]" />
                                        </div>
                                        <div>
                                            <h3 class="text-gray-800 font-base dark:text-white/90">
                                                Esther Howard
                                            </h3>
                                            <p class="text-sm text-gray-500 dark:text-gray-400">
                                                Barone LLC.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="p-5 rounded-2xl bg-white/90 dark:bg-white/[0.03]">
                                        <p class="text-base leading-6 text-gray-700 dark:text-gray-400">
                                            As a Senior Software Developer I found TailAdmin perfect
                                            write code that easy can be used in my projects, which
                                            some are production already.
                                        </p>
                                    </div>
                                </div>
                                <div class="p-2 bg-gray-50 dark:bg-white/5 dark:border-gray-800 dark:hover:border-white/10 border rounded-[20px] border-gray-100 hover:border-primary-200 transition">
                                    <div class="flex items-center p-3 mb-3 dark:bg-white/[0.03] bg-white/90 rounded-2xl">
                                        <div>
                                            <img src="./assets/images/users/user-5.png" alt="Ralph Edwards" class="w-[52px] h-[52px] ring-2 ring-white dark:ring-gray-700 mr-4 rounded-full drop-shadow-[0_8px_20px_rgba(0,0,0,0.08)]" />
                                        </div>
                                        <div>
                                            <h3 class="text-gray-800 font-base dark:text-white/90">
                                                Darlene Robertson
                                            </h3>
                                            <p class="text-sm text-gray-500 dark:text-white">
                                                Abstergo Ltd.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="p-5 rounded-2xl bg-white/90 dark:bg-white/[0.03]">
                                        <p class="text-base leading-6 text-gray-700 dark:text-gray-400">
                                            As a Senior Software Developer I found TailAdmin perfect
                                            write code that easy can be used in my projects, which
                                            some are production already.
                                        </p>
                                    </div>
                                </div>
                                <div class="p-2 bg-gray-50 dark:bg-white/5 dark:border-gray-800 dark:hover:border-white/10 border rounded-[20px] border-gray-100 hover:border-primary-200 transition">
                                    <div class="flex items-center p-3 mb-3 dark:bg-white/[0.03] bg-white/90 rounded-2xl">
                                        <div>
                                            <img src="./assets/images/users/user-6.png" alt="Ralph Edwards" class="w-[52px] h-[52px] ring-2 ring-white dark:ring-gray-700 mr-4 rounded-full drop-shadow-[0_8px_20px_rgba(0,0,0,0.08)]" />
                                        </div>
                                        <div>
                                            <h3 class="text-gray-800 font-base dark:text-white/90">
                                                Devon Lane
                                            </h3>
                                            <p class="text-sm text-gray-500 dark:text-gray-400">
                                                Binford Ltd.
                                            </p>
                                        </div>
                                    </div>
                                    <div class="p-5 rounded-2xl bg-white/90 dark:bg-white/[0.03]">
                                        <p class="text-base leading-6 text-gray-700 dark:text-gray-400">
                                            As a Senior Software Developer I found TailAdmin perfect
                                            write code that easy can be used in my projects, which
                                            some are production already.
                                        </p>
                                    </div>
                                </div>
                                <template x-if="showAll">
                                    <div class="p-2 bg-gray-50 dark:bg-white/5 dark:border-gray-800 dark:hover:border-white/10 border rounded-[20px] border-gray-100 hover:border-primary-200 transition">
                                        <div class="flex items-center p-3 mb-3 bg-white/90 dark:bg-white/[0.03] rounded-2xl">
                                            <div>
                                                <img src="./assets/images/users/user-1.png" alt="Ralph Edwards" class="w-[52px] h-[52px] ring-2 ring-white dark:ring-gray-700 mr-4 rounded-full drop-shadow-[0_8px_20px_rgba(0,0,0,0.08)]" />
                                            </div>
                                            <div>
                                                <h3 class="text-gray-800 font-base dark:text-white/90">
                                                    Ralph Edwards
                                                </h3>
                                                <p class="text-sm text-gray-500 dark:text-gray-400">
                                                    Big Kahuna Burger Ltd
                                                </p>
                                            </div>
                                        </div>
                                        <div class="p-5 rounded-2xl bg-white/90 dark:bg-white/[0.03]">
                                            <p class="text-base leading-6 text-gray-700 dark:text-gray-400">
                                                As a Senior Software Developer I found TailAdmin perfect
                                                write code that easy can be used in my projects, which
                                                some are production already.
                                            </p>
                                        </div>
                                    </div>
                                </template>
                                <template x-if="showAll">
                                    <div class="p-2 bg-gray-50 dark:bg-white/5 dark:border-gray-800 dark:hover:border-white/10 border rounded-[20px] border-gray-100 hover:border-primary-200 transition">
                                        <div class="flex items-center p-3 mb-3 bg-white/90 dark:bg-white/[0.03] rounded-2xl">
                                            <div>
                                                <img src="./assets/images/users/user-5.png" alt="Ralph Edwards" class="w-[52px] h-[52px] ring-2 ring-white dark:ring-gray-700 mr-4 rounded-full drop-shadow-[0_8px_20px_rgba(0,0,0,0.08)]" />
                                            </div>
                                            <div>
                                                <h3 class="text-gray-800 font-base dark:text-white/90">
                                                    Darlene Robertson
                                                </h3>
                                                <p class="text-sm text-gray-500 dark:text-gray-400">
                                                    Abstergo Ltd.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="p-5 rounded-2xl bg-white/90 dark:bg-white/[0.03]">
                                            <p class="text-base leading-6 text-gray-700 dark:text-gray-400">
                                                As a Senior Software Developer I found TailAdmin perfect
                                                write code that easy can be used in my projects, which
                                                some are production already.
                                            </p>
                                        </div>
                                    </div>
                                </template>
                                <template x-if="showAll">
                                    <div class="p-2 bg-gray-50 dark:bg-white/5 dark:border-gray-800 dark:hover:border-white/10 border rounded-[20px] border-gray-100 hover:border-primary-200 transition">
                                        <div class="flex items-center p-3 mb-3 bg-white/90 dark:bg-white/[0.03] rounded-2xl">
                                            <div>
                                                <img src="./assets/images/users/user-6.png" alt="Ralph Edwards" class="w-[52px] h-[52px] ring-2 ring-white dark:ring-gray-700 mr-4 rounded-full drop-shadow-[0_8px_20px_rgba(0,0,0,0.08)]" />
                                            </div>
                                            <div>
                                                <h3 class="text-gray-800 font-base dark:text-white/90">
                                                    Devon Lane
                                                </h3>
                                                <p class="text-sm text-gray-500 dark:text-gray-400">
                                                    Binford Ltd.
                                                </p>
                                            </div>
                                        </div>
                                        <div class="p-5 rounded-2xl bg-white/90 dark:bg-white/[0.03] d">
                                            <p class="text-base leading-6 text-gray-700 dark:text-gray-400">
                                                As a Senior Software Developer I found TailAdmin perfect
                                                write code that easy can be used in my projects, which
                                                some are production already.
                                            </p>
                                        </div>
                                    </div>
                                </template>
                            </div>
                            <div class="mt-8 text-center relative z-10">
                                <button class="inline-flex items-center dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 px-6 py-3.5 text-sm font-medium text-gray-800 bg-white border border-gray-200 dark:hover:bg-gray-900 rounded-full shadow-theme-xs hover:bg-gray-50 focus:outline-none">
                                    <span x-text="showAll ? 'Show less...' : 'Show more...'">Show more...</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <template x-if="!showAll">
                        <div class="white-gradient h-[264px] w-full absolute bottom-0"></div>
                    </template>
                    <div class="white-gradient h-[264px] w-full absolute bottom-0"></div>
                </section>
                <section class="py-14 md:py-28 bg-gray-50 overflow-hidden dark:bg-white/[0.03]">
                    <div class="wrapper">
                        <div class="max-w-2xl mx-auto mb-12 text-center">
                            <h2 class="mb-3 font-bold text-center text-gray-800 text-3xl dark:text-white/90 md:text-title-lg">
                                Start Your Content Creation Journey with AI
                            </h2>
                            <p class="max-w-xl mx-auto leading-6 text-gray-500 dark:text-gray-400">
                                Collaborate with AI to generate content that resonates with your
                                audience, drives and delivers meaningful results across all
                                platforms.
                            </p>
                        </div>
                        <div x-data="{ annual: false }">
                            <div class="flex justify-center relative z-30 mt-12">
                                <div class="relative flex p-1 bg-white dark:bg-dark-primary rounded-full shadow-theme-xs">
                                    <button class="relative px-6 py-2 text-sm font-medium transition-colors duration-200 rounded-full bg-gray-800 dark:bg-white/[0.05] text-white">
                                        Monthly
                                    </button>
                                    <button class="relative flex items-center pl-6 pr-2 py-2 text-sm font-medium transition-colors duration-200 rounded-full bg-transparent text-gray-700 dark:text-gray-400">
                                        Annually
                                        <span class="ml-2 bg-orange-400 text-white text-xs px-2 py-0.5 rounded-full">Save 20%</span>
                                    </button>
                                </div>
                            </div>
                            <div class="relative">
                                <div class="mt-12 z-30 relative space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-6xl lg:mx-auto lg:grid-cols-4">

                                    <div class="bg-white dark:bg-dark-primary rounded-[20px] shadow-one">
                                        <div class="p-8">
                                            <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-400">
                                                Free
                                            </h2>
                                            <p class="flex items-baseline mt-4">
                                                <span class="text-4xl font-semibold text-gray-800 dark:text-white/90">$0</span>
                                                <span class="ml-1 text-sm font-normal text-gray-500 dark:text-gray-400">Per month</span>
                                            </p>
                                            <p class="mt-3 text-sm text-gray-500 dark:text-gray-400">
                                                Sed ut perspiciatis unde omnis iste natus ut perspic
                                                iatis.
                                            </p>
                                            <button class="block w-full px-8 py-3.5 dark:bg-dark-primary dark:text-white/90 transition dark:hover:bg-gray-800 dark:border-gray-800 mt-7 text-sm font-medium text-center text-gray-800 cursor-pointer bg-white border border-gray-200 rounded-full hover:bg-gray-50">
                                                Try it for free
                                            </button>
                                        </div>
                                        <div class="px-8 pb-7">
                                            <ul class="space-y-3">
                                                <li class="flex items-start">
                                                    <div class="flex-shrink-0 text-gray-500 dark:text-gray-400">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                            <path d="M13.4017 5.2793L6.12172 12.5593L2.59839 9.036" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </svg>
                                                    </div>
                                                    <p class="ml-2 text-sm text-gray-800 dark:text-white/90">
                                                        Some limited features only
                                                    </p>
                                                </li>
                                                <li class="flex items-start">
                                                    <div class="flex-shrink-0 text-gray-500 dark:text-gray-400">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                            <path d="M13.4017 5.2793L6.12172 12.5593L2.59839 9.036" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </svg>
                                                    </div>
                                                    <p class="ml-2 text-sm text-gray-800 dark:text-white/90">
                                                        400 messaging limits
                                                    </p>
                                                </li>
                                                <li class="flex items-start">
                                                    <div class="flex-shrink-0 text-gray-500 dark:text-gray-400">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                            <path d="M13.4017 5.2793L6.12172 12.5593L2.59839 9.036" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </svg>
                                                    </div>
                                                    <p class="ml-2 text-sm text-gray-800 dark:text-white/90">
                                                        Limited Projects
                                                    </p>
                                                </li>
                                                <li class="flex items-start">
                                                    <div class="flex-shrink-0 text-gray-500 dark:text-gray-400">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                            <path d="M13.4017 5.2793L6.12172 12.5593L2.59839 9.036" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </svg>
                                                    </div>
                                                    <p class="ml-2 text-sm text-gray-800 dark:text-white/90">
                                                        20,000 Words
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="bg-white dark:bg-dark-primary relative border-2 border-primary-500 rounded-[20px] shadow-one">
                                        <div class="p-8">
                                            <div class="flex items-center justify-between">
                                                <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-400">
                                                    Plus plan
                                                </h2>
                                                <span class="px-2 py-1 text-xs font-medium dark:text-pir rounded-full dark:bg-primary-500/15 bg-primary-50 text-primary-500">
                                                    Popular
                                                </span>
                                            </div>
                                            <p class="flex items-baseline mt-4">
                                                <span class="text-4xl font-semibold text-gray-800 dark:text-white/90" x-text="annual ? '$16' : '$20'">$20</span>
                                                <span class="ml-1 text-sm text-gray-500 dark:text-gray-400" x-text="annual ? 'Per year' : 'Per month'">Per month</span>
                                            </p>
                                            <p class="mt-3 text-sm text-gray-500 dark:text-gray-400">
                                                Billed at periods under limits, see rates of people who
                                                use.
                                            </p>
                                            <button class="block w-full gradient-btn px-8 py-3.5 mt-7 text-sm font-medium text-center text-white rounded-full">
                                                Purchase Now
                                            </button>
                                        </div>
                                        <div class="px-8 pb-7">
                                            <ul class="space-y-3">
                                                <li class="flex items-start">
                                                    <div class="flex-shrink-0 dark:text-gray-400 text-gray-500">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                            <path d="M13.4017 5.2793L6.12172 12.5593L2.59839 9.036" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </svg>
                                                    </div>
                                                    <p class="ml-2 text-sm text-gray-800 dark:text-white/90">
                                                        Everything in Free
                                                    </p>
                                                </li>
                                                <li class="flex items-start dark:text-gray-400 text-gray-500">
                                                    <div class="flex-shrink-0">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                            <path d="M13.4017 5.2793L6.12172 12.5593L2.59839 9.036" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </svg>
                                                    </div>
                                                    <p class="ml-2 text-sm text-gray-800 dark:text-white/90">
                                                        2000 messaging limits
                                                    </p>
                                                </li>
                                                <li class="flex items-start">
                                                    <div class="flex-shrink-0 dark:text-gray-400 text-gray-500">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                            <path d="M13.4017 5.2793L6.12172 12.5593L2.59839 9.036" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </svg>
                                                    </div>
                                                    <p class="ml-2 text-sm text-gray-800 dark:text-white/90">
                                                        Unlimited Projects
                                                    </p>
                                                </li>
                                                <li class="flex items-start">
                                                    <div class="flex-shrink-0 dark:text-gray-400 text-gray-500">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                            <path d="M13.4017 5.2793L6.12172 12.5593L2.59839 9.036" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </svg>
                                                    </div>
                                                    <p class="ml-2 text-sm text-gray-800 dark:text-white/90">
                                                        Open AI Key Integration
                                                    </p>
                                                </li>
                                                <li class="flex items-start">
                                                    <div class="flex-shrink-0 dark:text-gray-400 text-gray-500">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                            <path d="M13.4017 5.2793L6.12172 12.5593L2.59839 9.036" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </svg>
                                                    </div>
                                                    <p class="ml-2 text-sm text-gray-800 dark:text-white/90">
                                                        80,000 Words
                                                    </p>
                                                </li>
                                                <li class="flex items-start">
                                                    <div class="flex-shrink-0 dark:text-gray-400 text-gray-500">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                            <path d="M13.4017 5.2793L6.12172 12.5593L2.59839 9.036" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                        </svg>
                                                    </div>
                                                    <p class="ml-2 text-sm text-gray-800 dark:text-white/90">
                                                        Consistent support
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="bg-white rounded-[20px] dark:bg-dark-primary shadow-one">
                                            <div class="p-8">
                                                <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-400">
                                                    Pro plan
                                                </h2>
                                                <p class="flex items-baseline mt-4">
                                                    <span class="text-4xl font-semibold text-gray-800 dark:text-white/90" x-text="annual ? '$24' : '$30'">$30</span>
                                                    <span class="ml-1 text-sm text-gray-500 dark:text-gray-400" x-text="annual ? 'Per year' : 'Per month'">Per month</span>
                                                </p>
                                                <p class="mt-3 text-sm text-gray-500 dark:text-gray-400">
                                                    Billed at periods under limits, see rates of people who
                                                    use.
                                                </p>
                                                <button class="block w-full dark:hover:bg-primary-500 transition dark:bg-white/[0.05] hover:bg-gray-900 px-8 py-3.5 mt-6 text-sm font-medium text-center rounded-full text-white bg-gray-700">
                                                    Purchase Now
                                                </button>
                                            </div>
                                            <div class="px-8 pb-7">
                                                <ul class="space-y-3">
                                                    <li class="flex items-start">
                                                        <div class="flex-shrink-0 dark:text-gray-400 text-gray-500">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                                <path d="M13.4017 5.2793L6.12172 12.5593L2.59839 9.036" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            </svg>
                                                        </div>
                                                        <p class="ml-2 text-sm text-gray-800 dark:text-white/90">
                                                            Everything in Free
                                                        </p>
                                                    </li>
                                                    <li class="flex items-start dark:text-gray-400 text-gray-500">
                                                        <div class="flex-shrink-0">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                                <path d="M13.4017 5.2793L6.12172 12.5593L2.59839 9.036" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            </svg>
                                                        </div>
                                                        <p class="ml-2 text-sm text-gray-800 dark:text-white/90">
                                                            5000 messaging limits
                                                        </p>
                                                    </li>
                                                    <li class="flex items-start">
                                                        <div class="flex-shrink-0 dark:text-gray-400 text-gray-500">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                                <path d="M13.4017 5.2793L6.12172 12.5593L2.59839 9.036" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            </svg>
                                                        </div>
                                                        <p class="ml-2 text-sm text-gray-800 dark:text-white/90">
                                                            Unlimited Projects
                                                        </p>
                                                    </li>
                                                    <li class="flex items-start">
                                                        <div class="flex-shrink-0 dark:text-gray-400 text-gray-500">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                                <path d="M13.4017 5.2793L6.12172 12.5593L2.59839 9.036" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            </svg>
                                                        </div>
                                                        <p class="ml-2 text-sm text-gray-800 dark:text-white/90">
                                                            Open AI Key Integration
                                                        </p>
                                                    </li>
                                                    <li class="flex items-start">
                                                        <div class="flex-shrink-0 dark:text-gray-400 text-gray-500">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                                <path d="M13.4017 5.2793L6.12172 12.5593L2.59839 9.036" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            </svg>
                                                        </div>
                                                        <p class="ml-2 text-sm text-gray-800 dark:text-white/90">
                                                            1,00,000 Words
                                                        </p>
                                                    </li>
                                                    <li class="flex items-start">
                                                        <div class="flex-shrink-0 dark:text-gray-400 text-gray-500">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                                <path d="M13.4017 5.2793L6.12172 12.5593L2.59839 9.036" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            </svg>
                                                        </div>
                                                        <p class="ml-2 text-sm text-gray-800 dark:text-white/90">
                                                            Consistent support
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="bg-white rounded-[20px] dark:bg-dark-primary shadow-one">
                                            <div class="p-8">
                                                <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-400">
                                                    Enterprise
                                                </h2>
                                                <p class="flex items-baseline mt-4">
                                                    <span class="text-4xl font-semibold text-gray-800 dark:text-white/90">Let's talk</span>
                                                </p>
                                                <p class="mt-3 text-sm text-gray-500 dark:text-gray-400">
                                                    Sed ut perspiciatis unde omnis iste natus ut perspic
                                                    iatis.
                                                </p>
                                                <button class="block dark:hover:bg-primary-500 w-full px-8 transition dark:bg-white/[0.03] hover:bg-gray-900 py-3.5 mt-6 text-sm font-medium text-center rounded-full text-white bg-gray-700">
                                                    Contact Sales
                                                </button>
                                            </div>
                                            <div class="px-8 pb-7">
                                                <ul class="space-y-3">
                                                    <li class="flex items-start">
                                                        <div class="flex-shrink-0 dark:text-gray-400 text-gray-500">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                                <path d="M13.4017 5.2793L6.12172 12.5593L2.59839 9.036" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            </svg>
                                                        </div>
                                                        <p class="ml-2 text-sm text-gray-800 dark:text-white/90">
                                                            Everything in Free
                                                        </p>
                                                    </li>
                                                    <li class="flex items-start dark:text-gray-400 text-gray-500">
                                                        <div class="flex-shrink-0">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                                <path d="M13.4017 5.2793L6.12172 12.5593L2.59839 9.036" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            </svg>
                                                        </div>
                                                        <p class="ml-2 text-sm text-gray-800 dark:text-white/90">
                                                            5000 messaging limits
                                                        </p>
                                                    </li>
                                                    <li class="flex items-start">
                                                        <div class="flex-shrink-0 dark:text-gray-400 text-gray-500">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                                <path d="M13.4017 5.2793L6.12172 12.5593L2.59839 9.036" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            </svg>
                                                        </div>
                                                        <p class="ml-2 text-sm text-gray-800 dark:text-white/90">
                                                            Unlimited Projects
                                                        </p>
                                                    </li>
                                                    <li class="flex items-start">
                                                        <div class="flex-shrink-0 dark:text-gray-400 text-gray-500">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                                <path d="M13.4017 5.2793L6.12172 12.5593L2.59839 9.036" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            </svg>
                                                        </div>
                                                        <p class="ml-2 text-sm text-gray-800 dark:text-white/90">
                                                            Open AI Key Integration
                                                        </p>
                                                    </li>
                                                    <li class="flex items-start">
                                                        <div class="flex-shrink-0 dark:text-gray-400 text-gray-500">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                                <path d="M13.4017 5.2793L6.12172 12.5593L2.59839 9.036" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            </svg>
                                                        </div>
                                                        <p class="ml-2 text-sm text-gray-800 dark:text-white/90">
                                                            Unlimited Words
                                                        </p>
                                                    </li>
                                                    <li class="flex items-start">
                                                        <div class="flex-shrink-0 dark:text-gray-400 text-gray-500">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                                <path d="M13.4017 5.2793L6.12172 12.5593L2.59839 9.036" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                            </svg>
                                                        </div>
                                                        <p class="ml-2 text-sm text-gray-800 dark:text-white/90">
                                                            Consistent support
                                                        </p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="absolute hidden lg:block top-0 z-10">
                                        <svg width="1099" height="960" viewBox="0 0 1099 960" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.2" filter="url(#filter0_f_9282_10364)">
                                                <circle cx="479.835" cy="480.254" r="179.665" fill="#FF58D5"></circle>
                                            </g>
                                            <g opacity="0.1" filter="url(#filter1_f_9282_10364)">
                                                <circle cx="619.165" cy="480.254" r="179.665" fill="#4E6EFF"></circle>
                                            </g>
                                            <defs>
                                                <filter id="filter0_f_9282_10364" x="0.169678" y="0.589355" width="959.33" height="959.33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                                                    <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_9282_10364"></feGaussianBlur>
                                                </filter>
                                                <filter id="filter1_f_9282_10364" x="139.5" y="0.589355" width="959.33" height="959.33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                                                    <feGaussianBlur stdDeviation="150" result="effect1_foregroundBlur_9282_10364"></feGaussianBlur>
                                                </filter>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="py-14 md:py-28">
                    <div class="wrapper">
                        <div class="max-w-2xl mx-auto mb-12 text-center">
                            <h2 class="mb-3 font-bold text-center text-gray-800 text-3xl dark:text-white/90 md:text-title-lg">
                                Frequently Asked Questions
                            </h2>
                            <p class="max-w-md mx-auto leading-6 text-gray-500 dark:text-gray-400">
                                Answered all frequently asked questions, Still confused? feel
                                free contact with us
                            </p>
                        </div>
                        <div class="max-w-[600px] mx-auto">
                            <div class="space-y-4" x-data="{ activeItem: 1 }">
                                <div class="pb-5 border-b border-gray-200 dark:border-gray-800">
                                    <button type="button" class="flex items-center justify-between w-full text-left" >
                                        <span class="text-lg font-medium text-gray-800 dark:text-white/90">Do I get free updates?</span>
                                        <span class="flex-shrink-0 ml-6">
                                            <span x-show="activeItem === 1" class="text-xl text-gray-400">
                                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_9283_3094)">
                                                        <path d="M5 11.9194V13.9194H19V11.9194H5Z" fill="#98A2B3"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_9283_3094">
                                                            <rect width="24" height="24" fill="white" transform="translate(0 0.919434)"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </span>
                                            <span x-show="activeItem !== 1" class="text-xl text-gray-400">
                                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_9283_3101)">
                                                        <path d="M11 11.9194V5.91943H13V11.9194H19V13.9194H13V19.9194H11V13.9194H5V11.9194H11Z" fill="currentColor"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_9283_3101">
                                                            <rect width="24" height="24" fill="currentColor" transform="translate(0 0.919434)"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </span>
                                        </span>
                                    </button>
                                    <div class="mt-5" x-show="activeItem === 1">
                                        <p class="text-base leading-7 text-gray-500 dark:text-gray-400">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                            Aenean luctus magna quis tellus euismod, eget pharetra leo
                                            mollis. Donec eget lacus non elit blandit pharetra vitae
                                            volutpat libero.
                                        </p>
                                    </div>
                                </div>
                                <div class="pb-5 border-b border-gray-200 dark:border-gray-800">
                                    <button type="button" class="flex items-center justify-between w-full text-left">
                                        <span class="text-lg font-medium text-gray-800 dark:text-white/90">What does the number of "Projects" refer to?</span>
                                        <span class="flex-shrink-0 ml-6">
                                            <span x-show="activeItem === 2" class="text-xl text-gray-400">
                                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_9283_3094)">
                                                        <path d="M5 11.9194V13.9194H19V11.9194H5Z" fill="currentColor"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_9283_3094">
                                                            <rect width="24" height="24" fill="currentColor" transform="translate(0 0.919434)"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </span>
                                            <span x-show="activeItem !== 2" class="text-xl text-gray-400">
                                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_9283_3101)">
                                                        <path d="M11 11.9194V5.91943H13V11.9194H19V13.9194H13V19.9194H11V13.9194H5V11.9194H11Z" fill="currentColor"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_9283_3101">
                                                            <rect width="24" height="24" fill="currentColor" transform="translate(0 0.919434)"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </span>
                                        </span>
                                    </button>
                                    <div class="mt-4" x-show="activeItem === 2">
                                        <p class="text-base leading-7 text-gray-500 dark:text-gray-400">
                                            The number of "Projects" refers to the total number of
                                            separate workspaces you can create and manage within your
                                            account. Each project can have its own settings, team
                                            members, and resources.
                                        </p>
                                    </div>
                                </div>
                                <div class="pb-5 border-b border-gray-200 dark:border-gray-800">
                                    <button type="button" class="flex items-center justify-between w-full text-left">
                                        <span class="text-lg font-medium text-gray-800 dark:text-white">Can I upgrade to a higher plan?</span>
                                        <span class="flex-shrink-0 ml-6">
                                            <span x-show="activeItem === 3" class="text-xl text-gray-400">
                                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_9283_3094)">
                                                        <path d="M5 11.9194V13.9194H19V11.9194H5Z" fill="currentColor"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_9283_3094">
                                                            <rect width="24" height="24" fill="currentColor" transform="translate(0 0.919434)"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </span>
                                            <span x-show="activeItem !== 3" class="text-xl text-gray-400">
                                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_9283_3101)">
                                                        <path d="M11 11.9194V5.91943H13V11.9194H19V13.9194H13V19.9194H11V13.9194H5V11.9194H11Z" fill="currentColor"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_9283_3101">
                                                            <rect width="24" height="24" fill="currentColor" transform="translate(0 0.919434)"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </span>
                                        </span>
                                    </button>
                                    <div class="mt-4" x-show="activeItem === 3">
                                        <p class="text-base leading-7 text-gray-500 dark:text-gray-400">
                                            Yes, you can upgrade to a higher plan at any time. When
                                            you upgrade, you'll be charged the prorated difference for
                                            the remainder of your current billing cycle. Your new
                                            features will be available immediately after upgrading.
                                        </p>
                                    </div>
                                </div>
                                <div class="pb-5 border-b border-gray-200 dark:border-gray-800">
                                    <button type="button" class="flex items-center justify-between w-full text-left">
                                        <span class="text-lg font-medium text-gray-800 dark:text-white/90">What does "Unlimited Projects" mean?</span>
                                        <span class="flex-shrink-0 ml-6">
                                            <span x-show="activeItem === 4" class="text-xl text-gray-400">
                                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_9283_3094)">
                                                        <path d="M5 11.9194V13.9194H19V11.9194H5Z" fill="currentColor"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_9283_3094">
                                                            <rect width="24" height="24" fill="currentColor" transform="translate(0 0.919434)"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </span>
                                            <span x-show="activeItem !== 4" class="text-xl text-gray-400">
                                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_9283_3101)">
                                                        <path d="M11 11.9194V5.91943H13V11.9194H19V13.9194H13V19.9194H11V13.9194H5V11.9194H11Z" fill="currentColor"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_9283_3101">
                                                            <rect width="24" height="24" fill="currentColor" transform="translate(0 0.919434)"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </span>
                                        </span>
                                    </button>
                                    <div class="mt-4" x-show="activeItem === 4">
                                        <p class="text-base leading-7 text-gray-500 dark:text-gray-400">
                                            "Unlimited Projects" means you can create as many projects
                                            as you need without any restrictions. This allows you to
                                            organize your work efficiently without worrying about
                                            hitting a project limit.
                                        </p>
                                    </div>
                                </div>
                                <div class="pb-5 border-b border-gray-200 dark:border-gray-800">
                                    <button type="button" class="flex items-center justify-between w-full text-left">
                                        <span class="text-lg font-medium text-gray-800 dark:text-white/90">How can I add Open AI Key?</span>
                                        <span class="flex-shrink-0 ml-6">
                                            <span x-show="activeItem === 5" class="text-xl text-gray-400">
                                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_9283_3094)">
                                                        <path d="M5 11.9194V13.9194H19V11.9194H5Z" fill="currentColor"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_9283_3094">
                                                            <rect width="24" height="24" fill="currentColor" transform="translate(0 0.919434)"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </span>
                                            <span x-show="activeItem !== 5" class="text-xl text-gray-400">
                                                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clip-path="url(#clip0_9283_3101)">
                                                        <path d="M11 11.9194V5.91943H13V11.9194H19V13.9194H13V19.9194H11V13.9194H5V11.9194H11Z" fill="currentColor"></path>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_9283_3101">
                                                            <rect width="24" height="24" fill="currentColor" transform="translate(0 0.919434)"></rect>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </span>
                                        </span>
                                    </button>
                                    <div class="mt-4" x-show="activeItem === 5">
                                        <p class="text-base leading-7 text-gray-500 dark:text-gray-400">
                                            To add your OpenAI API key, go to your account settings
                                            and navigate to the "API Keys" section. Click on "Add New
                                            Key", paste your OpenAI API key, and save your changes.
                                            The key will be securely stored and used for all
                                            AI-powered features.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Landingpage