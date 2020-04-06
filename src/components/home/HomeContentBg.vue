<template>
    <div class="bg-fixed">
        <div class="content-l-bg">
            <img src="../../assets/pictures/home/content/content_l_bg.png" />
        </div>
        <div class="content"></div>
        <div class="content-r-bg">
            <img src="../../assets/pictures/home/content/content_r_bg.png" />
        </div>
    </div>
</template>
<style scoped>
.bg-fixed {
    position: fixed;
    width: 100%;
    z-index: -1;
    top: 0px;
    display: flex;
}

.content {
    flex: 0 0 1190px;
}
.content-l-bg,
.content-r-bg {
    flex: 1 1 auto;
    overflow: hidden;
}
.content-r-bg img,
.content-l-bg img {
    height: 100vh;
    width: 100%;
}
</style>