<template>
    <div class="mode-wrapper">
        <options-menu 
            :currentMenu="'comments'"
            :currentTab="'records'"
            :mode="$route.params.mode"
        ></options-menu>
    </div>
</template>

<script>
import OptionsMenu from '~/Components/OptionsMenu';

export default {
    components: {
        OptionsMenu,
    },
    validate ({ params }) {
        return /^(standard|taiko|fruits|mania|storyboard)+$/.test(params.mode)
    },
}
</script>
