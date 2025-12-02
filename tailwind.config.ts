/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Correct Kebab-Case Naming
        'acumen-purple': {
          DEFAULT: '#783f8e',
          '50': '#f7f4f9',
          '100': '#ebe3f0',
          '200': '#d9c6e0',
          '300': '#c7a9cf',
          '400': '#b48cbe',
          '500': '#a26fae',
          '600': '#91539e',
          '700': '#783f8e',
          '800': '#5d2f6f',
          '900': '#432150',
          '950': '#291131',
        },
        // Renamed from acumenMauve
        'acumen-mauve': '#bfacc8',
        // Renamed from acumenLight
        'acumen-light': '#c8c6d7',
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};