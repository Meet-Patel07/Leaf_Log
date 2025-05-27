/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#4CAF50',       // Leaf green
        secondary: '#2E7D32',     // Forest green
        accent: '#A5D6A7',        // Pale green
        background: '#F9FAF8',    // Soft beige/off-white
        dark: '#1B1B1B',          // Dark variant
        success: '#66BB6A',       // Success green
        warning: '#FFA726',       // Warning orange
        error: '#EF5350',         // Error red
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fadeIn': 'fadeIn 1.5s ease-in-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};