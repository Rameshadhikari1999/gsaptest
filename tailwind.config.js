/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        'gupter': ['Gupter', 'serif'],
        'eduarda': ['Edu+AU+VIC+WA+NT+Hand', 'cursive'],
      },
      colors: {
        'primary': '#22242c'
      }
    },
  },
  plugins: [],
}

