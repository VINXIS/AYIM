<template>
<div v-if="category">
    <div class="card__header">
        <img src="/bar-wide.png" alt="">
        <div class="card__header__content"
            @click="$emit('update:isExpanded', !isExpanded)"
        >
            <div class="card__header__content__arrow"></div>
            <div class="card__header__content__title">{{ category }}</div>
        </div>
    </div>

    <div class="card__body__content--expanded">
        <div class="card__body__content__number"></div>
        <div class="card__body__content__header card__body__content--small">
            <div class="card__body__content__title--small">TITLE</div>
            <div>ARTIST</div>
            <div v-if="category == 'passrate'">VERSION</div>
            <div v-if="category != 'title'">HOSTED BY</div>
            <div class="card__body__content__count--small">{{ category }}</div>
        </div>
    </div>

    <div 
        v-for="(beatmapset, i) in beatmapsetsPage"
        :key="i"
    >
        <div class="card__body__content--expanded">
            <div class="card__body__content__number" >{{ i + 1 }}</div>
            <div class="card__body__content card__body__content--small"
            :style="`background-image: url('https://assets.ppy.sh/beatmaps/${beatmapset.id}/covers/cover.jpg'`">
                <i class="card__body__content__title--small">{{ beatmapset.title }}</i>
                <div>{{ beatmapset.artist }}</div>
                <div v-if="category == 'passrate'">{{ beatmapset.version }}</div>
                <div v-if="category != 'title'">{{ beatmapset.creator }}</div>
                <div class="card__body__content__count card__body__content__count--small">
                    {{ category == 'title' ? beatmapset.count : beatmapset[category].toLocaleString() }}
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        isExpanded: Boolean,
        category: String,
        beatmapsets: Array,
        beatmaps: Array,
    },
    data () {
        return {
            limit: 20,
            sortedBeatmapsets: [],
        }
    },
    computed: {
        beatmapsetsPage: function() {
            return this.sortedBeatmapsets.slice(0, this.limit);
        },
    },
    methods: {
        scroll: function() {
            window.onscroll = () => {
                if (document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight) {
                    this.limit += 20;
                }
            };
        },
        sortBy: function(field) {
            if (this.beatmapsets) {
                return [...this.beatmapsets].sort((a, b) => {
                    if (a[field] > b[field]) return -1;
                    else if (a[field] < b[field]) return 1;
                    else return 0;
                });
            }
        },
    },
    async mounted () {
        if (this.category == 'title') {
            this.beatmapsets.forEach(b => {
                const i = this.sortedBeatmapsets.findIndex(bb => bb.title == b.title && !bb.title.toString().includes('Compilation'));
                if (i != -1) {
                    this.sortedBeatmapsets[i].count += 1;
                } else {
                    b.count = 1;
                    this.sortedBeatmapsets.push(b);
                }
            });

            this.sortedBeatmapsets.sort((a, b) => {
                if (a.count > b.count) return -1;
                else return a.count < b.count;
            });
        } else if (this.category == 'passrate') {
            this.sortedBeatmapsets = this.beatmaps
        } else {
            this.sortedBeatmapsets = this.sortBy(this.category);
        }

        this.scroll();
    },
}
</script>
