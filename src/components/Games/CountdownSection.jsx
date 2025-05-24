import { useEffect, useState } from 'react';

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [progress, setProgress] = useState(0);

  // Set your target date here (YYYY, MM-1, DD, HH, MM, SS)
  const targetDate = new Date(2024, 11, 31, 19, 0, 0);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });

        // Calculate progress (example: percentage of time passed in a day)
        const totalDaySeconds = 24 * 60 * 60;
        const elapsedTodaySeconds = (hours * 60 * 60) + (minutes * 60) + seconds;
        const dailyProgress = (elapsedTodaySeconds / totalDaySeconds) * 100;
        setProgress(dailyProgress);
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft(); // Initial call

    return () => clearInterval(timer);
  }, []);

  // Format numbers to always show 2 digits
  const formatNumber = (num) => {
    return num < 10 ? `0${num}` : num.toString();
  };

  return (
    <div className="mx-auto max-w-[1360px] px-5 pb-20 md:pb-24 lg:pb-[150px]">
      <div className="relative min-h-[220px] bg-cover bg-no-repeat" style={{ backgroundImage: "url('https://valkivid.dan-fisher.dev/assets/img/str1/countdown-bg.jpg')" }}>
        <div className="container relative z-10 text-white">
          <div className="grid grid-cols-12 gap-x-5 gap-y-8 py-7 px-2 md:gap-x-6 lg:gap-y-12 lg:gap-x-7.5 lg:py-11 lg:px-0">
            {/* Left content */}
            <div className="col-span-full md:col-span-5 md:col-start-3 xl:-ml-7.5">
              <div className="text-lg font-bold">Next Stream</div>
              <h3 className="mb-3 text-2xl font-bold leading-none md:text-2.5xl lg:mb-4 lg:text-4xl xl:text-[42px]">
                Let's Play: Witch Hunters
              </h3>
              <div className="text-base font-medium leading-normal">
                I'll be playing the new DLC for Witch Hunters story mode. I'll be with guest streamer Game-Huntress. See you there!
              </div>
            </div>

            {/* Right content - Countdown */}
            <div className="col-span-full flex flex-wrap items-center justify-center gap-y-4 self-center md:col-span-4 md:col-start-9 lg:gap-y-0">
              <div className="mb-4 grid w-full basis-full grid-cols-4 font-bold lg:mb-5 xl:pt-2.5 [&>div]:before:absolute [&>div]:before:-left-0.5 [&>div]:before:top-0 [&>div]:before:text-xl [&>div]:before:content-[':'] [&>div]:md:before:text-3xl [&>div]:lg:before:-left-1 [&>div]:xl:before:text-[42px] [&>div]:xl:before:leading-none [&>div:first-child]:before:hidden">
                {/* Days */}
                <div className="relative flex flex-col items-center">
                  <div className="text-xl md:text-3xl xl:mb-1 xl:text-[42px] xl:leading-none">
                    {formatNumber(timeLeft.days)}
                  </div>
                  <div className="leading-none">Days</div>
                </div>

                {/* Hours */}
                <div className="relative flex flex-col items-center">
                  <div className="text-xl md:text-3xl xl:mb-1 xl:text-[42px] xl:leading-none">
                    {formatNumber(timeLeft.hours)}
                  </div>
                  <div className="leading-none">Hours</div>
                </div>

                {/* Minutes */}
                <div className="relative flex flex-col items-center">
                  <div className="text-xl md:text-3xl xl:mb-1 xl:text-[42px] xl:leading-none">
                    {formatNumber(timeLeft.minutes)}
                  </div>
                  <div className="leading-none">Mins</div>
                </div>

                {/* Seconds */}
                <div className="relative flex flex-col items-center">
                  <div className="text-xl md:text-3xl xl:mb-1 xl:text-[42px] xl:leading-none">
                    {formatNumber(timeLeft.seconds)}
                  </div>
                  <div className="leading-none">Secs</div>
                </div>
              </div>

              {/* Progress bar */}
              <div className="h-2 basis-full overflow-hidden rounded-full bg-gray-900">
                <div 
                  className="h-full rounded-full bg-accent" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay effects */}
        <div className="absolute inset-0 z-[1] bg-black mix-blend-color"></div>
        <div className="absolute inset-0 z-[2] bg-primary mix-blend-multiply"></div>
        <div className="absolute inset-0 z-[3] bg-gray-900 mix-blend-screen"></div>
        
        {/* Decorative image */}
        <img 
          className="pointer-events-none absolute -left-8 bottom-0 z-[4] hidden md:block" 
          src={"https://valkivid.dan-fisher.dev/assets/img/str1/countdown-hero.png"}
          alt="Streamer character" 
        />
      </div>
    </div>
  );
};

export default CountdownSection;