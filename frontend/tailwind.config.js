const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['src/**/*.ts', 'src/**/*.tsx'],
  theme: {
    fontFamily: {
      sans: ['Open\\ Sans', 'sans-serif'],
      serif: ['var(--font-rowan)', 'serif'],
    },
    textSizes: {
      '5xl': ['4.5rem', '4rem'],
    },
    colors: {
      primary: '#BFECB1',
      green: {
        DEFAULT: '#03755E',
        dark: '#0A332D',
        emerald: "#006A54",
        bright: "#96F55F",
        light: '#CDE3DF',
      },
      blue: {
        DEFAULT: '#0066CC',
      },
      accent: {
        DEFAULT: '#F1BA30',
      },
      orange: {
        DEFAULT: '#FF9500',
      },
      red: {
        DEFAULT: '#E80202',
      },
      grey: {
        DEFAULT: '#EFEFEF',
        light: '#F9F7F7',
        medium: '#AFAFAF',
        dark: '#656565',
        darker: '#222222',
      },
      white: '#FFFFFF',
      black: '#000000',
      transparent: 'transparent',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    plugin(function ({ addVariant }) {
      addVariant('progress-bar', ['&::-webkit-progress-bar']);
      addVariant('progress-value', [
        '&::-webkit-progress-value',
        '&::-moz-progress-bar',
        '&::-ms-fill',
      ]);
    }),
  ],
};
