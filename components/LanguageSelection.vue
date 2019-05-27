<template>
    <div @click="active = !active" class="languageSelection">
        <div v-if="active" class="dropdown">
            Lol
        </div>
        <img src="https://osu.ppy.sh/images/flags/GB.png">
        EN
    </div>
</template>

<script>
export default{
    data: () => ({
        active: false,
    })
}
</script>

<style>
.languageSelection {
    display: flex;
    align-items: center;
    padding: 0 13px;
    cursor: pointer;
}

.languageSelection img {
    width: 35px;
    padding-right: 10px;
}

.dropdown {
    position: relative;
    background-color: #ff890a;
}
</style>