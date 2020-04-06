<template>
    <div class="home-header clearfix">
        <div class="site-nav-bd clearfix">
            <ul class="site-nav-bd-l">
                <li class="site-nav-menu menu_hover">
                    <div class="site-nav-menu-hd">
                        <span>{{area_select}}</span>
                        <span class="down_arrow"></span>
                    </div>
                    <div class="site-nav-menu-bd">
                        <ul class="area_ul">
                            <li
                                v-for="(item, index) in areaArr"
                                :key="index"
                                value="area_select"
                                @click="areaClick"
                            >{{item}}</li>
                        </ul>
                    </div>
                </li>
                <li class="menu_hover">
                    <div class="site-nav-menu-hd">
                        <a style="margin-right:7px;color:#f40">
                            <span v-if="isLoging">{{data.userName}}</span>
                            <span v-if="isLoging" class="down_arrow"></span>
                            <span v-else>亲，请登录</span>
                        </a>
                        <a v-if="!isLoging">免费注册</a>
                    </div>
                    <!-- user info -->
                </li>
                <li class="menu_hover" v-show="isLoging">
                    <div class="site-nav-menu-hd">
                        <a>消息</a>
                        <span class="down_arrow"></span>
                    </div>
                </li>
                <li>
                    <div class="site-nav-menu-hd">
                        <a>手机逛淘宝</a>
                    </div>
                </li>
            </ul>
            <ul class="site-nav-bd-r">
                <li class="site-nav-menu menu_hover">
                    <div class="site-nav-menu-hd">
                        <a>我的淘宝</a>
                        <span class="down_arrow"></span>
                    </div>
                    <div class="site-nav-menu-bd">
                        <div>
                            <a>已买到的宝贝</a>
                            <a>我的足迹</a>
                        </div>
                    </div>
                </li>
                <li class="site-nav-menu menu_hover">
                    <div class="site-nav-menu-hd">
                        <a>
                            <span class="shopping_cart bg_icon"></span>
                            <span>购物车</span>
                            <span class="shop_number">{{shop_number}}</span>
                        </a>
                        <span class="down_arrow"></span>
                    </div>
                    <div class="site-nav-menu-bd">
                        <div class="mini-cart-ready">
                            <div class="mini-cart-ft">
                                <p>
                                    您购物车里还没有任何宝贝。
                                    <a class="site-nav-btn">查看我的购物车</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="site-nav-menu menu_hover">
                    <div class="site-nav-menu-hd">
                        <a class="collection">
                            <span class="start bg_icon"></span>
                            <span>收藏夹</span>
                        </a>
                        <span class="down_arrow"></span>
                    </div>
                    <div class="site-nav-menu-bd">
                        <div>
                            <a>收藏的宝贝</a>
                            <a>收藏的店铺</a>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="site-nav-menu-hd">
                        <a>商品分类</a>
                    </div>
                </li>
                <li class="site-nav-pipe">|</li>
                <li class="site-nav-menu menu_hover">
                    <div class="site-nav-menu-hd">
                        <a>千牛卖家中心</a>
                        <span class="down_arrow"></span>
                    </div>
                    <div class="site-nav-menu-bd">
                        <div>
                            <a>免费开店</a>
                            <a>已卖出的宝贝</a>
                            <a>出售中的宝贝</a>
                            <a>卖家服务市场</a>
                            <a>卖家培训中心</a>
                            <a>体检中心</a>
                            <a>问商友</a>
                        </div>
                    </div>
                </li>
                <li class="site-nav-menu menu_hover">
                    <div class="site-nav-menu-hd">
                        <a>联系客服</a>
                        <span class="down_arrow"></span>
                    </div>
                    <div class="site-nav-menu-bd">
                        <div>
                            <a>消费者客服</a>
                            <a>卖家客服</a>
                        </div>
                    </div>
                </li>
                <li class="site-nav-menu menu_hover">
                    <div class="site-nav-menu-hd">
                        <a>
                            <span class="navigation_menu bg_icon"></span>
                            <span>网站导航</span>
                        </a>
                        <span class="down_arrow"></span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    data() {
        return {
            areaArr: [
                "全球",
                "中国大陆",
                "中国香港",
                "中国台湾",
                "中国澳门",
                "韩国",
                "马来西亚",
                "澳大利亚",
                "新加坡",
                "新西兰",
                "加拿大",
                "美国",
                "日本"
            ],
            area_select: "中国大陆",
            shop_number: 0
        };
    },
    computed: {
        ...mapState("UserInfo", ["data", "isLoging"])
    },
    methods: {
        areaClick(e) {
            this.area_select = e.target.innerText;
        }
    }
};
</script>
<style scoped>
@import url("../../assets/css/home.css");
.home-header {
    z-index: 10000;
    width: 100%;
    background-color: #f5f5f5;
    border-bottom: 1px solid #eee;
    font: 12px/1.5 tahoma, arial, "Hiragino Sans GB", "\5b8b\4f53", sans-serif;
}
.site-nav-bd {
    margin: 0 auto;
    width: 1190px;
    height: 35px;
    background: #f5f5f5;
}
.site-nav-bd-l {
    float: left;
}
.site-nav-bd-r {
    float: right;
    height: 35px;
    line-height: 35px;
}

