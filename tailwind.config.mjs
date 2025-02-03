/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '5%',
        sm: '1rem',
      },
    },
    extend: {
      display: {
        'inline-masonry': 'inline-masonry',
      },
      screens: {
        'xs': '490px',
      },
      fontFamily: {
        'manrope': ["Manrope", 'sans-serif'],
        'rubik-p': ["Rubik Puddles", 'serif'],
        'Piedra': ["Piedra", 'serif'],
      },
      colors: {
        'custom-primary': 'var(--color-custom-primary)',
        'custom-half-primary': 'var(--color-custom-half-primary)',
        'custom-ash': '#f0f0f0',
      },
    },
  },
  plugins: [daisyui],

};
