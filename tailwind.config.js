const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: 'jit',
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '600px',
      md: '700px',
      lg: '900px',
      xl: '1200px'
    },
    extend: {
      colors: {
        indigocust: {
          light: '#b3bcf5',
          DEFAULT: '#5c6ac4',
          dark: '#202e78',
        },
      },
      spacing:{
        1: '0.55rem'
      },
    },
  },
  variants:{
    extend:{
      backgroundColor: ['active'],
      textColor: ['visited'],
    },
  },
  plugins: [
    plugin(function({addUtilities}){
      const newUtilities = {
        '.scale-001':{
          tranform: 'scale(1)'
        },
        '.rota-001':{
          transform: 'rotate(25deg)'
        },
        '.rota-002':{
          transform: 'rotate(-25deg)'
        },
      };
      addUtilities(newUtilities);
    }),
  ],
}
