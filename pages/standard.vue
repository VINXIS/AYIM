<template>
    <div class="mode-wrapper">
        <options-menu :currentTab.sync="currentTab"></options-menu>
        <keep-alive>
            <component :is="currentTab"></component>
        </keep-alive>        
    </div>
</template>

<script>
import OptionsMenu from '~/Components/OptionsMenu';
import Records from '~/Components/Records';
import Statistics from '~/Components/Statistics';

export default {
    components: {
        OptionsMenu,
        Records,
        Statistics,
    },
    data () {
        return {
            currentTab: 'records',
            tabs: ['records', 'statistics'],
        }
    },
}
</script>

<style>
.mode-wrapper {
    margin-top: 5vh;
    margin-right: 7vw;
}
</style>
