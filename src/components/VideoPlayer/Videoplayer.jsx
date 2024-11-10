import React, { useRef, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { useGesture } from 'react-use-gesture';
import ReactPlayer from 'react-player';

const Videoplayer = ({ videos }) => {
    const playerRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const [speed, setSpeed] = useState(1);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }));

    const bind = useGesture({
        onDoubleClick: ({ event }) => {
            if (event.clientX < window.innerWidth / 3) {
                // Double tap on left: Move 5 seconds backward
                playerRef.current.seekTo(playerRef.current.getCurrentTime() - 5);
            } else if (event.clientX > (2 * window.innerWidth) / 3) {
                // Double tap on right: Move 10 seconds forward
                playerRef.current.seekTo(playerRef.current.getCurrentTime() + 10);
            } else {
                // Double tap in the middle: Play/Pause
                setPlaying(!playing);
            }
        },
        onPointerDown: ({ event }) => {
            if (event.clientX < window.innerWidth / 3) {
                // Press and hold on the left side: Go back at 1x speed
                setSpeed(0.5);
            } else if (event.clientX > (2 * window.innerWidth) / 3) {
                // Press and hold on the right: Go forward at 2x speed
                setSpeed(2);
            }
        },
        onPointerUp: () => {
            setSpeed(1);
        },
    });

    const handleVideoClick = (videoUrl) => {
        setSelectedVideo(videoUrl);
        setPlaying(true);
    };

    return (
        <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
  {/* Video Player Section */}
  <div className="video-player bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 mb-8">
    <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 pb-4">Watch Video</h2>
    <animated.div
      style={{
        width: '100%',
        height: '8px',
        background: 'rgba(0, 0, 0, 0.2)',
        transform: xy.to((x) => `translateX(${x}px)`),
      }}
    />
    <div className="player-container relative pt-[56.25%]">
      <ReactPlayer
        ref={playerRef}
        url={selectedVideo}
        playing={playing}
        controls
        width="100%"
        height="100%"
        playbackRate={speed}
        onEnded={() => setPlaying(false)}
      />
    </div>
  </div>

  {/* Video List Section */}
  <div className="video-list">
    <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">Video List</h2>
    <div className="card-category-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <ul>
        {videos.map((videoUrl, index) => (
          <li key={index} className="video-card">
            <div className="overlay-card relative bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <img
                className="w-full h-[200px] object-cover rounded-t-lg"
                src="https://www.dropbox.com/s/lsxxizyph3ic7zb/frog-4296784_640.jpg?raw=1"
                alt={`Video Thumbnail ${index + 1}`}
              />
              <div className="card-content p-4">
                <span className="text-xl font-medium text-gray-900 dark:text-gray-100">
                  Sample Video {index + 1}
                </span>
              </div>
              <span className="card-link absolute bottom-4 left-4 text-white bg-indigo-600 hover:bg-indigo-700 py-2 px-4 rounded-full cursor-pointer">
                <button onClick={() => handleVideoClick(videoUrl)}>▶️ Play</button>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
</div>

    )
}

export default Videoplayer