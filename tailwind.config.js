/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
       DarkerCyan: '#2ab2ad', 
       Cyan: '#2AB2AF',
       BrightYellow: '#C0DF34',
       LightGray: '#E5EFF5',
       GrayishBlue: '#98A6BD',
       HoverYellow: '#a9c81a'
     },
     fontFamily: {
      karla: ['Karla'], 
     }
  },
},
  plugins: [],
}

