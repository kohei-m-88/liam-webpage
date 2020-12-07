module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ['./components/*.js', './pages/*.js'],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],

  theme: {
    screens: {
      'xs': '576px',
      // => @media (min-width: 640px) { ... }
    },
  },

}
