/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      animation: {
        pulse: 'pulse 4s infinite ease-in-out',
      },
      colors: {
        'purple-glass': 'rgba(255, 255, 255, 0.1)',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}

