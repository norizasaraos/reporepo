/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
       
          sidebar: '#044cac',
          contextcolor: '#242424',
          customblue: '#182444',
      },
    },
  },
  plugins: [],
}