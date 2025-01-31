/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        main: ['Advent Pro', 'sans-serif'],
        chakra: ['Chakra Petch', 'sans-serif'],
      },
      colors: {
        main: '#0a0a0a',
        secondary: '#a33327',
        accent: '#5CDB95',
      },
    },
  },
  plugins: [],
};
