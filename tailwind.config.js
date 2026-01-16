/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
            },
            colors: {
                background: '#FFFFFC',
                surface: '#FDFBF9',
                primary: '#272727',
                secondary: '#5D5D5D',
                accent: '#D4AF37',
                'accent-soft': '#F3E5DC',
            },
            borderRadius: {
                'xl': '1rem',
                '2xl': '1.5rem',
                '3xl': '2rem',
                '4xl': '3rem',
            },
            boxShadow: {
                'soft': '0 20px 40px -10px rgba(0, 0, 0, 0.05)',
                'card': '0 4px 20px rgba(0,0,0,0.02)',
            }
        },
    },
    plugins: [],
}
