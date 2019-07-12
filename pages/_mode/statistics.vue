<template>
    <div class="mode-wrapper">
        <options-menu
            :currentMenu="'statistics'"
            :mode="$route.params.mode"
        ></options-menu>
        <statistics
            :mode="$route.params.mode"
        ></statistics>
    </div>
</template>

<script>
import OptionsMenu from '~/Components/OptionsMenu';
import Statistics from '~/Components/Statistics';

export default {
    head: {
        title: `AYIM - statistics`
    },
    components: {
        OptionsMenu,
        Statistics,
    },
    validate ({ params }) {
        return /^(standard|taiko|fruits|mania|storyboard)+$/.test(params.mode);
    },
}
</script>
