const plugin = require('tailwindcss/plugin');

module.exports = {
  mode: 'jit',
  darkMode:'class',
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
  /*prefix:'tail-',*/
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
    plugin(function({addComponents}){
      const button = {
        '.butn':{
          padding:'.5rem 1rem',
          fontWeight:'600',
        },
        '.butn-blue':{
          color:'#fff',
          backgroundColor:'#000',
          '&:hover':{
            color:'#000',
            backgroundColor:'#fff',
          },
        },
        '.butn-gre':{
          color:'#000',
          backgroundColor:'#A9FBD7',
        }
      };
      addComponents(button);
    }),
    plugin(function({ addBase, theme }) {
      const heading = {
        'h1': {fontSize: '30px'},
        'h2': {fontSize: '25px'},
        'h3': {fontSize: '20px'},
        'h4': {fontSize: theme('fontSize.2xl')},
      }
      addBase(heading);
    }),
  ],
  presets: [
    require('./presets/tailwind.preset'),
  ],
  /*plugins: [
    plugin(function({addComponents}){
      const button = {
        'butn':{
          padding:'.5rem 1rem',
          fontWeight:'600',
        },
        'butn-blue':{
          color:'#fff',
          '&:hover':{
            color:'#000',
          },
        },
      };
    }),
  ],*/
}
