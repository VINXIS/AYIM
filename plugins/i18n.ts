import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

var lang = 'en';
if (process.browser)
    lang = window.localStorage.getItem('lang') || 'en';

export default ({ app }) => {
    app.i18n = new VueI18n({
        locale: lang,
        fallbackLocale: 'en',
        messages: {
            'en': require('../CorsaceAssets/lang/en.json'), 
            'id': require('../CorsaceAssets/lang/id.json'),
            'kr': require('../CorsaceAssets/lang/kr.json'),
            'de': require('../CorsaceAssets/lang/de.json'),
        }
    })
}