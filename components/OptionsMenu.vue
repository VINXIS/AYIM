<template>
<div>
    <div class="mode-nav">
        <div class="mode-nav__title">osu<span style="color:#fb2475;">!standard</span></div>
        <div class="mode-nav__menu">
            <button class="btn btn--pink">mapsets</button>
            <button class="btn btn--white">mappers</button>
            <button class="btn btn--black">comments</button>
        </div>
    </div>
    <div class="divisor"></div>
    <div class="records-menu">
        <a href="#" :class="isSelected('records')" @click="$emit('update:currentTab', $event.target.innerText)">records</a>
        <a href="#" :class="isSelected('statistics')" @click="$emit('update:currentTab', $event.target.innerText)">statistics</a>
    </div>
</div>
</template>

<script>
export default {
    props: {
        currentTab: String,
    },
    methods: {
        isSelected: function(tab) {
            return this.currentTab == tab ? 'records-menu__item--selected' : 'records-menu__item';
        }
    }
}
</script>

<style>
a {
    text-decoration: none;
}
.btn {
    border-radius: 100px;
    border-color: transparent;
    min-width: 130px;
    width: calc(10vw);
    min-height: 15px;
    height: 100%;
    font-size: calc(1vw + 0.2em);
    margin-left: 17px;
}
.btn--pink {
    background-color: #fb2475;
    color: #fff;
}
.btn--white {
    background-color: #ffffff;
    color: #2a2a2a;
}
.btn--black {
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
    }
    .mode-nav__menu {
        margin-left: 0;
    }
}
</style>
