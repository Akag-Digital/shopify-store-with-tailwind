/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.liquid"],
  theme: {
    extend: {
      colors: {
        'primary': '#191D48',
        'secondary': '#D1E8E5',
        'terciary': '#F0F9F8',
      },
      fontFamily: {
        sans: ["Sofia Sans", "sans-serif"],
        'recoleta': ['Recoleta', 'Arial', 'sans-serif'],
      },
      height: {
        120: '30rem',
        121: '30.25rem',
        184: '46rem',
      }
    },
    base: {
      html: {
        "font-family": ["Sofia Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
