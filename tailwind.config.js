/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  fontFamily: {
    'sans': ['Nunito', 'sans-serif']
  },
  theme: {
    container:{
      center: true,
      padding: '16px'
    },
    extend: {
      animation: {
        'spin-repeated': 'spin 10s linear infinite',
      },
      keyframes: {
        spin: {
          '0%,': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      colors: {
        primary: '#7e22ce',
        secondary: '#64748b',
        dark: '#0d0315',
        third:'#00B4D8' 

      },
      screens:{
        '2xl' : '1320px',
      },
    },
  },
  plugins: [],
}
