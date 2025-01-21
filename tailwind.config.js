/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'sm-md': '850px', 
      },
    },
  },
  plugins: [],
};
