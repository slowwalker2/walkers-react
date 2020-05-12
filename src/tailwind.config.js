module.exports = {
  theme: {
    screens: {
      sm: '420px',
      md: '640px',
      lg: '768px',
      xl: '1024px',
    },
    fontFamily: {
      display: ['Gilroy', 'sans-serif'],
      body: ['Graphik', 'sans-serif'],
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '1': '1px',
      '2': '2px',
    },
    extend: {
      colors: {
        cyan: '#9cdbff',
      },
      spacing: {
        '96': '24rem',
        '128': '32rem',
      },
    },
  },
  variants: {},
  plugins: [require('tailwindcss'), require('autoprefixer')],
};
