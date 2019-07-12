<template>
<div>
    <div class="cards-layout" v-if="categories">
        <div v-for="category in categories" :key="category.name" class="card">
            <div class="card__header">
                <img src="/bar-small.png" alt="">
                <div class="card__header__content">
                    <div class="card__header__content__dot"></div>
                    <div class="card__header__content__title">{{ $t(`ayim.modes.records.mappers.${category.name}`) }}</div>
                </div>
            </div>
            <div v-for="(mapper, i) in category.mappers" :key="mapper.id">
                <div class="card__body__mapper" :class="{ 'card__body__mapper--small': i != 0 }">
                    <img class="card__body__mapper__avatar" :src="`https://a.ppy.sh/${mapper.id}`" alt="">

                    <div class="card__body__mapper__content">
                        <div 
                            v-if="i != 0" class="card__body__mapper__content__flag" 
                            :style="`background-image: url('https://osu.ppy.sh/images/flags/${mapper.country}.png')`"
                        ></div>
                        <div class="card__body__mapper__content__username">{{ mapper.username }}</div>
                        <div 
                            v-if="i == 0" class="card__body__mapper__content__flag"
                            :style="`background-image: url('https://osu.ppy.sh/images/flags/${mapper.country}.png')`"
                        ></div>
                        <div class="card__body__mapper__content__value">{{ mapper.value.toLocaleString() }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
    props: {
        mode: String,
    },
    data () {
        return {
            categorySelected: null,
            categories: null,
            beatmapsets: null,
            beatmaps: null,
        }
    },
    async mounted () {
        try {
            this.categories = (await axios.get(`/${this.mode}/categories_mappers.json`)).data;
        } catch (error) {
            console.log(error);
        }
    },
}
</script>

<style>
.card__body__mapper {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    text-shadow: 0px 0px 3px #fff;
    height: calc(8vw + 10px);
}
.card__body__mapper__avatar {
    border-radius: 10px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin-right: 10px;
    height: 100%;
}
.card__body__mapper__content {
    display: flex;
    flex-direction: column;
    background: rgba(40, 40, 40, 0.6);
    border-radius: 10px;
    padding: calc(0.3vw + 5px);
    width: 100%;
}
.card__body__mapper__content__username {
    font-weight: bold;
    font-size: calc(1vw + 0.8em);
}
.card__body__mapper__content__flag {
    width: calc(1vw + 5px);
    height: calc(1vw + 5px);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    border-radius: 100%;
    background-color: #333;
}
.card__body__mapper__content__value {
    text-align: right;
    margin-top: auto;
    margin-left: auto;
    font-size: calc(1vw + 0.8em);
}

.card__body__mapper--small {
    height: calc(4vw + 10px);
}
.card__body__mapper--small .card__body__mapper__content {
    flex-direction: row;
    align-items: center;
    flex: 4.5;
    padding: 25px 15px;
}
.card__body__mapper--small .card__body__mapper__content__username  {
    font-size: inherit;
    font-weight: normal;
    margin-left: 10px;
}
.card__body__mapper--small .card__body__mapper__content__value {
    margin-top: 0;
    font-size: inherit;
}
</style>
