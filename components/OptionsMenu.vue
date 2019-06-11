<template>
<div>
    <div class="mode-nav">
        <div class="mode-nav__title">osu<span style="color:#fb2475;">!{{ mode }}</span></div>
        <div class="mode-nav__menu">
            <nuxt-link 
                :to="`/${mode}/`" 
                class="btn" 
                :class="{ 'btn--selected': currentMenu == 'mapsets' }"
            >
                {{ $t('ayim.modes.options.mapsets') }}
            </nuxt-link>
            <nuxt-link 
                :to="`/${mode}/mappers`" 
                class="btn"
                :class="{ 'btn--selected': currentMenu == 'mappers' }"
            >
                {{ $t('ayim.modes.options.mappers') }}
            </nuxt-link>
            <nuxt-link :to="`/${mode}/comments`" class="btn" :class="{ 'btn--selected': currentMenu == 'comments' }">{{ $t('ayim.modes.options.comments') }}</nuxt-link>
        </div>
    </div>
    <div class="divisor"></div>
    <div class="records-menu" v-if="currentMenu != 'comments'">
        <nuxt-link
            :to="`/${this.mode}/${currentMenu == 'mapsets' ? '' : currentMenu}`"
            class="records-menu__item"
            :class="{ 'records-menu__item--selected': currentTab == 'records' }"
        >
            {{ $t('ayim.modes.options.records') }}
        </nuxt-link>
        <nuxt-link
            :to="`/${this.mode}/${currentMenu}/statistics`"
            class="records-menu__item"
            :class="{ 'records-menu__item--selected': currentTab == 'statistics' }"
        >
            {{ $t('ayim.modes.options.statistics') }}
        </nuxt-link>
    </div>
</div>
</template>

<script>
export default {
    props: {
        currentMenu: String,
        currentTab: String,
        mode: String,
    },
    methods: {
        setUrl: function(isStatistics) {
            if (this.currentMenu == 'mapsets'){
                return `/${this.mode}/${isStatistics ? 'statistics' : ''}`;
            } else {
                return `/${this.mode}/${this.currentMenu}/${isStatistics ? 'statistics' : ''}`;
            }
        }
    },
}
</script>

<style>
a {
    text-decoration: none;
}
.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    min-width: 130px;
    width: calc(10vw);
    min-height: 18px;
    font-size: calc(1vw + 0.2em);
    margin-left: 17px;
    transition: color 0.25s ease, background-color 0.25s ease;
    background-color: #2a2a2a;
    color: #aeaeae;
}
.btn--selected {
    background-color: #fb2475;
    color: #fff;
}
.btn:hover {
    background-color: #ffffff;
    color: #2a2a2a;
}
.mode-nav {
    display: flex;
    flex-direction: row;
}
.mode-nav__menu {
    margin-left: auto;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
}
.mode-nav__title {
    font-size: calc(1vw + 1.5em);
    font-weight: bold;
    color: #ffffff;
}
.records-menu {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    letter-spacing: 2px;
    font-size: calc(1vw + 0.5em);
    margin-bottom: 30px;
}
.records-menu__item {
    border-bottom: 3px #808080 solid;
    color: #808080;
    padding-left: 7px;
    padding-right: 7px;
}
.records-menu__item--selected {
    border-color: #fb2475;
    color: #fff;
}

.divisor {
    width: 100%;
    padding-bottom: 10px;
    background: url('/line-copy.png') no-repeat center;
    background-size: contain;
}

@media screen and (max-width: 990px) {
    .mode-nav {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .mode-nav__menu {
        margin-left: 0;
    }
}
</style>
