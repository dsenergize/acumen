// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         cream: "#efe7dc",
//         navy: "#2f496e",
//       },
//     },
//   },
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#efe7dc",     // background cream
        navy: "#2f496e",      // deep navy
      },
      boxShadow: {
        inner: "inset 0 2px 12px rgba(0,0,0,0.06)",
      }
    },
  },
  plugins: [],
};
