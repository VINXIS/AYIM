<template>
    <div class="template-wrap">
        <div class="header">
            <nuxt-link to="/" class="header-left">
                <img class="header2018" src="/img/2018.png">
                <img class="ayimicons" src="/img/ayim-header-icons.png">
                <img class="ayim" src="/img/ayim.png">
                <img class="dividerheader" src="/img/divider.png">
            </nuxt-link>
            <div class="countdown">
                <div>2018 MAPPER'S CHOICE AWARDS</div>
                <Countdown deadline="2020-12-25 00:00:00"></Countdown>
                <div>DAYS TO VOTE</div>
            </div>
            <div class="header-right" 
            @mouseover="mcaHover=true"
            @mouseout="mcaHover=false"
            :class="{headerHover: mcaHover}"
            >
                <img :class="{mcalogoHover: mcaHover}" src="/img/mca.png">
                <img :class="{mcalogoHover: mcaHover}" src="/img/triangle.png">
            </div>
        </div>
        <div class="nav">
            <nuxt-link to="/standard" class="nav-mode standard">
                <img src="/img/standard.png">
                <div>standard</div>
            </nuxt-link>
            <nuxt-link to="/taiko" class="nav-mode taiko">
                <img src="/img/taiko.png">
                <div>taiko</div>
            </nuxt-link>
            <nuxt-link to="/fruits" class="nav-mode fruits">
                <img src="/img/fruits.png">
                <div>
                    <div>catch</div>  
                    <div>the beat</div> 
                </div>  
            </nuxt-link>
            <nuxt-link to="/mania" class="nav-mode mania">
                <img src="/img/mania.png">
                <div>mania</div>
            </nuxt-link>
            <nuxt-link to="/storyboard" class="nav-mode storyboard">
                <img src="/img/storyboard.png">
                <div>storyboard</div>
            </nuxt-link>
        </div>
        <nuxt class="nuxt"/>
        <div class="footer">
            <div class="footer-left">
                <img src="/img/corsace.png">
                <img src="/img/corsace-text.png">
            </div>
            <div class="footer-right">
                CHOOSE YOUR LANGUAGE:
            </div>
        </div>
    </div>
</template>

<script>
import Countdown from '~/components/Countdown.vue'

export default {
    components: {
        Countdown
    },
    data: () => ({
        mcaHover: false,
    }),
}
</script>

<style>
.mcahover-enter-active, .mcahover-leave-active {
    transition: all .3s;
}
</style>

