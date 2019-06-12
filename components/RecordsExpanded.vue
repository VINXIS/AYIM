<template>
<div v-if="category">
    <div class="card__header">
        <img src="/bar-wide.png" alt="">
        <div class="card__header__content card__header__content--expanded"
            @click="$emit('update:isExpanded', !isExpanded)"
        >
            <div class="card__header__content__arrow"></div>
            <div class="card__header__content__title">{{ category }}</div>
        </div>
    </div>

    <div class="card__body--expanded">
        <div class="card__body__number"></div>
        <div class="card__body__header card__body--small">
            <div class="card__body__title">TITLE</div>
            <div>ARTIST</div>
            <div v-if="category == 'passrate'">VERSION</div>
            <div v-if="category != 'title'">HOSTED BY</div>
            <div class="card__body__value">{{ category }}</div>
        </div>
    </div>

    <div 
        class="card__body--expanded"
        v-for="(beatmapset, i) in beatmapsetsPage"
        :key="i"
    >
        <div class="card__body__number" >{{ i + 1 }}</div>
        <div
            class="card__body card__body--small"
            :style="`background-image: url('https://assets.ppy.sh/beatmaps/${beatmapset.id}/covers/cover.jpg'`"
        >
            <i class="card__body__title">{{ beatmapset.title }}</i>
            <div>{{ beatmapset.artist }}</div>
            <div v-if="category == 'passrate'">{{ beatmapset.version }}</div>
            <div v-if="category != 'title'">{{ beatmapset.creator }}</div>
            <div class="card__body__value">
                {{ category == 'title' ? beatmapset.count : beatmapset[category].toLocaleString() }}
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

<style>
.card__header__content__arrow {
    margin: 0 1.7%;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0.6vw 0.8vw 0.6vw 0vw;
    border-color: transparent var(--pink) transparent transparent;
    transition: border-color 0.25s ease;
}
.card__body--expanded {
    display: grid;
    grid-template-columns: calc(3vw + 6px) 1fr;
    grid-gap: 8px;
}
.card__header__content--expanded .card__header__content__title {
    letter-spacing: 0.3em;
}
.card__body--expanded .card__body__value {
    margin-top: 0;
}
.card__body--expanded .card__body {
    padding-left: 20px;
    padding-right: 20px;
}
.card__body__header {
    padding: 0 20px;
    margin-bottom: 10px;
}
.card__body__header > div {
    text-transform: uppercase;
}
.card__body--small > div {
    flex: 1 1 20%;
}
.card__body--small > .card__body__title {
    flex: 1 1 40%;
}
.card__body--small {
    text-shadow: 0px 0px 4px #fff;
}
.card__body__number {
    font-size: calc(1vw + 0.7em);
    font-weight: bold;
    text-align: center;
}
</style>
