<template>
    <div class="loading">
        <img src="../CorsaceAssets/img/loading/mca-ayim/2.png">
        <img src="../CorsaceAssets/img/loading/mca-ayim/1.png">
        <img src="../CorsaceAssets/img/loading/mca-ayim/3.png">
        <img src="../CorsaceAssets/img/loading/mca-ayim/4.png">
        <img src="../CorsaceAssets/img/loading/mca-ayim/5.png">
        <img src="../CorsaceAssets/img/loading/mca-ayim/6.png">
        <img src="../CorsaceAssets/img/loading/mca-ayim/7.png">
    </div>
</template>

<style>
.loading {
    display: flex;
    position: relative;
    bottom: -80px;
    align-items: center;
    justify-content: center;
}

.loading img {
    position: absolute;
}

.loading img:nth-child(3) {
    animation: load1 2.5s linear infinite;
}

.loading img:nth-child(4) {
    animation: load2 2.5s linear infinite;
}

.loading img:nth-child(5) {
    animation: load3 2.5s linear infinite;
}

.loading img:nth-child(6) {
    animation: load4 2.5s linear infinite;
}

.loading img:nth-child(7) {
    animation: load5 2.5s linear infinite;
}

.loading img:nth-child(1) {
    animation: load6 2.5s linear infinite;
}

@keyframes load1 {
    0% { opacity: 0; }
    12.5% { opacity: 1; }
    87.5% { opacity: 1; }
    100% { opacity: 0; }
}

@keyframes load2 {
    0% { opacity: 0; }
    12.5% { opacity: 0; }
    25% { opacity: 1; }
    87.5% { opacity: 1; }
    100% { opacity: 0; }
}

@keyframes load3 {
    0% { opacity: 0; }
    25% { opacity: 0; }
    37.5% { opacity: 1; }
    87.5% { opacity: 1; }
    100% { opacity: 0; }
}

@keyframes load4 {
    0% { opacity: 0; }
    37.5% { opacity: 0; }
    50% { opacity: 1; }
    87.5% { opacity: 1; }
    100% { opacity: 0; }
}

@keyframes load5 {
    0% { opacity: 0; }
    50% { opacity: 0; }
    62.5% { opacity: 1; }
    87.5% { opacity: 1; }
    100% { opacity: 0; }
}

@keyframes load6 {
    0% { opacity: 0; }
    62.5% { opacity: 0; }
    75% { opacity: 1; }
    87.5% { opacity: 1; }
    100% { opacity: 0; }
}
</style>
