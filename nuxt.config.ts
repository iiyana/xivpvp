// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        'nuxt-primevue',
        '@nuxtjs/google-fonts',
    ],
    primevue: {
        options: {
            unstyled: true,
        },
    },
    googleFonts: {
        families: {
            'Lexend Mega': true,
            'Sen': true,
            'Roboto Mono': true,
        },
    },
    devtools: { enabled: true },
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
