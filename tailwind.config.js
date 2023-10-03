/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      'md': '960px',
      'lg': '1440px',
    },
    colors: {
      transparent: 'transparent',
      black: '#000000',
      'white': '#ffffff',
      'red': '#CC0000',
    },
    extend: {},
  },
  plugins: [],
}

