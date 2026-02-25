/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Chelsea Market', 'Roboto']
      },
      colors: {
        ocean: {
          light: "#e0e1dd",
          soft: "#778da9",
          main: "#415a77",
          dark: "#1b263b",
          deep: "#0d1b2a",
        }
      }
    },
  },
  plugins: [],
}

