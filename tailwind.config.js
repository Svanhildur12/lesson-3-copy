/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {},
  },
  plugins: [],
}
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
        cursive: ['cursive']
      }
    }
  },
}


