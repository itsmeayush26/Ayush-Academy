/* @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: "class",
  content: [
    './index.html',                        // Make sure index.html is included
    './src/**/*.{js,jsx,ts,tsx}',           // Scan all JS, JSX, TS, TSX files inside src
  ],
  theme: {
    extend: {
      colors: {
        brand: '#1da1f2',                   // Custom brand color
      },
    },
  },
  plugins: [],
};

