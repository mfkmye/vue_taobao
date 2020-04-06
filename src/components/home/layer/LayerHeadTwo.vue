<template>
    <h3 class="layerHead">
        <span class="title"></span>
        <em>{{title}}</em>
    </h3>
</template>
<script>
export default {
    props: {
        title: {
            type: String,
            required: true
        }
    }
};
</script>
<style lang="less">
.layerHead {
    color: #ff9f00;
    border-bottom: 1px solid #f4f4f4;
    position: relative;
    padding-left: 32px;
    margin-top: 5px;
    line-height: 48px;
    font-size: 20px;
    margin-bottom: 0;
    span.title {
        display: inline-block;
        background-image: linear-gradient(45deg, #fad961, #ff9f00);
        background: #ff9f00;
        background-repeat: repeat-x;
        width: 4px;
        height: 16px;
        margin-right: 10px;
    }
}
</style>