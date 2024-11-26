/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'primary':"#002D42",
        'secondary':"#0085FF",
        'red':"#FF0000",
        'green':"#5EAA22",
        'gulabi':"#FC17EC",
        'skyBlue':"#33B9EF",
        'orange':"#FF9100",
        'lightGray':"#F8F8F8",
        'darkGray':"#1C1D1D",
      },
      backgroundImage:{
        LoginBg: "url('./assets/image/Hexagon.png')",
      }
    },
  },
  plugins: [],
}

