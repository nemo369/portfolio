/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors:{
        red:{
          'DEFAULT':'#cb5858'
        },
        black:{
          'DEFAULT':'#1d1d1d'
        },
        white:{
          'DEFAULT':'#f2f2f2'
        },

      }
    },
  },
  plugins: [],
}
