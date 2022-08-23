/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fall: 'fall 2s  infinite linear',
        fall1: 'fall1 2.5s infinite linear',
        fall2: 'fall2 2.9s infinite linear',
        fall3: 'fall3 1.8s infinite linear',

      },

      keyframes: {
        fall: {
          '0%': { marginTop: '0vh' },


          '100%': { marginTop: '100vh' }
        },
        fall1: {
          '0%': { marginTop: '0vh' },


          '100%': { marginTop: '100vh' }
        },
        fall2: {
          '0%': { marginTop: '0vh' },


          '100%': { marginTop: '100vh' }
        },
        fall3: {
          '0%': { marginTop: '0vh' },


          '100%': { marginTop: '100vh' }
        }


      }

    },
  },
  plugins: [],
}
