/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      sm: '320px',
      // => @media (min-width: 320px) { ... }

      md: '720px',
      // => @media (min-width: 720px) { ... }

      lg: '1000px'
      // => @media (min-width: 1024px) { ... }
    },
    extend: {
      fontFamily: {
        texto: 'Josefin Sans'
      }
    },
    plugins: []
  }
}
