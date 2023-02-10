/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./layouts/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                'xs': '200px'
            },
            keyframes: {
                'button-press': {
                    '0%, 100%': {
                        transform: 'scale(1)',
                    },
                    '50%': {
                        transform: 'scale(0.9)',
                    }
                }
            },
            animation: {
                'button-press': 'button-press 0.4s ease-in-out',
            }
        },
    },
    plugins: [require("daisyui")],
    darkMode: ["class", '[data-theme="dark"]'],
}
