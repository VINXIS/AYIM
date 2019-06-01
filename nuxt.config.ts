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
    modules: [
        ['nuxt-i18n', {
            vueI18n: {
                fallbackLocale: 'en',
            },
            detectBrowserLanguage: {
                useCookie: true,
                cookieKey: 'lang',
            },
            locales: [
                {
                    code: 'en',
                    file: 'en.ts',
                    iso: 'en-US',
                    flag: 'https://osu.ppy.sh/images/flags/US.png'
                }, {
                    code: 'kr',
                    file: 'kr.ts',
                    iso: 'kr-KR',
                    flag: 'https://osu.ppy.sh/images/flags/KR.png'
                }, { 
                    code: 'de',
                    file: 'de.ts',
                    iso: 'de-DE',
                    flag: 'https://osu.ppy.sh/images/flags/DE.png'
                }, { 
                    code: 'nl',
                    file: 'nl.ts',
                    iso: 'nl-NL',
                    flag: 'https://osu.ppy.sh/images/flags/NL.png'
                }, {
                    code: 'fr',
                    file: 'fr.ts',
                    iso: 'fr-FR',
                    flag: 'https://osu.ppy.sh/images/flags/FR.png'
                }, { 
                    code: 'id',
                    file: 'id.ts',
                    iso: 'id-ID',
                    flag: 'https://osu.ppy.sh/images/flags/ID.png'
                }, {
                    code: 'zh',
                    file: 'zh.ts',
                    iso: 'cn-CN',
                    flag: 'https://osu.ppy.sh/images/flags/CN.png'
                }
            ],
            lazy: true,
            langDir: 'lang/',
            parsePages: false,
        }],
    ]
}

export default config