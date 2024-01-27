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
        'theme-primary': '#a78bfa',
        'theme-secondary': '#8b5cf6',
        'theme-tertiary': '#1f2736',
        'theme-quaternary': '#293242',
        'theme-quinary': '#BCCBE1',
        'light-primary': '#f5f3ff',
        primary: '#714EFF',
        dark: '#0f172a',
        'dark-primary': '#161e2c',
        'gray-text': '#9ca3af',
        'text-primary': '#EDEDED',
        'text-secondary': '#4b5563',
        'text-tertiary': '#B9C0DA',
        'text-quaternary': '#EDEDED',
        'text-quinary': '#A6ABBF',
        'theme-primary-light': '#f4f7fe',
        'theme-secondary-light': '#BCCBE1',
        'theme-tertiary-light': '#E1DAF4',
        'text-primary-light': '#3F3D56',
        'text-secondary-light': '#DAE0F4',
        light: {
          primary: '#f5f3ff',
          silver: '#EDEDED',
          white: '#fff'
        },
      },
      screens: {
        xs: '200px',
        folding: '320px',
      },
      display: ['group-hover'],

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
      opacity: {
        8: '0.08',
      },
      width: {
        1038: '1038px',
      },
      maxWidth: {
        1038: '1038px',
      },
      fontSize: {
        '1.5xl': '22px',
      },
      boxShadow: {
        tile: '0px 0px 12px 0px #E1DAF440',
      },
    },
  },
  plugins: [require('daisyui')],
  darkMode: ['class', '[data-theme="dark"]'],
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
}
