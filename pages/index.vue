<template>
    <div class="indexinfo">
        <div>
            <div class="title">
                <div class="bold">{{ $t('ayim.index.homeTitle') }}</div>
                <img src="../CorsaceAssets/img/divider.png">
            </div>
            <p class="indexParagraph" v-html="$t('ayim.index.home')"/>
        </div>
        <img class="prettyimg" src="../CorsaceAssets/img/pic.png">
    </div>
</template>

<script>
export default {
    head () {
        return {
            title: "AYIM 2018",
        }
    }
}
</script>
