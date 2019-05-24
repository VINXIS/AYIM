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
        </div>
        <nuxt class="nuxt"/>
        <div class="footer">
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

