import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const swiperRef = useRef(null);

  const slides = [
    {
      id: 1,
      titlePart1: "Neko",
      titlePart2: "MaGiX",
      description: "Join me every night at 8PM PCT on Twitch for the best retro game streams",
      ctaText: "Subscribe Now!",
      ctaIcon: "twitch",
      bgImageMobile: "assets/img/str1/samples/hero-slide-1.jpg",
      bgImageDesktop: "assets/img/str1/samples/hero-slide-1-with-decoration.jpg",
      image: "assets/img/str1/samples/hero-streamer.png",
      colorScheme: "dark"
    },
    {
      id: 2,
      date: "Streams Archives",
      title: "Ram Goddess Best Plays Video",
      ctaText: "See the video",
      bgImage: "assets/img/str1/samples/hero-slide-2.jpg",
      colorScheme: "dark"
    },
    {
      id: 3,
      date: "March 6th, 2023",
      title: "Witch Hunters Deluxe Pack Unboxing",
      ctaText: "Read More...",
      bgImage: "assets/img/str1/samples/hero-slide-3.jpg",
      colorScheme: "light"
    }
  ];

  return (
    <div className="w-full max-w-[1320px] mx-auto min-w-[1500px]:px-[90px]">
      <div className="h-[420px] md:h-[460px] lg:h-[360px] relative z-10">
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          navigation={{
            nextEl: '.hero-swiper-next',
            prevEl: '.hero-swiper-prev',
          }}
          pagination={{
            el: '.hero-swiper-pagination',
            clickable: true,
            renderBullet: (index, className) => {
              return `<span class="${className}" role="button" aria-label="Go to slide ${index + 1}"></span>`;
            },
          }}
          onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
          className="h-full w-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div className={`relative isolate h-full w-full ${slide.colorScheme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
                <div className="container h-full">
                  {/* Slide content based on type */}
                  {slide.titlePart1 ? (
                    <div className="grid h-full grid-cols-12 gap-x-5 md:gap-x-6 lg:gap-x-7.5 place-items-center md:place-items-stretch">
                      <div className="col-span-10 col-start-2 self-center md:col-span-5 lg:col-start-2 text-center md:text-left">
                        <div className="md:-ml-2 xl:-ml-3">
                          <div className="text-5xl font-bold leading-none tracking-tighter text-white md:text-6xl lg:text-8xl xl:text-9.5xl">
                            {slide.titlePart1}
                          </div>
                          <div className="-mt-[0.1em] text-6xl font-bold leading-none tracking-tighter text-accent md:text-7xl lg:text-9xl xl:-mt-[0.22em] xl:text-10.5xl">
                            {slide.titlePart2}
                          </div>
                        </div>
                        <div className="mt-3 md:mt-1 xl:-mt-2.5 lg:pb-9 xl:pb-12">
                          <div className="mb-7 text-base font-medium leading-8 text-white lg:mb-10 lg:text-lg xl:mb-12 xl:pr-20">
                            {slide.description}
                          </div>
                          <a href="#" className="inline-flex text-center font-bold leading-none transition-colors uppercase justify-center gap-x-3 py-4 md:py-[21px] px-5 lg:px-10 text-white bg-social-twitch hover:bg-social-twitch/90 w-full lg:w-[75%] xl:w-[55%]">
                            <svg className="h-4 w-4" fill="currentColor">
                              <use xlinkHref={`assets/img/social-icons.svg#${slide.ctaIcon}`}></use>
                            </svg>
                            {slide.ctaText}
                          </a>
                        </div>
                      </div>
                      <div className="col-span-6 col-start-7 hidden md:block">
                        <div className="lg:absolute lg:bottom-0 xl:ml-6">
                          <img src={slide.image} alt="" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="grid h-full grid-cols-12 gap-y-10 md:gap-x-6 lg:gap-x-[30px] place-items-center">
                      <div className="col-span-full md:col-span-8 md:col-start-3 lg:col-span-10 lg:col-start-2 xl:col-span-6 xl:col-start-4">
                        <div className="px-6 text-center">
                          {slide.date && (
                            <div className="mb-1 flex flex-wrap justify-center gap-1 text-accent lg:mb-2 font-bold uppercase">
                              <div>{slide.date}</div>
                            </div>
                          )}
                          <h2 className="mb-6 text-4xl font-bold leading-none tracking-tighter sm:text-5xl md:mb-8 md:text-6xl md:leading-none lg:text-7xl lg:mb-12 lg:leading-none text-white xl:text-[74px]">
                            <a href="_str1-single.html" className="hover:opacity-80 transition-opacity duration-300">
                              {slide.title}
                            </a>
                          </h2>
                          <a href="#" className={`inline-flex text-center font-bold leading-none transition-colors uppercase justify-center gap-x-3 py-4 px-4 md:py-[18px] lg:px-8 text-sm ${slide.colorScheme === 'light' ? 'text-gray-900 bg-accent hover:bg-accent/90' : 'text-white bg-primary hover:bg-primary/90'}`}>
                            {slide.ctaText}
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Background images */}
                {slide.bgImageMobile && (
                  <>
                    <div className="absolute inset-0 -z-10 md:hidden">
                      <div 
                        className="w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-out" 
                        style={{ backgroundImage: `url(${slide.bgImageMobile})`, opacity: activeSlide === index ? 1 : 0 }}
                      />
                    </div>
                    <div className="absolute inset-0 -z-10 hidden md:block">
                      <div 
                        className="w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-out" 
                        style={{ backgroundImage: `url(${slide.bgImageDesktop || slide.bgImage})`, opacity: activeSlide === index ? 1 : 0 }}
                      />
                    </div>
                  </>
                )}

                {/* Overlays */}
                {slide.bgImage && (
                  <>
                    <div 
                      className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat transition-transform duration-[8000ms] ease-out" 
                      style={{ 
                        backgroundImage: `url(${slide.bgImage})`,
                        transform: activeSlide === index ? 'scale(1.1)' : 'scale(1)'
                      }}
                    />
                    <div className={`absolute inset-0 -z-10 ${slide.colorScheme === 'light' ? 'bg-gradient-to-b from-transparent to-black' : 'bg-gray-900/60'}`} />
                  </>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination */}
        <div className="hero-swiper-pagination absolute !right-2 sm:!right-4 xl:!-right-16 top-1/2 !left-auto -translate-y-1/2 !bottom-auto z-20 flex !w-[34px] flex-col items-end gap-0.5" />

        {/* Navigation */}
        <div className="flex xl:flex-col absolute z-10 right-0 xl:-right-16 bottom-0 justify-center gap-y-4">
          <button className="hero-swiper-prev flex w-8 aspect-square items-center justify-center text-white hover:cursor-pointer hover:text-accent xl:rotate-90 bg-gray-900 xl:bg-transparent">
            <svg className="h-2.5 w-1.5" fill="currentColor">
              <use xlinkHref="assets/img/str1/sprite.svg#arrow-left-pixel-alt"></use>
            </svg>
          </button>
          <button className="hero-swiper-next flex w-8 aspect-square items-center justify-center text-white hover:cursor-pointer hover:text-accent xl:rotate-90 bg-gray-900 xl:bg-transparent">
            <svg className="h-2.5 w-1.5" fill="currentColor">
              <use xlinkHref="assets/img/str1/sprite.svg#arrow-right-pixel-alt"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;