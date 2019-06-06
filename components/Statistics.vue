<template>
    <div class="cards-layout" v-if="stats">
        <div v-for="stat in stats" :key="stat.name" class="card">
            <div class="card__header">
                <div class="card__header__content">
                    <div class="card__header__content__dot"></div>
                    <div class="card__header__content__title">{{ stat.name }}</div>
                </div>
            </div>
            <div class="card__body">
                <div 
                    class="card__body__content"
                    v-for="definition in stat.definitions" 
                    :key="definition.id"
                >
                    <div class="card__body__content__stat-subtitle">
                        {{ definition.subtitle }}
                    </div>
                    <div class="card__body__content__stat-title">
                        {{ definition.title }}
                    </div>
                    <div class="card__body__content__stat-ammount">
                        {{ definition.value }}
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
            stats: null,
        }
    },
    async mounted () {
        try {
            this.stats = (await axios.get(`/files/${this.mode}_stats.json`)).data;
        } catch (error) {
            console.log(error);
        }
    },
}
</script>
