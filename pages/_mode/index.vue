<template>
    <div class="mode-wrapper">
        <options-menu 
            :currentMenu="'mapsets'"
            :mode="$route.params.mode"
        ></options-menu>
        <records
            :mode="$route.params.mode"
        ></records>
    </div>
</template>

<script>
import OptionsMenu from '~/Components/OptionsMenu';
import Records from '~/Components/Records';

export default {
    head: {
        title: `AYIM - mapsets`
    },
    components: {
        OptionsMenu,
        Records,
    },
    validate ({ params }) {
        return /^(standard|taiko|fruits|mania|storyboard)+$/.test(params.mode)
    },
}
</script>
