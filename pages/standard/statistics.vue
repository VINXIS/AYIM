<template>
    <div class="mode-wrapper">
        <options-menu 
            :currentTab="'statistics'"
            :mode="'standard'"
        ></options-menu>
        <statistics
            :mode="'standard'"
        ></statistics>
    </div>
</template>

<script>
import OptionsMenu from '~/Components/OptionsMenu';
import Statistics from '~/Components/Statistics';

export default {
    components: {
        OptionsMenu,
        Statistics,
    },
}
</script>
