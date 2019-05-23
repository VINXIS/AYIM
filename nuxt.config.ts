import NuxtConfiguration from "@nuxt/config"

const config: NuxtConfiguration = {
    plugins: ['~/plugins/vuetify.ts'],
    css: ['~/assets/style/app.styl'],
    vendor: ['~/plugins/vuetify.ts'],
    extractCSS: true,
}

export default config