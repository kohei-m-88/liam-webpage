module.exports = {
  purge: ['./components/*.js', './pages/*.js', './pages/api/*.js'],
  darkMode: false,
  theme: {
    extend: {},
    screens: {
      'xs': '576px',
      // => @media (min-width: 640px) { ... }
    },
  },
  variants: {
    extend: {}
  },
  plugins: [],
}
