/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{html,jsx}'],
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#CC2D4A',
      secondary: '#8FA206',
      terciary: '#61AEC9',
    }),

    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
