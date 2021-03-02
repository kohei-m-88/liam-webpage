module.exports = {
  future: {
    purgeLayersByDefault: true,
  },
  purge: ['./components/*.js', './pages/*.js', './pages/api/*.js'],
  darkMode: false,
  theme: {
    extend: {
      spacing: {
        '1vh': '1vh',
        '2vh': '2vh',
        '3vh': '3vh',
        '4vh': '4vh',
        '5vh': '5vh',
        '6vh': '6vh',

        '1vw': '1vw',
        '2vw': '2vw',
        '3vw': '3vw',
        '4vw': '4vw',
        '5vw': '5vw',
        '6vw': '6vw',
      },
    },
    minWidth: {
      '200': '200px',
    },
    maxWidth: {
      '350': '350px'
    }
  },
  variants: {
    extend: {}
  },
  plugins: [],
}
