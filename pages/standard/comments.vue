<template>
    <div class="mode-wrapper">
        <options-menu 
            :currentTab="'records'"
            :mode="'standard'"
        ></options-menu>
    </div>
</template>

<script>
import OptionsMenu from '~/Components/OptionsMenu';

export default {
    components: {
        OptionsMenu,
    },
}
</script>
