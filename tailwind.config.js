/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        components: 'hsl(228, 56%, 26%)',
        base_bg: 'hsl(229, 57%, 11%)',
        gia_pink: 'hsl(243, 100%, 93%)',
      },
      fontFamily: {
        raleway: 'Raleway',
      }
    },
  },
  plugins: [],
}
