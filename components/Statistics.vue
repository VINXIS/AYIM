<template>
    <div class="cards-layout" v-if="!isExpanded">
        <div v-for="n in 9" :key="n" class="card">
            <div class="card__header">
                <div class="card__header__content"
                    @click="isExpanded = !isExpanded"
                >
                    <div class="card__header__content__dot"></div>
                    <div class="card__header__content__title">APPROACH RATE</div>
                </div>
            </div>
            <div class="card__body">
                <div class="card__body__content">
                    <div class="card__body__content__stat-subtitle">
                        Number of maps with
                    </div>
                    <div class="card__body__content__stat-title">
                        AR10
                    </div>
                    <div class="card__body__content__stat-ammount">
                        23
                    </div>
                </div>
                <div class="card__body__content">
                    <div class="card__body__content__stat-subtitle">
                        Number of maps with
                    </div>
                    <div class="card__body__content__stat-title">
                        AR10
                    </div>
                    <div class="card__body__content__stat-ammount">
                        23
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>
