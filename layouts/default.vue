<template>
    <div class="template-wrap">
        <div class="header">
            <nuxt-link to="/" class="header-left">
                <img class="ayim" src="../CorsaceAssets/img/ayim-mca/ayim.png">
            </nuxt-link>
            <div class="countdown">
                <div>{{ $t('ayim.layout.mca2018') }}</div>
                <Countdown></Countdown>
                <div>{{ $t('ayim.layout.days') }}</div>
            </div>
            <div class="header-right" 
            @mouseover="mcaHover=true"
            @mouseout="mcaHover=false"
            :class="{headerHover: mcaHover}"
            >
                <img :class="{mcalogoHover: mcaHover}" src="../CorsaceAssets/img/ayim-mca/mca.png">
                <img :class="{mcalogoHover: mcaHover}" class="mcalogo" src="../CorsaceAssets/img/ayim-mca/triangle.png">
            </div>
        </div>
        <ModeNavigation/>
        <nuxt class="nuxt"/>
        <div class="footer">
            <div class="footer-left">
                <a href="https://corsace.io" >
                    <img class="corsace" src="../CorsaceAssets/img/corsace.png">
                    <img class="corsaceText" src="../CorsaceAssets/img/corsace-text.png">
                </a>
                <div class="extLinks">
                    <a href="https://twitter.com/corsace_">
                        <img src="../CorsaceAssets/img/social/twitter.png">
                    </a>
                    <a href="https://discord.gg/Z6vEMsr">
                        <img src="../CorsaceAssets/img/social/discord.png">
                    </a>
                    <a href="https://www.twitch.tv/corsace">
                        <img src="../CorsaceAssets/img/social/twitch.png">
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
import ModeNavigation from '~/components/ModeNavigation.vue'

export default {
    components: {
        Countdown,
        LanguageSelection,
        ModeNavigation,
    },
    data () {
        return {
            mcaHover: false,
        }
    },
}
</script>

