/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        yellow: {
          DEFAULT: '#F4D03F',
          dark: '#F1C40F',
        },
        green: {
          DEFAULT: '#27AE60',
          dark: '#229954',
        },
        brown: {
          light: '#8B6F47',
          DEFAULT: '#6E4B1F',
          dark: '#5D3A1A',
        },
        cream: {
          DEFAULT: '#FFF9E6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
