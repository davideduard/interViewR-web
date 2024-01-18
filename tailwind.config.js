const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  theme: {
    colors: {
      'primary': {
        lightest: '#33a0a0',
        lighter: '#1a9494',
        DEFAULT: '#008888',
        hover: '#007a7a',
        clicked: '#006d6d',
        darker: '#005f5f',
        darkest: '#004444'
      },
      'secondary': {
        lightest: '#cfbba2',
        lighter: '#c8b195',
        DEFAULT: '#b2936b',
        hover: '#a78e6e',
        clicked: '#957e62',
        darker: '#826f55',
        darkest: '#705f49'
      },
      'accent': {
        lightest: '#888888',
        lighter: '#666666',
        DEFAULT: '#555555',
        hover: '#4d4d4d',
        clicked: '#444444',
        darker: '#3b3b3b',
        darkest: '#333333'
      },
      'white' : {
        DEFAULT: '#FFFFFF',
        darker: '#f5f5f5'
      },
      'transparent': {
        DEFAULT: 'transparent'
      }
    },
    extend: {},
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
    matchUtilities(
      {
        "animation-delay": (value) => {
          return {
            "animation-delay": value,
          };
        },
      },
      {
        values: theme("transitionDelay"),
      }
    );
  }),
  ],
}
