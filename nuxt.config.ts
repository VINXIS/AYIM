import NuxtConfiguration from "@nuxt/config"

const config: NuxtConfiguration = {
    head: {
        link: [
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Ubuntu' }
        ]
    },
    css: [
        '~/css/layout.css',
    ]
}

export default config