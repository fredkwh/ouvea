
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'sable-chaud': '#f4efe9',
        'ocre-dore': '#b88c4a',
        'blanc-coco': '#fffdf9',
        'vert-lagon-pale': '#cddfcf',
        'noir-cacao-doux': '#2f2a26',
      },
    },
  },
  plugins: [],
}
