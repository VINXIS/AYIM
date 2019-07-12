<template>
<div v-if="category">
    <div class="card__header card__header--expandable">
        <img src="/bar-wide.png" alt="">
        <div class="card__header__content card__header__content--expanded"
            @click="$emit('update:isExpanded', !isExpanded)"
        >
            <div class="card__header__content__arrow"></div>
            <div class="card__header__content__title">{{ $t(`ayim.modes.records.mapsets.${category}`) }}</div>
        </div>
    </div>

    <div class="card__body--expanded">
        <div class="card__body__number"></div>
        <div class="card__body__header card__body--small">
            <div v-if="category != 'countArtist'" class="card__body__title">{{ $t('ayim.modes.recordsDetail.title') }}</div>
            <div>{{ $t('ayim.modes.recordsDetail.artist') }}</div>
            <div v-if="category == 'passrate'">{{ $t('ayim.modes.recordsDetail.version') }}</div>
            <div v-if="category != 'countTitle' && category != 'countArtist'">{{ $t('ayim.modes.records.mapsets.hostedBy') }}</div>
            <div class="card__body__value">{{ $t(`ayim.modes.records.mapsets.${category}`) }}</div>
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
            <i v-if="category != 'countArtist'" class="card__body__title">{{ beatmapset.title }}</i>
            <div>{{ beatmapset.artist }}</div>
            <div v-if="category == 'passrate'">{{ beatmapset.version }}</div>
            <div v-if="category != 'countTitle' && category != 'countArtist'">{{ beatmapset.creator }}</div>
            <div class="card__body__value">
                {{ $parent.getBeatmapValue(beatmapset, category) }}
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
    },
    data () {
        return {
            limit: 20,
        }
    },
    computed: {
        beatmapsetsPage: function() {
            return this.beatmapsets.slice(0, this.limit);
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
    },
    async mounted () {
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
