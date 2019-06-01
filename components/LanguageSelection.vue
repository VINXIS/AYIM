<template>
    <div @click="active = !active" class="languageSelection">
        <div v-if="active" class="dropdown">
            <nuxt-link 
            class="langSelDropdown"
            v-for="locale in $i18n.locales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)">
                <img :src="locale.flag">
                {{ locale.code.toUpperCase() }}
            </nuxt-link>
        </div>
        <img :src="flag">
        {{ this.$i18n.locale.toUpperCase() }}
    </div>
</template>

<script>
export default{
    data () {
        return {
            active: false,
            lang: ""
        }
    },
    created: async function() {
        console.log(this.$i18n.locales)
    },
    computed: {
        flag () {
            return this.$i18n.locales.filter(i => i.code === this.$i18n.locale)[0].flag
        }
    }
}
</script>

<style>
.languageSelection {
    display: flex;
    align-items: center;
    padding: 0 calc(0.65vw + 4px);
    cursor: pointer;
}

.languageSelection img {
    width: 1.8vw;
    padding-right: 0.55vw;
}

.dropdown {
    position: absolute;
    bottom: 100%;
    right: 0;
    background-color: #ff890a;
}

.langSelDropdown {
    padding: 0.65vw calc(0.65vw + 4px);
    display: flex;
    align-items: center;
    color: white;
    transition: 0.2s ease;
    text-decoration: none;
}

.langSelDropdown:hover {
    color: #ff890a;
    background-color: white;
    transition: 0.2s ease;
}
</style>