<template>
    <div @click="active = !active" class="languageSelection">
        <div v-if="active" class="dropdown">

            <div 
            class="langSelDropdown"
            v-for="lang in langs"
            :key="lang"
            @click="$i18n.locale = lang; setLanguage(lang);">
                <img :src="$i18n.messages[lang].flag">
                {{ lang.toUpperCase() }}
            </div>
        </div>
        <img :src="$i18n.messages[$i18n.locale].flag">
        {{ $i18n.locale.toUpperCase() }}
    </div>
</template>

<script>
export default{
    data () {
        return {
            active: false
        }
    },
    methods: {
        setLanguage: (lang) => {
            localStorage.setItem('lang', lang);
        },
    },
    created() {
        console.log(this.$i18n.locale.toUpperCase())
    },
    computed: {
        langs () {
            return Object.keys(this.$i18n.messages)
        },
    },
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
    margin-right: 0.55vw;
}

.dropdown {
    border-top-left-radius: 8px;
    padding-top: calc(0.4vw + 3px);
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
}

.langSelDropdown img {
    border: 2px solid white;
    border-radius: 7px;
}

.langSelDropdown:hover {
    color: #ff890a;
    background-color: white;
    transition: 0.2s ease;
}

.langSelDropdown:hover img{
    border: 2px solid black;
}
</style>