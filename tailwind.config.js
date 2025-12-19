/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Inter"', '"Noto Sans JP"', 'sans-serif'],
                jp: ['"Noto Sans JP"', '"Inter"', 'sans-serif'],
            },
            colors: {
                corporate: {
                    navy: '#0f172a', // Slate 900
                    blue: '#1e3a8a', // Blue 900
                    light: '#f8fafc', // Slate 50
                    accent: '#3b82f6', // Blue 500
                }
            }
        },
    },
    plugins: [],
}
