<template>
    <div class="mode-wrapper">
        <options-menu 
            :currentMenu="'mappers'"
            :currentTab="'records'"
            :mode="$route.params.mode"
        ></options-menu>
        <mappers-records
            :mode="$route.params.mode"
        ></mappers-records>
    </div>
</template>

<script>
import OptionsMenu from '~/Components/OptionsMenu';
import MappersRecords from '~/Components/MappersRecords';

export default {
    components: {
        OptionsMenu,
        MappersRecords,
    },
    validate ({ params }) {
        return /^(standard|taiko|fruits|mania|storyboard)+$/.test(params.mode)
    },
}
</script>
