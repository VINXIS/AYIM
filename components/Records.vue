<template>
<div>
    <div class="cards-layout" v-if="!isExpanded && categories">
        <div v-for="category in categories" :key="category.name" class="card">
            <div class="card__header">
                <div class="card__header__content"
                    @click="expand(category.name)"
                >
                    <div class="card__header__content__dot"></div>
                    <div class="card__header__content__title">{{ $t(`ayim.modes.records.${category.name}`) }}</div>
                </div>
            </div>
            <div class="card__body" v-if="menu == 'beatmapsets'">
                <div v-for="(beatmapset, i) in category.beatmapsets" :key="beatmapset.id">
                    <div 
                        v-if="i == 0" 
                        class="card__body__content" 
                        :style="`background-image: url('https://assets.ppy.sh/beatmaps/${beatmapset.id}/covers/cover.jpg'`"
                    >
                        <div class="card__body__content__title">
                            {{ beatmapset.title }}
                        </div>
                        <div class="card__body__content__artist">
                            {{ beatmapset.artist }}
                        </div>
                        <div class="card__body__content__host">
                            {{ $t('ayim.modes.records.hostedBy') }} <b>{{ beatmapset.creator }}</b>
                        </div>
                        <div class="card__body__content__count">
                            {{ beatmapset.value.toLocaleString() }}
                        </div>
                    </div>

                    <div 
                        v-else
                        class="card__body__content card__body__content--small"
                        :style="`background-image: url('https://assets.ppy.sh/beatmaps/${beatmapset.id}/covers/cover.jpg'`"
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
            <div class="card__body" v-else>
                <div v-for="mapper in category.mappers" :key="mapper.id">
                    <div 
                        class="card__body__content"
                        :style="`background-image: url('https://a.ppy.sh/${mapper.id}'`"
                    >
                        <div class="card__body__content__title">
                            {{ mapper.username }}
                        </div>
                        <div class="card__body__content__count">
                            {{ mapper.value.toLocaleString() }}
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
        menu: String,
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
            if (this.menu == 'beatmapsets') {
                this.categories = (await axios.get(`/files/${this.mode}_categories.json`)).data;
                this.beatmapsets = (await axios.get(`/files/${this.mode}_beatmapsets.json`)).data;
                this.beatmaps = (await axios.get(`/files/${this.mode}_beatmaps.json`)).data;
            } else if (this.menu == 'mappers') {
                this.categories = (await axios.get(`/files/${this.mode}_categories_mappers.json`)).data;
            }
        } catch (error) {
            console.log(error);
        }
    },
}
</script>
