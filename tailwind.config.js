/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          50: '#FFF7E6',
          100: '#FFE7B8',
          200: '#FFD785',
          300: '#FFC752',
          400: '#FFB71F',
          500: '#E69E00', // Main orange shade
          600: '#B37B00',
          700: '#805900',
          800: '#4D3600',
          900: '#1A1400',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'], // Custom font for a modern look
      },
      boxShadow: {
        lg: '0 10px 15px rgba(0, 0, 0, 0.1)', // Subtle card shadow
      },
    },
  },
  plugins: [],
};
