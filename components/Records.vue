<template>
<div>
    <div class="cards-layout" v-if="!isExpanded">
        <div v-for="n in 9" :key="n" class="card">
            <div class="card__header">
                <div class="card__header__content"
                    @click="isExpanded = !isExpanded"
                >
                    <div class="card__header__content__dot"></div>
                    <div class="card__header__content__title">HIGHEST PLAYCOUNT</div>
                </div>
            </div>
            <div class="card__body">
                <div class="card__body__content">
                    <div class="card__body__content__title">
                        Hachigatsu Bou Tsukiakari
                    </div>
                    <div class="card__body__content__artist">
                        Yorushika
                    </div>
                    <div class="card__body__content__host">
                        Hosted by <b>Delis</b>
                    </div>
                    <div class="card__body__content__playcount">
                        0,012,122
                    </div>
                </div>

                <div class="card__body__content card__body__content--small">
                    <div class="card__body__content__title--small">
                        Hachigatsu Bou Tsukiakari
                    </div>
                    <div class="card__body__content__playcount--small">
                        0,012,122
                    </div>
                </div>

                <div class="card__body__content card__body__content--small">
                    <div class="card__body__content__title--small">
                        Hachigatsu Bou Tsukiakari
                    </div>
                    <div class="card__body__content__playcount--small">
                        0,012,122
                    </div>
                </div>
            </div>
        </div>
    </div>
    <records-expanded
        v-else
        :is-expanded.sync="isExpanded"
    ></records-expanded>
</div>
</template>

<script>
import RecordsExpanded from '~/Components/RecordsExpanded';

export default {
    components: {
        RecordsExpanded,
    },
    data () {
        return {
            isExpanded: false,
        }
    },
    methods:{
        expand: function() {
            
            this.isExpanded = !isExpanded;
            console.log(this.isExpanded);
        }
    }
}
</script>
