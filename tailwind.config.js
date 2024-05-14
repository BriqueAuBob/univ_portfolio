/** @type {import('tailwindcss').Config} */
export default {
  content: ['./resources/**/*.edge', './inertia/**/*.vue', './database/seeders/*.ts'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      // padding: '3rem',
      padding: {
        DEFAULT: '1rem',
        sm: '1.2rem',
        lg: '2rem',
        xl: '2rem',
      },
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
};
