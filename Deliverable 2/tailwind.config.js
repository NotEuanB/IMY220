/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./frontend/src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        lightning: ['Lightning', 'sans-serif'],
        liberation: ['Liberation', 'serif'],
      }
    },
  },
  plugins: [],
}

