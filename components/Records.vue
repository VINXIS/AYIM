<template>
<div>
    <div class="cards-layout" v-if="!isExpanded && categories">
        <div v-for="category in beatmapsByCategory" :key="category.name" class="card">
            <div class="card__header card__header--expandable">
                <img src="/bar-small.png" alt="">
                <div class="card__header__content"
                    @click="expand(category)"
                >
                    <div class="card__header__content__dot"></div>
                    <div class="card__header__content__title">{{ $t(`ayim.modes.records.mapsets.${category.name}`) }}</div>
                </div>
            </div>
            <div v-if="category.beatmapsets">
                <div v-for="(beatmapset, i) in getBeatmapsets(category.beatmapsets, category.name)" :key="beatmapset.beatmapId || beatmapset.id">
                    <div 
                        v-if="i == 0" 
                        class="card__body" 
                        :style="getBeatmapBackground(beatmapset.id, category.name)"
                    >
                        <div class="card__body__title">
                            {{ getBeatmapHeader(beatmapset, category.name) }}
                        </div>
                        <div class="card__body__artist" v-if="category.name != 'countArtist'">
                            {{ beatmapset.artist }}
                        </div>
                        <div class="card__body__host" v-if="beatmapset.creator && category.name != 'countArtist'">
                            {{ $t('ayim.modes.records.mapsets.hostedBy') }} <b>{{ beatmapset.creator }}</b>
                        </div>
                        <div class="card__body__value">
                            {{ getBeatmapValue(beatmapset, category.name) }}
                        </div>
                    </div>

                    <div 
                        v-else
                        class="card__body card__body--small"
                        :style="getBeatmapBackground(beatmapset.id, category.name)"
                    >
                        <div class="card__body__title">
                            {{ getBeatmapHeader(beatmapset, category.name) }}
                        </div>
                        <div class="card__body__value">
                            {{ getBeatmapValue(beatmapset, category.name) }}
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
        :beatmapsets="selectedBeatmapsets"
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
            beatmaps: [],
            selectedBeatmapsets: null,
        }
    },
    computed: {
        beatmapsByCategory: function() {
            if (this.beatmapsets) {
                let beatmapsByCategory = [];
                this.categories.forEach(c => {
                    let category = {};
                    category.name = c;
                    category.beatmapsets = this.sortBy(c);
                    beatmapsByCategory.push(category);
                });
                
                return beatmapsByCategory;
            }
        },
    },
    methods: {
        getBeatmapsets: function(beatmapsets, categoryName) {
            if (categoryName != 'commonSprite' && categoryName != 'spriteUsage')
                return beatmapsets.slice(0,3);
            else
                return beatmapsets;
        },
        getBeatmapBackground: function(beatmapsetId, categoryName) {
            if (categoryName == 'commonSprite' || categoryName == 'spriteUsage') return;
            else return `background-image: url('https://assets.ppy.sh/beatmaps/${beatmapsetId}/covers/cover.jpg')`
        },
        getBeatmapHeader: function(beatmapset, categoryName) {
            if (categoryName == 'countArtist') return beatmapset.artist;
            else if (categoryName == 'maxCombo') return `${beatmapset.title} [${beatmapset.version}]`
            else return beatmapset.title;
        },
        getBeatmapValue: function(beatmapset, categoryName) {
            if (categoryName == 'specificFavorites') categoryName = 'favorites';
            if (!beatmapset[categoryName]) return;

            if (categoryName == 'hitLength' || categoryName == 'combinedDrain') {
                const min = Math.floor(beatmapset[categoryName] / 60);
                const sec = beatmapset[categoryName] - min * 60;
                return min + ':' + (sec < 10 ? `0${sec}` : sec);
            } 
            else if (categoryName == 'favPC') return beatmapset[categoryName].toLocaleString(undefined, { maximumFractionDigits: 5 });
            else return beatmapset[categoryName].toLocaleString();
        },
        sortBy: function(category) {
            if (!this.beatmapsets || !this.beatmaps) return;
            
            let beatmaps = [];

            if (category == 'countTitle' || category == 'countArtist') {
                // How to get stuff like 'm2u & x' aaaa
                const column = category.slice(5).toLowerCase();
                
                this.beatmapsets.forEach(b => {
                    const i = beatmaps.findIndex(bb => bb[column] == b[column] && !bb[column].toString().includes('Compilation'));
                    if (i != -1) {
                        beatmaps[i][category] += 1;
                    } else {
                        b[category] = 1;
                        beatmaps.push(b);
                    }
                });
            } else if (
                    category == 'passrate' || category == 'difficultyRating' || 
                    category == 'countNormal' || category == 'maxCombo'
                ) {
                // Not sure about this one ?
                beatmaps = this.beatmaps.filter(b => {
                    if (b.approved) return b.approved == 1;
                    else return b;
                });
            } else if (category == 'specificFavorites' || category == 'favPC') {
                category = 'favorites';
                beatmaps = this.beatmapsets.filter(b => {
                    return b.isModeSpecific;
                });
            } else if (category == 'commonSprite' || category == 'spriteUsage') {
                return this.beatmapsets.filter(b => {
                    return b[category];
                });
            } else {
                beatmaps = this.beatmapsets;
            }
            
            return beatmaps.sort((a, b) => {
                if (a[category] > b[category]) return -1;
                else if (a[category] < b[category]) return 1;
                else return 0;
            }).slice();
        },
        expand: function(category) {
            this.categorySelected = category.name;
            this.isExpanded = !this.isExpanded;
            this.selectedBeatmapsets = category.beatmapsets;
        },
    },
    async mounted () {
        try {
            this.categories = (await axios.get(`/${this.mode}/categories_beatmapsets.json`)).data;
            this.beatmapsets = (await axios.get(`/${this.mode}/beatmapsets.json`)).data;
            if (this.mode != 'storyboard') this.beatmaps = (await axios.get(`/${this.mode}/beatmaps.json`)).data;
        } catch (error) {
            console.log(error);
        }
    },
}
</script>
