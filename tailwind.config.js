/** @type {import('tailwindcss').Config} */
export default {
  content: ['./resources/**/*.edge', './inertia/**/*.vue'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      // padding: '3rem',
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
