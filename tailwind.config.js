/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'bg': 'url(./src/assets/Hero section.png)'
      }
    },
  },
  plugins: [],
}

