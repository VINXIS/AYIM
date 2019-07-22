<template>
    <transition-group appear name="list" tag="div" class="cards-layout" v-if="stats">
        <div v-for="stat in stats" :key="stat.name" class="card">
            <div class="card__header">
                <img src="/bar-small.png" alt="">
                <div class="card__header__content">
                    <div class="card__header__content__dot"></div>
                    <div class="card__header__content__title">{{ $t(`ayim.modes.statistics.${stat.name}.header`) }}</div>
                </div>
            </div>
            <div 
                class="card__body"
                v-for="(definition, i) in stat.definitions" 
                :key="i"
            >
                <div>
                    {{ $t(`ayim.modes.statistics.${stat.name}.subtitle`) }}
                </div>
                <div class="card__body__stat-title">
                    {{ $t(`ayim.modes.statistics.${stat.name}.${definition.id}`, { number: definition.number}) }}
                </div>
                <div class="card__body__stat-value">
                    {{ definition.value.toLocaleString() }}
                </div>
            </div>
        </div>
    </transition-group>
</template>

<script>
import axios from 'axios';

export default {
    props: {
        mode: String,
    },
    data () {
        return {
            stats: null,
        }
    },
    async mounted () {
        try {
            this.stats = (await axios.get(`/${this.mode}/statistics.json`)).data;
        } catch (error) {
            console.log(error);
        }
    },
}
</script>

<style>
.card__body__stat-title {
    font-size: calc(1vw + 1.5em);
}
.card__body__stat-value {
    font-size: calc(1vw + 1.7em);
    text-align: right;
    text-shadow: 0px 0px 4px #fff;
    margin-top: auto;
}
</style>
