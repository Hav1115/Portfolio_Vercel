/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0a0a0a',
          800: '#111111',
          700: '#1a1a1a',
          600: '#252525',
        },
        accent: {
          orange: '#f97316',
          purple: '#a855f7',
          pink: '#ec4899',
        },
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        display: ['var(--font-cabinet)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'wiggle': 'wiggle 0.3s ease-in-out',
        'fade-in': 'fadeIn 0.3s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg) scale(1)' },
          '25%': { transform: 'rotate(-2deg) scale(1.02)' },
          '75%': { transform: 'rotate(2deg) scale(1.02)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

