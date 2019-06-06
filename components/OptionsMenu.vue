<template>
<div>
    <div class="mode-nav">
        <div class="mode-nav__title">osu<span style="color:#fb2475;">!{{ mode }}</span></div>
        <div class="mode-nav__menu">
            <nuxt-link :to="`/${mode}/`" class="btn">{{ $t('ayim.modes.options.mapsets') }}</nuxt-link>
            <nuxt-link :to="`/${mode}/mappers`" class="btn">{{ $t('ayim.modes.options.mappers') }}</nuxt-link>
            <nuxt-link :to="`/${mode}/comments`" class="btn">{{ $t('ayim.modes.options.comments') }}</nuxt-link>
        </div>
    </div>
    <div class="divisor"></div>
    <div class="records-menu">
        <nuxt-link :to="`/${mode}`" :class="isSelected('records')">{{ $t('ayim.modes.options.records') }}</nuxt-link>
        <nuxt-link :to="`/${mode}/statistics`" :class="isSelected('statistics')">{{ $t('ayim.modes.options.statistics') }}</nuxt-link>
    </div>
</div>
</template>

<script>
export default {
    props: {
        currentTab: String,
        mode: String,
    },
    methods: {
        isSelected: function(tab) {
            return this.currentTab == tab ? 'records-menu__item--selected' : 'records-menu__item';
        },
    }
}
</script>

<style>
a {
    text-decoration: none;
}
.btn {
    display: inline-block;
    text-align: center;
    padding: 1px 6px;
    vertical-align: middle;
    box-sizing: border-box;
    border-width: 2px;
    border-style: outset;
    border-radius: 100px;
    border-color: transparent;
    min-width: 130px;
    width: calc(10vw);
    min-height: 15px;
    height: 100%;
    font-size: calc(1vw + 0.2em);
    margin-left: 17px;
    background-color: #fb2475;
    color: #fff;
    transition: background-color 0.25s ease;
    transition: color 0.25s ease;
    cursor: pointer;
}
.btn:hover {
    background-color: #ffffff;
    color: #2a2a2a;
}
.btn:disabled {
    background-color: #2a2a2a;
    color: #aeaeae;
}
.mode-nav {
    display: flex;
    flex-direction: row;
}
.mode-nav__menu {
    margin-left: auto;
    margin-top: 10px;
    margin-bottom: 10px;
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
    border-bottom: 3px #fb2475 solid;
    color: #fff;
    padding-left: 7px;
    padding-right: 7px;
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
