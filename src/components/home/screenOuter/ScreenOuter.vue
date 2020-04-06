<template>
    <div class="screen-outer clearfix">
        <div class="main clearfix">
            <ScreenOuterTbh></ScreenOuterTbh>
            <ScreenOuterCore></ScreenOuterCore>
            <ScreenOuterSub></ScreenOuterSub>
        </div>
        <ScreenOuterRight></ScreenOuterRight>
    </div>
</template>
<script>
import ScreenOuterTbh from "./ScreenOuterTbh.vue";
import ScreenOuterCore from "./ScreenOuterCore.vue";
import ScreenOuterSub from "./ScreenOuterSub.vue";
import ScreenOuterRight from "./ScreenOuterRight.vue";
export default {
    components: {
        ScreenOuterTbh,
        ScreenOuterCore,
        ScreenOuterSub,
        ScreenOuterRight
    }
};
</script>
<style scoped>
.screen-outer {
    width: 1190px;
    margin: 0 auto;
    height: 522px;
}

.main {
    float: left;
    width: 900px;
    height: 100%;
    clear: left;
}

.cor-right {
    float: right;
    width: 290px;
    height: 100%;
    margin-top: 10px;
    position: relative;
}
</style>