<template>
<div>
    <div class="cards-layout" v-if="!isExpanded && categories">
        <div v-for="category in categories" :key="category.name" class="card">
            <div class="card__header">
                <img src="/bar-small.png" alt="">
                <div class="card__header__content"
                    @click="expand(category.name)"
                >
                    <div class="card__header__content__dot"></div>
                    <div class="card__header__content__title">{{ $t(`ayim.modes.records.${category.name}`) }}</div>
                </div>
            </div>
            <div class="card__body">
                <div v-for="(beatmapset, i) in category.beatmapsets" :key="beatmapset.id">
                    <div 
                        v-if="i == 0" 
                        class="card__body__content" 
                        :style="`background-image: url('https://assets.ppy.sh/beatmaps/${beatmapset.id}/covers/cover.jpg')`"
                    >
                        <div class="card__body__content__title">
                            {{ beatmapset.title }}
                        </div>
                        <div class="card__body__content__artist">
                            {{ beatmapset.artist }}
                        </div>
                        <div class="card__body__content__host" v-if="beatmapset.creator">
                            {{ $t('ayim.modes.records.hostedBy') }} <b>{{ beatmapset.creator }}</b>
                        </div>
                        <div class="card__body__content__count">
                            {{ beatmapset.value.toLocaleString() }}
                        </div>
                    </div>

                    <div 
                        v-else
                        class="card__body__content card__body__content--small"
                        :style="`background-image: url('https://assets.ppy.sh/beatmaps/${beatmapset.id}/covers/cover.jpg')`"
                    >
                        <div class="card__body__content__title--small">
                            {{ beatmapset.title }}
                        </div>
                        <div class="card__body__content__count--small">
                            {{ beatmapset.value.toLocaleString() }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <records-expanded
        v-else-if="isExpanded"
        :is-expanded.sync="isExpanded"
        :category="categorySelected"
        :beatmapsets="beatmapsets"
        :beatmaps="beatmaps"
    ></records-expanded>
</div>
</template>

<script>
import axios from 'axios';
import RecordsExpanded from '~/Components/RecordsExpanded';

export default {
    components: {
        RecordsExpanded,
    },
    props: {
        mode: String,
    },
    data () {
        return {
            isExpanded: false,
            categorySelected: null,
            categories: null,
            beatmapsets: null,
            beatmaps: null,
        }
    },
    methods: {
        expand: async function(categoryName) {
            this.categorySelected = categoryName;
            this.isExpanded = !this.isExpanded;
        },
    },
    async mounted () {
        try {
            this.categories = (await axios.get(`/${this.mode}/categories_beatmapsets.json`)).data;
            this.beatmapsets = (await axios.get(`/${this.mode}/beatmapsets.json`)).data;
            this.beatmaps = (await axios.get(`/${this.mode}/beatmaps.json`)).data;
        } catch (error) {
            console.log(error);
        }
    },
}
</script>
