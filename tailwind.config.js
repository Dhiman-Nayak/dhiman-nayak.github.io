/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {
      animation: {
        pulse: 'pulse 4s infinite ease-in-out',
        float: 'float 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
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

