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
  plugins: [],
}
