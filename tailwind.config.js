/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0B0F14',
        surface: '#121821',
        accent: '#4F9CF9',
        secondary: '#8B5CF6'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(79,156,249,0.32), 0 10px 25px rgba(79,156,249,0.2)'
      },
      borderRadius: {
        xl2: '1rem'
      }
    },
  },
  plugins: [],
};
