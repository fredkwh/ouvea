/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ocre-dore": "#C79C60",
        "ocre-dore-fonce": "#b38849",
        "blanc-coco": "#fefaf2",
        "sable-chaud": "#f9f4ea",
        "noir-cacao-doux": "#2b2b2b",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}