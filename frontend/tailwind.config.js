const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['src/**/*.ts', 'src/**/*.tsx'],
  theme: {
    fontFamily: {
      sans: ['Open\\ Sans', 'sans-serif'],
      serif: ['Cardo', 'serif'],
    },
    colors: {
      green: {
        DEFAULT: '#03755E',
        dark: '#014739',
        light: '#CDE3DF',
      },
      blue: {
        DEFAULT: '#0066CC',
      },
      orange: {
        DEFAULT: '#E26E3E',
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
    require('@tailwindcss/line-clamp'),
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
