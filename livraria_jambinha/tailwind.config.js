const { addDynamicIconSelectors } = require('@iconify/tailwind');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],

  theme: {
    extend: {
      colors: {
        primary: '#FFBF00',
        secondary: '#33FF57',
        'custom-gray': '#B0B0B0',
        'background-light': '#F3F4F6',
        'background-gray': '#F3F3F7',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
}
