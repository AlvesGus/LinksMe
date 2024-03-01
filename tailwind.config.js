/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      sm: '320px',
      // => @media (min-width: 320px) { ... }

      cel: '350px',
      // => @media (min-width: 350px) { ... }

      md: '720px',
      // => @media (min-width: 720px) { ... }

      lg: '1000px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px'
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        texto: 'Josefin Sans'
      }
    },
    plugins: []
  }
}
