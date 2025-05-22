import React, { useState } from 'react';
import { FiPlay, FiStar, FiChevronRight, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
function MovieShow() {
   const [activeTab, setActiveTab] = useState('movies');
  
  // Sample data
  const genres = [
    "Action", "Adventure", "Animation", "Comedy", "Crime", 
    "Documentary", "Drama", "Fantasy", "Horror", "Mystery", 
    "Romance", "Sci-Fi", "Thriller", "Western"
  ];

  const latestReleases = [
    { id: 1, title: "Dune: Part Two", type: "movie", year: 2024, rating: 8.7, poster: "https://m.media-amazon.com/images/M/MV5BN2QyZGU4ZDctOWMzMy00NTc5LThlOGQtODhmNDI1NmY5YzAwXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_FMjpg_UX1000_.jpg" },
    { id: 2, title: "The Fall Guy", type: "movie", year: 2024, rating: 7.2, poster: "https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg" },
    { id: 3, title: "Shōgun", type: "tv", year: 2024, rating: 9.1, poster: "https://m.media-amazon.com/images/M/MV5BODBiNzBjMGUtYzFkNi00YThlLThjZDItOTJkOTBmYWI0YWIyXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg" },
    { id: 4, title: "X-Men '97", type: "tv", year: 2024, rating: 8.9, poster: "https://m.media-amazon.com/images/M/MV5BMTg3MzY5NzQzNF5BMl5BanBnXkFtZTcwOTg0MTMyMw@@._V1_.jpg" },
    { id: 5, title: "Godzilla x Kong", type: "movie", year: 2024, rating: 6.5, poster: "https://m.media-amazon.com/images/M/MV5BZTdmMWFkZGQtYjE5ZC00Y2M3LWJjYjctZDE5YzhiNzU1OTAzXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg" }
  ];

  const trendingNow = [
    { id: 6, title: "The Boys", type: "tv", year: 2022, rating: 8.7, poster: "https://m.media-amazon.com/images/M/MV5BOTEyNDJhMDAtY2U5ZS00OTMzLTkwODktMjU3MjFkZWVlMGYyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_FMjpg_UX1000_.jpg" },
    { id: 7, title: "Oppenheimer", type: "movie", year: 2023, rating: 8.5, poster: "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_FMjpg_UX1000_.jpg" },
    { id: 8, title: "Stranger Things", type: "tv", year: 2022, rating: 8.7, poster: "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg" },
    { id: 9, title: "Barbie", type: "movie", year: 2023, rating: 7.0, poster: "https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg" },
    { id: 10, title: "The Last of Us", type: "tv", year: 2023, rating: 8.8, poster: "https://m.media-amazon.com/images/M/MV5BZGUzYTI3M2EtZmM0Yy00NGUyLWI4ODEtN2Q3ZGJlYzhhZjU3XkEyXkFqcGdeQXVyNTM0OTY1OQ@@._V1_FMjpg_UX1000_.jpg" }
  ];

  const popularMovies = [
    { id: 11, title: "Inception", type: "movie", year: 2010, rating: 8.8, poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg" },
    { id: 12, title: "The Dark Knight", type: "movie", year: 2008, rating: 9.0, poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg" },
    { id: 13, title: "Pulp Fiction", type: "movie", year: 1994, rating: 8.9, poster: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg" },
    { id: 14, title: "The Shawshank Redemption", type: "movie", year: 1994, rating: 9.3, poster: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDY2XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg" },
    { id: 15, title: "Fight Club", type: "movie", year: 1999, rating: 8.8, poster: "https://m.media-amazon.com/images/M/MV5BNDIzNDU0YzEtYzE5Ni00ZjlkLTk5ZjgtNjM3NWE4YzA3Nzk3XkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_FMjpg_UX1000_.jpg" }
  ];

  const popularTVShows = [
    { id: 16, title: "Breaking Bad", type: "tv", year: 2013, rating: 9.5, poster: "https://m.media-amazon.com/images/M/MV5BYmQ4YWMxYjUtNjZmYi00MDQ1LWFjMjMtNjA5ZDdiYjdiODU5XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg" },
    { id: 17, title: "Game of Thrones", type: "tv", year: 2019, rating: 9.2, poster: "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_FMjpg_UX1000_.jpg" },
    { id: 18, title: "Friends", type: "tv", year: 2004, rating: 8.9, poster: "https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_FMjpg_UX1000_.jpg" },
    { id: 19, title: "The Office", type: "tv", year: 2013, rating: 9.0, poster: "https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_FMjpg_UX1000_.jpg" },
    { id: 20, title: "The Mandalorian", type: "tv", year: 2023, rating: 8.7, poster: "https://m.media-amazon.com/images/M/MV5BZDhlMzY0ZGItZTcyNS00ZTAxLWIyMmYtZGQ2ODg5OWZiYmJkXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_FMjpg_UX1000_.jpg" }
  ];

  const renderContent = () => {
    switch(activeTab) {
      case 'movies':
        return (
          <>
            <MediaRow title="Latest Movie Releases" items={latestReleases.filter(item => item.type === 'movie')} />
            <MediaRow title="Popular Movies" items={popularMovies} />
          </>
        );
      case 'tv':
        return (
          <>
            <MediaRow title="Latest TV Show Releases" items={latestReleases.filter(item => item.type === 'tv')} />
            <MediaRow title="Popular TV Shows" items={popularTVShows} />
          </>
        );
      case 'genres':
        return (
          <div className="mt-6">
            <h2 className="text-2xl font-bold mb-6">Browse by Genre</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
              {genres.map(genre => (
                <div key={genre} className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                  <h3 className="font-medium">{genre}</h3>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return (
          <>
            <MediaRow title="Trending Now" items={trendingNow} />
            <MediaRow title="Latest Releases" items={latestReleases} />
            <MediaRow title="Popular Movies" items={popularMovies} />
            <MediaRow title="Popular TV Shows" items={popularTVShows} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#0d1117] text-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">AyStreamX</h1>
            
            <div className="relative w-1/3">
              <input
                type="text"
                placeholder="Search movies, TV shows..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-full bg-gray-50 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
            </div>
          </div>
        </div>
      </header>
      <div class="isolate">
   <div class="group">
      <div class="xl:not-group-data-sidebar-collapsed:ml-(--container-2xs)">
         <div class="sticky top-20 z-10 bg-white/90 backdrop-blur-sm dark:bg-gray-950/90 flex items-center justify-between gap-x-8 px-4 py-4 sm:px-6">
            <div class="flex min-w-0 shrink items-center gap-x-4">
               <button type="button" class="xl:hidden relative *:relative before:absolute before:top-1/2 before:left-1/2 before:size-8 before:-translate-1/2 before:rounded-md before:bg-white/75 before:backdrop-blur-sm dark:before:bg-gray-950/75 data-hover:before:bg-gray-950/5 dark:data-hover:before:bg-white/5 focus:outline-hidden data-focus:before:outline-2 data-focus:before:outline-blue-700 data-focus:before:outline-solid" data-headlessui-state="">
                  <svg viewBox="0 0 16 14" fill="none" class="shrink-0 stroke-gray-950 dark:stroke-white h-3.5 shrink-0">
                     <path d="M5.5 0.5H2.5C1.39543 0.5 0.5 1.39543 0.5 2.5V11.5C0.5 12.6046 1.39543 13.5 2.5 13.5H5.5M5.5 0.5H13.5C14.6046 0.5 15.5 1.39543 15.5 2.5V11.5C15.5 12.6046 14.6046 13.5 13.5 13.5H5.5M5.5 0.5V13.5"></path>
                  </svg>
               </button>
               <div class="min-w-0">
                  <nav aria-label="Breadcrumb" class="flex items-center gap-x-2 text-sm/6"><a class="min-w-0 shrink-0 text-gray-950 dark:text-white" href="/">Movies</a><span class="text-gray-950/25 dark:text-white/25">/</span><span class="min-w-0 truncate text-gray-950 last:text-gray-600 dark:last:text-gray-400">Trending</span></nav>
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
                  <a href="/">Movies</a><a href="/interviews">Shows</a><a href="/resources">Playlist</a>
                  <button class="inline-flex items-center gap-x-2 focus:not-data-focus:outline-none" id="headlessui-menu-button-«re»" type="button" aria-haspopup="menu" aria-expanded="false" data-headlessui-state="">
                     Favorites
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
                  <img alt="" class="absolute inset-0 h-full w-full mask-l-from-60% object-cover object-center opacity-40" src="https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg"/>
                  <div class="absolute inset-0 rounded-t-2xl outline-1 -outline-offset-1 outline-gray-950/10 dark:outline-white/10"></div>
               </div>
               <div class="mx-auto max-w-6xl">
                  <div class="relative">
                     <div class="px-4 pt-48 pb-12 lg:py-24">
                        <h1 class="text-4xl font-bold">The Barbie</h1>
                        <p class="mt-7 max-w-lg text-base/7 text-pretty text-gray-600 dark:text-gray-400">A comprehensive journey that helps you navigate uncertainty and make choices aligned with your values and goals.</p>
                        <div class="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm/7 font-semibold text-gray-950 sm:gap-3 dark:text-white">
                           <div class="flex items-center gap-1.5">
                              <svg viewBox="0 0 16 16" fill="none" class="stroke-gray-950/40 dark:stroke-white/40 h-4 shrink-0">
                                 <path d="M13.5 12.5V.5H4.5M13.5 12.5l-.26.39c-.45.67-.45 1.48 0 2.15l.26.46H4c-.83 0-1.5-.67-1.5-1.5v0M13.5 12.5H4.5M2.5 14V2.5C2.5 1.4 3.4.5 4.5.5v0M2.5 14c0-.83.67-1.5 1.5-1.5h.5M4.5.5v12" stroke-linejoin="round"></path>
                              </svg>
                              4 Seasons
                           </div>
                           <span class="hidden text-gray-950/25 sm:inline dark:text-white/25">·</span>
                           <div class="flex items-center gap-1.5">
                              <svg viewBox="0 0 16 16" fill="none" class="stroke-gray-950/40 dark:stroke-white/40 h-4 shrink-0">
                                 <path d="M10.5 4.5H6.5c-.55 0-1 .45-1 1v6m4-7h3c.55 0 1 .45 1 1v9c0 .55-.45 1-1 1H6.5c-.55 0-1-.45-1-1v-3m4-7V1.5c0-.55-.45-1-1-1h-7c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h3"></path>
                              </svg>
                              20 Episodes
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
                           <Link to={`/movies/Compass-full-course`}  class="inline-flex items-center gap-x-2 rounded-full bg-gray-950 px-3 py-0.5 text-sm/7 font-semibold text-white hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600" href="/landscape-of-choice">
                              <svg viewBox="0 0 8 8" fill="none" class="fill-white h-2 shrink-0">
                                 <path d="M7.25 3.567a.5.5 0 0 1 0 .866L2.75 7.031a.5.5 0 0 1-.75-.433V1.402a.5.5 0 0 1 .75-.433l4.5 2.598Z"></path>
                              </svg>
                              Play Trailer
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </main>
      </div>
   </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex border-b border-gray-200 dark:border-gray-800 mb-8">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 font-medium ${activeTab === 'all' ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'}`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab('movies')}
            className={`px-4 py-2 font-medium ${activeTab === 'movies' ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'}`}
          >
            Movies
          </button>
          <button
            onClick={() => setActiveTab('tv')}
            className={`px-4 py-2 font-medium ${activeTab === 'tv' ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'}`}
          >
            TV Shows
          </button>
          <button
            onClick={() => setActiveTab('genres')}
            className={`px-4 py-2 font-medium ${activeTab === 'genres' ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400' : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'}`}
          >
            Genres
          </button>
        </div>

        {/* Content */}
        {renderContent()}
      </main>
    </div>
    </div>
  );
};

// Reusable component for media rows
const MediaRow = ({ title, items }) => {
  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <button className="flex items-center text-blue-600 dark:text-blue-400 hover:underline">
          View All <FiChevronRight />
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {items.map(item => (
          <div key={item.id} className="group">
            <div className="relative overflow-hidden rounded-lg mb-3">
              <img 
                src={item.poster} 
                alt={item.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                <div className="flex items-center gap-1 text-white">
                  <FiStar className="text-yellow-400" />
                  <span>{item.rating}</span>
                </div>
                <button className="self-center bg-red-600 hover:bg-red-700 text-white rounded-full p-3 transition-colors">
                  <FiPlay />
                </button>
              </div>
              {item.type === 'tv' && (
                <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  TV
                </span>
              )}
            </div>
            <h3 className="font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{item.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{item.year}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovieShow