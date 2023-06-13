/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        fill: 'fill .5s ease-out .0s   ',
      },
      keyframes: {
        fill: {
          '0%': { width: '0' },
        },
      },
    },
  },
  plugins: [],
};
