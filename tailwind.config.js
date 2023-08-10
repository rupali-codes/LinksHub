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
        'light-primary': '#f5f3ff',
        'dark': '#0f172a',
        'dark-primary': '#101623',

        'primary-150': '#5b21b6',  /* violet-800 */
        'primary-100': '#7c3aed',  /* violet-600 */
        'primary-80': '#8b5cf6',   /* violet-500 */
        'primary-60': '#a78bfa',   /* violet-400 */ /* mostly used for text */
        'primary-40': '#c4b5fd',   /* violet-300 */

        'secondary-200': '#111827',   /* gray-900 */  /* background */
        'secondary-100': '#4b5563',   /* gray-600 */
        'secondary-80': '#6b7280',    /* gray-500 */
        'secondary-60': '#9ca3af',    /* gray-400 */
        'secondary-40': '#d1d5db',    /* gray-300 */ /* dark: card-text */
        'secondary-20': '#e5e7eb',    /* gray-200 */
        'secondary-10': '#F3F4F6',    /* gray-100 */

      },
      screens: {
        xs: '200px',
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
    },
  },
  plugins: [require('daisyui')],
  darkMode: ['class', '[data-theme="dark"]'],
}
