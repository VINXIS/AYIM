<template>
    <div class="template-wrap">
        <div class="header">
            <nuxt-link to="/" class="header-left">
                <img class="ayim" src="../CorsaceAssets/img/ayim.png">
            </nuxt-link>
            <div class="countdown">
                <div>{{ $t('ayim.layout.mca2018') }}</div>
                <Countdown deadline="2020-12-25 00:00:00"></Countdown>
                <div>{{ $t('ayim.layout.days') }}</div>
            </div>
            <div class="header-right" 
            @mouseover="mcaHover=true"
            @mouseout="mcaHover=false"
            :class="{headerHover: mcaHover}"
            >
                <img :class="{mcalogoHover: mcaHover}" src="../CorsaceAssets/img/mca.png">
                <img :class="{mcalogoHover: mcaHover}" class="mcalogo" src="../CorsaceAssets/img/triangle.png">
            </div>
        </div>
        <div class="nav">
            <nuxt-link to="/standard" class="nav-mode standard">
                <img src="../CorsaceAssets/img/standard.png">
                <div>{{ $t('ayim.layout.nav.standard') }}</div>
            </nuxt-link>
            <nuxt-link to="/taiko" class="nav-mode taiko">
                <img src="../CorsaceAssets/img/taiko.png">
                <div>{{ $t('ayim.layout.nav.taiko') }}</div>
            </nuxt-link>
            <nuxt-link to="/fruits" class="nav-mode fruits">
                <img src="../CorsaceAssets/img/fruits.png">
                <div v-html="$t('ayim.layout.nav.fruits')">
                </div>  
            </nuxt-link>
            <nuxt-link to="/mania" class="nav-mode mania">
                <img src="../CorsaceAssets/img/mania.png">
                <div>{{ $t('ayim.layout.nav.mania') }}</div>
            </nuxt-link>
            <nuxt-link to="/storyboard" class="nav-mode storyboard">
                <img src="../CorsaceAssets/img/storyboard.png">
                <div>{{ $t('ayim.layout.nav.storyboard') }}</div>
            </nuxt-link>
        </div>
        <nuxt class="nuxt"/>
        <div class="footer">
            <div class="footer-left">
                <a href="https://corsace.io" >
                    <img class="corsace" src="../CorsaceAssets/img/corsace.png">
                    <img class="corsaceText" src="../CorsaceAssets/img/corsace-text.png">
                </a>
                <div class="extLinks">
                    <a href="https://twitter.com/corsace_">
                        <img src="../CorsaceAssets/img/twitter.png">
                    </a>
                    <a href="https://discord.gg/Z6vEMsr">
                        <img src="../CorsaceAssets/img/discord.png">
                    </a>
                    <a href="https://www.twitch.tv/corsace">
                        <img src="../CorsaceAssets/img/twitch.png">
                    </a>
                </div>
            </div>
            <div class="footer-right">
                CHOOSE YOUR LANGUAGE:
                <no-ssr>
                    <LanguageSelection/>
                </no-ssr>
            </div>
        </div>
    </div>
</template>

<script>
import Countdown from '~/components/Countdown.vue'
import LanguageSelection from '~/components/LanguageSelection.vue'

export default {
    components: {
        Countdown,
        LanguageSelection
    },
    data () {
        return {
            mcaHover: false,
        }
    },
}
</script>

