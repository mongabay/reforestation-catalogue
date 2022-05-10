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
      },
      blue: {
        DEFAULT: '#0066CC',
      },
      orange: {
        DEFAULT: '#E26E3E',
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
  plugins: [require('@tailwindcss/forms')],
};
