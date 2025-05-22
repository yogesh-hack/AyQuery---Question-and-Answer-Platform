import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FiPlus, FiEdit } from 'react-icons/fi';

function Blogs() {
  const [userArticles, setUserArticles] = useState([]);
  const navigate = useNavigate();
  // Sample article data
  const articles = [
    {
      id: 1,
      title: "Our first office",
      excerpt: "Over the past year, Volosoft has undergone many changes! After months of preparation.",
      image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-1.png",
      slug: "our-first-office",
      readTime: "2 minutes"
    },
    {
      id: 2,
      title: "Enterprise design tips",
      excerpt: "Over the past year, Volosoft has undergone many changes! After months of preparation.",
      image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-2.png",
      slug: "enterprise-design-tips",
      readTime: "12 minutes"
    },
    {
      id: 3,
      title: "We partnered with Google",
      excerpt: "Over the past year, Volosoft has undergone many changes! After months of preparation.",
      image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-3.png",
      slug: "partnered-with-google",
      readTime: "8 minutes"
    },
    {
      id: 4,
      title: "Our first project with React",
      excerpt: "Over the past year, Volosoft has undergone many changes! After months of preparation.",
      image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/article/blog-4.png",
      slug: "first-react-project",
      readTime: "4 minutes"
    }
  ];

  return (
    <div className="px-4 mt-20 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className='text-gray-900 dark:text-white text-4xl font-bold'>Read Latest Articles</h2>
        <button
          onClick={() => navigate('/articles/write')}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
        >
          <FiPlus />
          Write Article
        </button>
      </div>
      
      {/* Latest Articles */}
      <div className="mb-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>

      {/* Your Published Articles */}
      <div className="mt-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className='text-gray-900 dark:text-white text-3xl font-bold'>Your Published Articles</h2>
          <button
            onClick={() => navigate('/articles/me')}
            className="flex items-center gap-2 px-4 py-2 text-blue-600 dark:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          >
            <FiEdit />
            View All
          </button>
        </div>
        
        {userArticles.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {userArticles.slice(0, 3).map((article) => (
              <ArticleCard key={article.id} article={article} isOwner />
            ))}
          </div>
        ) : (
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              You haven't published any articles yet
            </p>
            <button
              onClick={() => navigate('/articles/new')}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Write Your First Article
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

// Separate component for the article card
function ArticleCard({ article }) {
  return (
    <article className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
      <div className="overflow-hidden rounded-t-xl">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h2 className="mb-2 text-xl font-bold leading-tight text-gray-900 dark:text-white line-clamp-2">
          <Link to={`/Articles/blog/${article.slug}`} className="hover:text-blue-600 dark:hover:text-blue-400">
            {article.title}
          </Link>
        </h2>
        
        <p className="mb-4 text-gray-600 dark:text-gray-300 line-clamp-3">
          {article.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <Link 
            to={`/Articles/blog/${article.slug}`}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-medium shadow-sm hover:from-blue-600 hover:to-blue-700 transition-all duration-300 group-hover:shadow-md"
          >
            Read Now
            <svg 
              className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </Link>
          
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {article.readTime} read
          </span>
        </div>
      </div>
      
      {/* Hover tilt effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
    </article>
  );
}

export default Blogs