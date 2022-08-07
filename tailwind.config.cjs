/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-primary': '#937FBA',
        'light-grey': '#A3A8AF',
        'dark-grey': '#606060',
      },
    },
  },
  plugins: [],
};
