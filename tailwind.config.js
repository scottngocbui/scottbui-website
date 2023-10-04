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
      white: '#ffffff',
      red: '#CC0000',
      pblue: '#AAB9CF',
      gray: '#545763',
      blue: '#BDD4E7',
      rblack: '#212227',
      dgray: '#637074'
    },
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'mamba': "url('./assets/black-mamba.png')"
      }
    },
  },
  plugins: [],
}

