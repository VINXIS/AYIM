<template>
    <div class="mode-wrapper">
        <options-menu
            :currentMenu="$route.params.menu"
            :currentTab="'statistics'"
            :mode="$route.params.mode"
        ></options-menu>
        <statistics
            :mode="$route.params.mode"
            :menu="$route.params.menu"
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
    validate ({ params }) {
        return /^(standard|taiko|fruits|mania|storyboard)+$/.test(params.mode) &&
            /^(mappers|mapsets)+$/.test(params.menu);
    },
}
</script>
