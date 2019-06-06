<template>
    <div class="mode-wrapper">
        <options-menu 
            :currentTab="'records'"
            :mode="'standard'"
        ></options-menu>
        <records
            :menu="'mappers'"
            :mode="'standard'"
        ></records>
    </div>
</template>

<script>
import OptionsMenu from '~/Components/OptionsMenu';
import Records from '~/Components/Records';

export default {
    components: {
        OptionsMenu,
        Records,
    },
}
</script>
