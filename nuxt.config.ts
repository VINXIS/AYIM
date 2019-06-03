import NuxtConfiguration from "@nuxt/config"

const config: NuxtConfiguration = {
    head: {
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'keywords', content: 'osu, osu!, Corsace, map, mapping, rhythm game, charting, charts, beatmaps, beatmapping, beatmap' },
        ]
    },
    css: [
        '~/css/layout.css',
        '~/css/index.css',
    ],
    plugins: ['plugins/i18n.ts'],
}

export default config