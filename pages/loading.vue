<template>
    <div class="loading">
        <div></div>
        <img src="../CorsaceAssets/img/corsace.png">
    </div>
</template>

<style>
@keyframes load1 {
    0% { opacity: 0%; }
    12.5% { opacity: 100%; }
    87.5% { opacity: 100%; }
    100% { opacity: 0%; }
}

.loading {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.loading img {
    width: 2.55vw;
}

.loading div:nth-child(1) {
    position: absolute;
    width: 2.55vw;
    height: 2.55vw;
    border-bottom: 0.3vw solid #fb2475;
    border-radius: 50%;
    animation: load1 8s linear infinite;
}
</style>