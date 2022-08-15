/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html', './src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sourcecodepro: ['Source Code Pro', 'monospace'],
      },
      colors: {
        'brand-primary': '#937FBA',
        'light-grey': '#A3A8AF',
        'dark-grey': '#606060',
      },
    },
  },
  plugins: [],
};
