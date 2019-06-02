import NuxtConfiguration from "@nuxt/config"

const config: NuxtConfiguration = {
    head: {
        link: [
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Ubuntu' },
        ],
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ]
    },
    css: [
        '~/css/layout.css',
        '~/css/index.css',
    ],
    plugins: ['plugins/i18n.ts'],
}

export default config