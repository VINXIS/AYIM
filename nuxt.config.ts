import NuxtConfiguration from "@nuxt/config"
import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'

const config: NuxtConfiguration = {
    plugins: ['~/plugins/vuetify'],
    css: ['~/assets/style/app.styl'],
    build: {
        transpile: ['vuetify/lib'],
        plugins: [new VuetifyLoaderPlugin()],
        loaders: {
          stylus: {
            import: ['~assets/style/variables.styl']
          }
        },
    }
}

export default config