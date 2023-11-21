/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#714EFF',
        'theme-primary': '#a78bfa',
        'theme-secondary': '#8b5cf6',
        'light-primary': '#f5f3ff',
        dark: '#0f172a',
        'dark-primary': '#101623',
        'gray-text': '#9ca3af',
        'text-primary': '#d1d5db',
        'text-secondary': '#4b5563',
      },
      screens: {
        xs: '200px',
        folding: '320px',
        tall: { raw: '(min-height: 800px)' },
      },
      keyframes: {
        'button-press': {
          '0%, 100%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(0.9)',
          },
        },
        'slide-in': {
          from: {
            opacity: 0,
            transform: 'translateX(-100%)',
          },
          to: {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
        'slide-out': {
          from: {
            opacity: 1,
            transform: 'translateX(0)',
          },
          to: {
            opacity: 0,
            transform: 'translateX(-100%)',
          },
        },
        'scale-appearance': {
          from: {
            scale: 0,
            translate: '-50% -50%',
          },
          to: {
            scale: 1,
          },
        },
        'scale-hide': {
          from: {
            scale: 1,
          },
          to: {
            scale: 0,
            translate: '-50% -50%',
          },
        },
      },
      animation: {
        'button-press': 'button-press 0.4s ease-in-out',
        'slide-in': 'slide-in 0.3s ease-in forwards',
        'slide-out': 'slide-out 0.3s ease-out forwards',
        'scale-appearance': 'scale-appearance 0.3s ease-in forwards',
        'scale-hide': 'scale-hide 0.3s ease-out forwards',
      },
      boxShadow: {
        header: '0px 4px 16px 0px rgba(225, 218, 244, 0.25)',
        sidebar: '4px 0px 16px 0px rgba(225, 218, 244, 0.25)',
        'input-hover': '0px 0px 0px 1.6px rgba(113, 78, 255, 0.10)',
        'input-focus': '0px 0px 0px 1.6px #714EFF',
        'input-hover-dark': '0px 0px 0px 1.6px rgba(255, 255, 255, 0.20)',
        'input-focus-dark': '0px 0px 0px 1.6px rgba(238, 243, 251, 0.75)',
      },
    },
  },
  plugins: [require('daisyui')],
  darkMode: ['class', '[data-theme="dark"]'],
}
