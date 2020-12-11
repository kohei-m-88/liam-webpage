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
    screens: {
      'xs': {                'max': '639px'},
      'sm': {'min': '640px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px', 'max': '1535px'},
      '2xl': {'min': '1536px'},
    },
    minWidth: {
      '200': '200px'
    },
    maxWidth: {
      '500': '500px'
    }
  },
  variants: {
    extend: {}
  },
  plugins: [],
}
