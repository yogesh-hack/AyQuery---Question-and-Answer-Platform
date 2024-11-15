/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  scrollbarWidth: {
    none: 'none',
  },
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar::-webkit-scrollbar': { display: 'none' },
        '.no-scrollbar': { scrollbarWidth: 'none', '-ms-overflow-style': 'none' },
      });
    },
  ],
};