<template>
<div>
    <div class="card__header">
        <div class="card__header__content"
            @click="$emit('update:isExpanded', !isExpanded)"
        >
            <div class="card__header__content__arrow"></div>
            <div class="card__header__content__title">HIGHEST PLAYCOUNT</div>
        </div>
    </div>

    <div>
        <div class="card__body__content__header card__body__content--small card__body__content--expanded">
            <div class="card__body__content__number"></div>
            <div class="card__body__content__title--small">TITLE</div>
            <div>ARTIST</div>
            <div>HOSTED BY</div>
            <div class="card__body__content__playcount--small">PLAYCOUNT</div>
        </div>
    </div>

    <div v-for="n in 10" :key="n" class="card__body__content--small">
        <div class="card__body__content__number">{{ n }}</div>
        <div class="card__body__content card__body__content--small card__body__content--expanded">
            <i class="card__body__content__title--small">
                Hachigatsu Bou Tsukiakari
            </i>
            <div>
                urmom
            </div>
            <div>
                by dad
            </div>
            <div class="card__body__content__playcount card__body__content__playcount--small">
                0,012,122
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: {
        isExpanded: Boolean,
    },
}
</script>
