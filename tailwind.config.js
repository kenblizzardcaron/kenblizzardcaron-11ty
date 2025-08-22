/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md}", "./src/**/*.svg"],
  darkMode: 'class', // Enable dark mode via class strategy
  theme: {      
    extend: {
      colors: {
        husky: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde58a",
          300: "#fbd24e",
          400: "#fabe25",
          500: "#f49d0c",
          600: "#d87607",
          700: "#bc560a",
          800: "#923f0e",
          900: "#78340f",
          950: "#451a03",
        },
      },
      width: {
        a4: '210mm', //794px
      },
      height: {
        a4: '297mm', //1123px
      },
      screens: {
        'print': {'raw': 'print'},
      }
    },
  },
  plugins: [],
};
