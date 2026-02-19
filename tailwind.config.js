/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Cormorant Garamond', 'serif'],
        'sans': ['Jost', 'sans-serif'],
      },
      colors: {
        'beige': '#FAF8F5',
        'ivory': '#FFFEF9',
        'espresso': '#2C2416',
        'gold': '#C9A961',
        'gold-light': '#E8D9B5',
      },
    },
  },
  plugins: [],
}
