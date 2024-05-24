/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        unfold: {
          '0%': { transform: 'scaleY(0.1)', opacity: 0 },
          '100%': { transform: 'scaleY(1)', opacity: 1 }
        },
        fold: {
          '0%': { transform: 'scaleY(1)', opacity: 1 },
          '100%': { transform: 'scaleY(0.1)', opacity: 0 }
        }
      },
      animation: {
        unfold: 'unfold 0.5s ease-out forwards',
        fold: 'fold 0.5s ease-in forwards'
      }
    }
  },
  plugins: [],
}
