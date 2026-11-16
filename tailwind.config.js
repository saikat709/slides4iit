/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        flame: {
          maroon: '#70020F',
          'maroon-dark': '#4A010A',
          'maroon-deep': '#240004',
          'maroon-light': '#8E0D1F',
          pink: '#FEDEE1',
          'pink-soft': '#FFF2F4',
          'pink-muted': '#F7B4BD',
          'pink-dark': '#E28B96',
          orange: '#FF5722',
          gold: '#FFA000',
        }
      },
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      aspectRatio: {
        '16/9': '16 / 9',
      },
      animation: {
        'flame-flicker': 'flame 1.8s infinite alternate ease-in-out',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        flame: {
          '0%': { transform: 'scale(1) rotate(-1deg)', opacity: '0.92' },
          '50%': { transform: 'scale(1.04) rotate(1.5deg)', opacity: '1' },
          '100%': { transform: 'scale(0.98) rotate(-0.5deg)', opacity: '0.95' },
        }
      }
    },
  },
  plugins: [],
}
