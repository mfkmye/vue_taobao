<template>
    <div class="tbh-nav clearfix">
        <h2>{{data.title}}</h2>
        <ul class="nav-hd" v-for="(arr, index) in data.arr" :key="index">
            <li v-for="(item, i) in arr" :key="i">
                <a>{{item}}</a>
            </li>
            <span v-if="index < data.arr.length - 1">|</span>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            data: {
                title: "主题市场",
                arr: [
                    ["天猫", "聚划算", "天猫超市"],
                    ["淘抢购", "电器城", "司法拍卖", "淘宝心选", "兴农脱贫"],
                    ["飞猪旅行", "智能生活", "苏宁易购"]
                ]
            }
        };
    }
};
</script>
<style scoped>
.tbh-nav {
    width: 1190px;
    margin: 0 auto;
    height: 30px;
    line-height: 30px;
    position: relative;
    color: #fff;
    background-image: linear-gradient(to right, #ff9000 0, #ff5000 100%);
}

.tbh-nav > h2,
.tbh-nav > ul,
.tbh-nav > ul > li {
    float: left;
}

.tbh-nav > h2 {
    width: 190px;
    text-align: center;
    font-size: 16px;
    background-color: #ff5000;
}

.tbh-nav > ul {
    float: left;
    font-size: 14px;
    font-weight: 700;
}

.tbh-nav > ul > li {
    margin: 0 3px;
    text-align: center;
    padding: 0 4px;
    position: relative;
}

.tbh-nav > ul > li:hover::before {
    content: "";
    font-family: iconfont;
    color: #ff5000;
    top: -12px;
    position: absolute;
    left: 50%;
    font-size: 12px;
    margin-left: -15px;
    width: 20px;
    height: 12px;
    display: block;
    background-image: url(/img/head_half.4709daff.png);
    background-size: 19px 19px;
    background-repeat: no-repeat;
    background-position: 0px 0px;
    background-image: url("../../assets/pictures/home/content/head_half.png");
}

.tbh-nav > ul > li > a {
    float: left;
    padding: 0 5px;
    font-weight: 700;
    font-family: tahoma, arial, "Hiragino Sans GB", 宋体, sans-serif, tahoma,
        arial, "Hiragino Sans GB", 宋体, sans-serif;
}
a {
    cursor: pointer;
}
</style>