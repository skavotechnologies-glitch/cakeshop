/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FFFCF9',
          100: '#FFF8F0', // primary cream
          200: '#FAF0E4',
          300: '#F5EBDD', // warm ivory
          400: '#EADBC8',
          500: '#DCC3A8',
        },
        ivory: '#F5EBDD',
        rose: {
          light: '#F4DCDE',
          DEFAULT: '#D99A9C', // dusty rose
          dark: '#B87274',
        },
        chocolate: {
          light: '#6B4339',
          DEFAULT: '#4B2E26', // chocolate brown
          dark: '#3A221C',
        },
        cocoa: {
          DEFAULT: '#2C1C18', // dark cocoa
          deep: '#1E120F',
        },
        gold: {
          light: '#E2CA9D',
          DEFAULT: '#C5A46D', // soft gold
          dark: '#9F804A',
          glow: 'rgba(197, 164, 109, 0.25)',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(44, 28, 24, 0.08)',
        'luxury-hover': '0 30px 60px -12px rgba(44, 28, 24, 0.16)',
        'gold-glow': '0 0 30px rgba(197, 164, 109, 0.25)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(12px) rotate(-2deg)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        }
      }
    },
  },
  plugins: [],
}
