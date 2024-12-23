const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media',
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    colors: {
      perla: '#f3f3f3',
      'light-mint': '#a5e2e2',
      mint: '#2bc9c8',
      marine: '#2ba2c8',
      turchese: '#2574a9',
    },
    extend: {},
  },
  variants: {
    extend: {
      textColor: ['visited'],
    },
  },
  plugins: [],
};
