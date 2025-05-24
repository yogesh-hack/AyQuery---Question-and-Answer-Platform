import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const GamesSwiper = () => {
  const swiperRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  const games = [
    {
      id: 1,
      title: "a-Rex Legends",
      videos: 35,
      image: "https://valkivid.dan-fisher.dev/assets/img/str1/samples/game-1-170x220.jpg"
    },
    {
      id: 2,
      title: "Xenowatch",
      videos: 24,
      image: "https://valkivid.dan-fisher.dev/assets/img/str1/samples/game-2-170x220.jpg"
    },
    {
      id: 3,
      title: "Witch Hunters",
      videos: 20,
      image: "https://valkivid.dan-fisher.dev/assets/img/str1/samples/game-3-170x220.jpg"
    },
    {
      id: 4,
      title: "Super Robo Bross II",
      videos: 17,
      image: "https://valkivid.dan-fisher.dev/assets/img/str1/samples/game-4-170x220.jpg"
    },
    {
      id: 5,
      title: "Mochi's Island",
      videos: 12,
      image: "https://valkivid.dan-fisher.dev/assets/img/str1/samples/game-5-170x220.jpg"
    },
    {
      id: 6,
      title: "Rony da Hedgehog",
      videos: 9,
      image: "https://valkivid.dan-fisher.dev/assets/img/str1/samples/game-6-170x220.jpg"
    },
    {
      id: 7,
      title: "Zodiac Goddess",
      videos: 7,
      image: "https://valkivid.dan-fisher.dev/assets/img/str1/samples/game-7-170x220.jpg"
    }
  ];

  return (
    <div className="pb-20 md:pb-24 lg:pb-[120px]">
      <div className="container">
        {/* Section Title */}
        <div className="mb-10 md:mb-12 lg:mb-16 xl:mb-20">
          <h2 className="text-2.5xl font-bold tracking-tighter text-gray-900 before:text-accent before:content-['.'] dark:text-white sm:text-3.5xl md:text-4xl lg:text-[62px] lg:leading-none">
            Top Streamed Games
          </h2>
        </div>

        {/* Games Swiper */}
        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView="auto"
          navigation={{
            prevEl: prevButtonRef.current,
            nextEl: nextButtonRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevButtonRef.current;
            swiper.params.navigation.nextEl = nextButtonRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="!overflow-visible"
        >
          {games.map((game) => (
            <SwiperSlide key={game.id} className="!w-[159.5px]">
              <a className="flex flex-col gap-y-5 group" href="#">
                <figure className="relative overflow-hidden">
                  <img 
                    className="w-full object-cover aspect-[17/22] transition-transform duration-300 group-hover:scale-110" 
                    src={game.image} 
                    alt={game.title} 
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all bg-accent/80 duration-300">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-7.5 aspect-square bg-gray-900 grid place-items-center text-white scale-90 group-hover:scale-100 transition-all duration-300">
                      <svg className="h-2.5 aspect-square" fill="currentColor">
                        <use xlinkHref="assets/img/str1/sprite.svg#plus-thinest"></use>
                      </svg>
                    </div>
                  </div>
                </figure>
                <div className="leading-tight">
                  <h5 className="font-bold text-gray-900 dark:text-white mb-1.5 group-hover:text-accent">
                    {game.title}
                  </h5>
                  <div className="text-gray-500">{game.videos} Videos</div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-x-3.5 pt-8 sm:pt-10 md:pt-12 lg:pt-16">
          <button 
            ref={prevButtonRef}
            className="flex w-8 aspect-square items-center justify-center text-white hover:cursor-pointer hover:text-accent"
            aria-label="Previous slide"
          >
            <svg className="h-2.5 w-1.5" fill="currentColor">
              <use xlinkHref="assets/img/str1/sprite.svg#arrow-left-pixel-alt"></use>
            </svg>
          </button>
          <button 
            ref={nextButtonRef}
            className="flex w-8 aspect-square items-center justify-center text-white hover:cursor-pointer hover:text-accent"
            aria-label="Next slide"
          >
            <svg className="h-2.5 w-1.5" fill="currentColor">
              <use xlinkHref="assets/img/str1/sprite.svg#arrow-right-pixel-alt"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GamesSwiper;