/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#d4af37',
        'wedding-gold': '#d4af37',
        'wedding-cream': '#f4f4f4',
        'wedding-dark': '#333333',
      },
      fontFamily: {
        serif: ['Great Vibes', 'cursive'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
