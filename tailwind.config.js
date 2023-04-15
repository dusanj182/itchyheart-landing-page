/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
   
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        wheat: '#EAD2AC',
        earth: '#D8A85A',
        eerie: '#252822',
        tiffany: '#87C0BC',
        myrtie: '#3F7875',
        night: '#0A0B09',


      },

      fontFamily: {
        sans: ['Bai Jamjuree','sans-serif'],

     
      },

      animation : {
        'spin-round': 'spin 0.2s linear forwards',
        turn : 'turn 0.2s linear forwards'
      },

      keyframes : {
        turn : {
      
          '75%' : {transform: 'rotate(180deg)'},
          '100%': {color: '#0e7490'}
        }
      }
    },
  },
  plugins: [],
}
