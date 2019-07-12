<template>
    <div class="nav">
        <nuxt-link to="/standard" class="nav-mode" :class="{ navActiveText: standard, standard: !standard }">
            <img v-if="standard" src="../CorsaceAssets/img/modes/standard-active.png">
            <img v-else src="../CorsaceAssets/img/modes/standard.png">
            <div>{{ $t('ayim.layout.nav.standard') }}</div>
        </nuxt-link>
        <nuxt-link to="/taiko" class="nav-mode" :class="{ navActiveText: taiko, taiko: !taiko }">
            <img v-if="taiko" src="../CorsaceAssets/img/modes/taiko-active.png">
            <img v-else src="../CorsaceAssets/img/modes/taiko.png">
            <div>{{ $t('ayim.layout.nav.taiko') }}</div>
        </nuxt-link>
        <nuxt-link to="/fruits" class="nav-mode" :class="{ navActiveText: fruits, fruits: !fruits }">
            <img v-if="fruits" src="../CorsaceAssets/img/modes/fruits-active.png">
            <img v-else src="../CorsaceAssets/img/modes/fruits.png">
            <div v-html="$t('ayim.layout.nav.fruits')">
            </div>  
        </nuxt-link>
        <nuxt-link to="/mania" class="nav-mode" :class="{ navActiveText: mania, mania: !mania }">
            <img v-if="mania" src="../CorsaceAssets/img/modes/mania-active.png">
            <img v-else src="../CorsaceAssets/img/modes/mania.png">
            <div>{{ $t('ayim.layout.nav.mania') }}</div>
        </nuxt-link>
        <nuxt-link to="/storyboard" class="nav-mode" :class="{ navActiveText: storyboard, storyboard: !storyboard }">
            <img v-if="storyboard" src="../CorsaceAssets/img/modes/storyboard-active.png">
            <img v-else src="../CorsaceAssets/img/modes/storyboard.png">
            <div>{{ $t('ayim.layout.nav.storyboard') }}</div>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    computed: {
            standard() { return this.$route.name === 'standard' },
            taiko() { return this.$route.name === 'taiko' },
            fruits() { return this.$route.name === 'fruits' },
            mania() { return this.$route.name === 'mania' },
            storyboard() { return this.$route.name === 'storyboard' },
    }
}
</script>

<style>
.nav {
    grid-area: nav;
    display: flex;
    flex-direction: column;
    padding: 0 2.29vw;
    width: fit-content;
    z-index: 100;
    position: static;
}

.nav-mode {
    border-radius: 100vw;
    display: flex;
    align-items: center;
    margin: calc(1.5vh + 14.7px) 0 0;
    text-decoration: none;
    color: inherit;
    width: calc(3.5vw + 31.8px);
    height: calc(3.5vw + 31.8px);
    overflow: hidden;
    transition: 0.25s ease;
}

.nav-mode:hover {
    width: calc(9vw + 67px);
}

.nav-mode img {
    padding: calc(0.4345vw + 7.65px);
    width: calc(2.631vw + 16.5px);
}

.nav-mode div {
    padding-right: 30px;
    white-space: nowrap;
    font-size: calc(1vw + 5px);
}

.navActiveText {
    background-color: white;
    color: #1e1d1d;
}

.standard {
    background-color: #fb2475;
}

.taiko {
    background-color: #ff890a;
}

.fruits {
    background-color: #0abdff;
}

.mania {
    background-color: #48f326;
}

.storyboard {
    background-color: #555555;
}
</style>