li a:hover {
    color: #f40;
}

.site-nav-menu-hd a {
    float: left;
    font-size: 12px;
    color: #6c6c6c;
}

.site-nav-menu a {
    display: block;
    padding: 0 5px;
    white-space: nowrap;
    color: #6c6c6c;
}

.site-nav-menu-bd a {
    line-height: 28px;
}

.site-nav-menu-bd a:hover {
    color: #6c6c6c;
    background: #f5f5f5;
}

.down_arrow {
    display: inline-block;
    width: 12px;
    height: 6px;
    background-image: url("../../assets/pictures/home/header/down_arrow1.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 12px 6px;
    vertical-align: middle;
}

.site-nav-bd-l > li {
    float: left;
}

.site-nav-bd-l .down_arrow {
    margin-left: 7px;
}

li.menu_hover:hover .site-nav-menu-hd {
    background-color: white;
}

.site-nav-menu-hd {
    z-index: 10010;
    position: relative;
    padding: 0 6px;
    height: 35px;
    line-height: 35px;
}

.site-nav-menu-bd {
    z-index: 10001;
    position: relative;
    display: none;
    margin-top: -1px;
    margin-left: -1px;
    background-color: white;
}

.site-nav-menu-bd > div {
    position: absolute;
    left: 0;
    top: 0;
    padding: 8px 0px;
    line-height: normal;
    border: 1px solid #eee;
    background: #fff;
}

.area_ul {
    position: absolute;
    left: 0;
    top: 0;
    padding: 8px 0px;
    line-height: normal;
    border: 1px solid #eee;
    background: #fff;
    max-height: 270px;
    overflow-y: scroll;
}

.area_ul > li {
    width: 242px;
    height: 29px;
    line-height: 29px;
    padding-left: 8px;
    cursor: pointer;
}

.area_ul > li:hover {
    background-color: #f4f4f4;
}

.site-nav-menu:hover .site-nav-menu-bd {
    display: block;
}

.site-nav-bd-r > li {
    float: left;
}

.site-nav-pipe {
    padding: 0 5px;
}

.shopping_cart {
    background-image: url("../../assets/pictures/home/header/shopping_cart.png");
}

.collection:hover .start {
    background-image: url("../../assets/pictures/home/header/start_color.png");
}

.start {
    background-image: url("../../assets/pictures/home/header/start.png");
}

.navigation_menu {
    background-image: url("../../assets/pictures/home/header/navigation_menu.png");
}

a {
    cursor: pointer;
}

.bg_icon {
    width: 12px;
    height: 12px;
    display: inline-block;
    background-position: center;
    background-size: 12px 12px;
    background-repeat: no-repeat;
    margin-right: 5px;
}

.shop_number {
    color: #f40;
    font-weight: 600;
}

.mini-cart-ready {
    width: 296px;
    line-height: 20px;
    min-height: 40px;
    position: absolute;
    left: 0;
    top: 0;
    padding: 8px;
}

.mini-cart-ready p {
    margin-top: 10px;
    text-align: right;
    padding: 8px;
}

.mini-cart-ready .site-nav-btn {
    display: inline-block;
    vertical-align: middle;
    padding: 0 10px;
    height: 25px;
    line-height: 25px;
    color: #fff;
    background: #f40;
    border-radius: 2px;
}
</style>