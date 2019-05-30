<template>
    <div @click="active = !active" class="languageSelection">
        <div v-if="active" class="dropdown">
            <div class="langSelDropdown">
                <img src="https://osu.ppy.sh/images/flags/GB.png">
                EN
            </div>
            <div class="langSelDropdown">
                <img src="https://osu.ppy.sh/images/flags/GB.png">
                EN
            </div>
            <div class="langSelDropdown">
                <img src="https://osu.ppy.sh/images/flags/GB.png">
                EN
            </div>
            <div class="langSelDropdown">
                <img src="https://osu.ppy.sh/images/flags/GB.png">
                EN
            </div>
            <div class="langSelDropdown">
                <img src="https://osu.ppy.sh/images/flags/GB.png">
                EN
            </div>
        </div>
        <img src="https://osu.ppy.sh/images/flags/GB.png">
        EN
    </div>
</template>

<script>
export default{
    data () {
        return {
            active: false,
            lang: ""
        }
    },
}
</script>

<style>
.languageSelection {
    display: flex;
    align-items: center;
    padding: 0 calc(0.65vw + 4px);
    cursor: pointer;
}

.languageSelection img {
    width: 1.8vw;
    padding-right: 0.55vw;
}

.dropdown {
    position: absolute;
    bottom: 100%;
    right: 0;
    background-color: #ff890a;
}

.langSelDropdown {
    padding: 0.65vw calc(0.65vw + 4px);
    display: flex;
    align-items: center;
    color: white;
    transition: 0.2s ease;
}

.langSelDropdown:hover {
    color: #ff890a;
    background-color: white;
    transition: 0.2s ease;
}
</style>