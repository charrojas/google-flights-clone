// tailwind.config.js
// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        bounce200: 'bounce 0.7s ease-in-out infinite',
        bounce400: 'bounce 1s ease-in-out infinite',
      },     
       colors: {
        'custom-green': '#10b981', // Aquí defines tu color personalizado
      },
      },
  },
  // ...
}