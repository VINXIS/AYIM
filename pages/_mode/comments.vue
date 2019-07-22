<template>
    <div class="mode-wrapper">
        <options-menu 
            :currentMenu="'comments'"
            :mode="$route.params.mode"
        ></options-menu>
        <comments
            :mode="$route.params.mode"
        ></comments>
    </div>
</template>

<script>
import OptionsMenu from '~/Components/OptionsMenu';
import Comments from '~/Components/Comments';

export default {
    head: {
        title: `AYIM - comments`
    },
    components: {
        OptionsMenu,
        Comments,
    },
    validate ({ params }) {
        return /^(standard|taiko|fruits|mania|storyboard)+$/.test(params.mode)
    },
}
</script>
