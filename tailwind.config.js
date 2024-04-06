/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './components/**/*.{js,vue,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './app.vue',
        './error.vue',
    ],
    theme: {
        extend: {
            colors: {
                black: '#000000',
                primary: '#D43131',
                secondary: '#858585',
            },
        },
        fontFamily: {
            logo: ['\'Lexend Mega\''],
            nums: ['\'Roboto Mono\''],
        },
    },
    plugins: [],
}
