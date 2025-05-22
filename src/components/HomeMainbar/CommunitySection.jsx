const CommunitySection = () => {
  return (
    <section className="py-6 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-100 to-purple-80 dark:from-indigo-900 dark:to-purple-80">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Text Content */}
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold leading-tight text-gray-900 dark:text-white">
            A community of makers that<br />
            <span className="text-blue-500">learn and grow together</span>
          </h1>
          <p className="mt-6 text-gray-700 dark:text-gray-300 text-base md:text-sm">
            Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end">
          <img
            className="w-60 h-60 md:w-60 md:h-60 rounded-full object-cover"
            src="https://preview.cruip.com/community/images/hero-image.png"
            alt="Community"
          />
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
