<template>
    <div class="home-search">
        <div class="wrap">
            <div class="c_t_w_logo">
                <div class="logo"></div>
            </div>
            <div class="c_t_w_search">
                <div class="c_t_w_s_box">
                    <div class="top">
                        <ul class="search_tab">
                            <li class="selected">宝贝</li>
                            <li>天猫</li>
                            <li>店铺</li>
                        </ul>
                    </div>
                    <div class="center">
                        <form action="#" class="search_panel">
                            <button class="btn_search">搜索</button>
                            <div class="search-common-panel">
                                <div class="search-combox">
                                    <input
                                        class="search_input"
                                        type="text"
                                        v-model="inputVal"
                                        @input="handleInput"
                                        @click.stop="handleInput(inputVal)"
                                    />
                                    <div v-show="!inputVal" class="search_icon_box">
                                        <span class="search_text"></span>
                                    </div>
                                </div>
                                <div class="camera"></div>
                            </div>
                        </form>
                        <ul class="search_list_show" v-show="inputVal && searchListData.length > 0">
                            <li
                                v-for="item in searchListData"
                                :key="item[1]"
                                @click="handleListClick(item[0])"
                            >
                                <a>{{item[0]}}</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="bottom">
                    <div class="search_host_fline">
                        <a>新款连衣裙</a>
                        <a>四件套</a>
                        <a class="a_read">潮流T恤</a>
                        <a>时尚女鞋</a>
                        <a>短裤</a>
                        <a>半身裙</a>
                        <a>男士外套</a>
                        <a>墙纸</a>
                        <a>行车记录仪</a>
                        <a>新款男鞋</a>
                        <a>耳机</a>
                        <a>时尚女包</a>
                        <a>沙发</a>
                    </div>
                </div>
            </div>
            <div class="c_t_w_code" v-show="close_qr_code">
                <div class="c_t_w_c_qr">
                    <div class="qr_bd">
                        <span>手机淘宝</span>
                        <img
                            class="qrcode"
                            src="../../assets/pictures/home/content/code_img.png"
                            alt="淘宝二维码"
                        />
                    </div>
                    <div class="qr_exit" @click="close_qr_code = !close_qr_code">×</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            inputVal: "",
            searchListData: [],
            // 默认非搜索状态
            isSearching: false,
            // 默认显示二维码
            close_qr_code: true
        };
    },
    methods: {
        handleListClick(val) {
            this.inputVal = val;
            this.searchListData = [];
        },

        handleInput() {
            // 在非搜索状态时有输入就执行搜索
            if (this.isSearching) return;
            if (this.inputVal) {
                this.getSearchListData();
            } else {
                // 输入框为空时清空之前的搜索数据
                this.searchListData = [];
            }
        },
        // 使用vue-jsonp跨域请求taobao数据
        getSearchListData() {
            var _this = this;
            this.isSearching = true;
            var src =
                "https://suggest.taobao.com/sug?code=utf-8&q=" +
                this.inputVal +
                "&_ksTS=1572278313829_2225&callback=doJson";
            this.$jsonp(src)
                .then(function(json) {
                    if (json) _this.searchListData = json.result;
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(function() {
                    _this.isSearching = false;
                });
        }
    },
    mounted() {
        var _this = this;
        document.addEventListener("click", function() {
            _this.searchListData.splice(0);
        });
    }
};
</script>
<style scoped>
.home-search {
    width: 1190px;
    padding-top: 24px;
    padding-bottom: 9px;
    height: 97px;
    position: relative;
    background-color: #fff;
    margin: 0 auto;
}
.c_t_w_logo {
    float: left;
    position: absolute;
    left: 0px;
    top: 8px;
}
.c_t_w_logo > .logo {
    z-index: 30;
    width: 190px;
    height: 121px;
    background-image: url("../../assets/pictures/home/content/taobao_logo.gif");
    background-position: center;
    background-size: 190px 121px;
    background-repeat: no-repeat;
}

.c_t_w_code {
    position: absolute;
    top: 24px;
    right: 110px;
    background-color: #fff;
}

.c_t_w_c_qr {
    position: relative;
    top: 0;
}

.qr_bd {
    position: relative;
    cursor: pointer;
    display: block;
    text-align: center;
    width: 74px;
    height: 88px;
    color: #666;
    border: 1px solid #eee;
    background-color: #fff;
}

.qr_bd > span {
    line-height: 20px;
    margin: 4px auto 0;
    width: 78px;
    font-size: 12px;
}

.qr_bd > img {
    display: block;
    margin-left: 6px;
    width: 62px;
    height: 62px;
}

.qr_exit {
    position: absolute;
    top: 0;
    left: -16px;
    display: inline-block;
    width: 14px;
    height: 14px;
    border: 1px solid #eee;
    font-size: 14px;
    text-align: center;
    line-height: 14px;
    cursor: pointer;
    color: #eee;
}

.qr_exit:hover {
    color: black;
}

.c_t_w_s_box {
    position: relative;
    margin-left: 258px;
    margin-right: 302px;
    z-index: 30;
    transform: translateZ(0);
}

.c_t_w_s_box > .top {
    height: 22px;
    margin-left: 17px;
}

.search_tab {
    font-size: 12px;
}

.search_tab > li {
    color: #f40;
    text-align: center;
    float: left;
    width: 36px;
    height: 22px;
    line-height: 22px;
    margin-right: 4px;
    cursor: pointer;
}

.search_tab > li.selected {
    color: #fff;
    font-weight: 700;
    background-image: -webkit-linear-gradient(left, #ff9000 0, #ff5000 100%);
    background-image: -o-linear-gradient(left, #ff9000 0, #ff5000 100%);
    background-image: linear-gradient(to right, #ff9000 0, #ff5000 100%);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffff9000', endColorstr='#ffff5000', GradientType=1);
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
}

.search_tab > li:not(.selected):hover {
    background-color: #ffeee5;
}

.c_t_w_search > .bottom {
    position: relative;
    padding: 5px 41px 0 190px;
    height: 20px;
    overflow: hidden;
}

.search-common-panel {
    margin-right: 74px;
    border: 2px solid #ff5000;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    border-right: none;
    overflow: hidden;
    height: 36px;
}

.search-combox {
    position: relative;
}

.search-list {
    width: 100%;
    position: absolute;
    top: 0px;
    border: 1px solid black;
}

.search-list li {
    cursor: pointer;
    width: 100%;
    font-size: 14px;
    height: 18px;
    line-height: 18px;
}

.search_icon_box {
    position: relative;
    display: inline;
    z-index: -1;
    position: absolute;
    top: 0px;
    left: 14px;
}

.search_icon_box > .search_text {
    z-index: -1;
    color: #9c9c9c;
    cursor: text;
    touch-action: none;
    -ms-touch-action: none;
    pointer-events: none;
    -ms-pointer-events: none;
    -webkit-user-select: none;
    -moz-user-select: none;
}

.search_icon_box > .search_text::before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 42px;
    background-image: url("../../assets/pictures/home/content/search.png");
    background-repeat: no-repeat;
    background-size: 16px 16px;
    background-position: center;
    vertical-align: -17px;
    margin-right: 4px;
}

.search_input {
    padding: 6px 0px 6px 6px;
    text-indent: 10px;
    height: 24px;
    line-height: 24px;
    width: 472px;
    border: none;
    outline: 0;
    background: transparent;
    z-index: 99;
}

.search_input:focus {
    background-color: #fff;
}

.camera {
    width: 24px;
    height: 36px;
    display: block;
    position: absolute;
    right: 91px;
    top: 2px;
    background-image: url("../../assets/pictures/home/content/camera.png");
    background-repeat: no-repeat;
    background-size: 21px 19px;
    background-position: center;
}

.search_host_fline {
    overflow: hidden;
    height: 18px;
    line-height: 18px;
    margin-bottom: 5px;
    margin-left: 68px;
    font: 12px/1.5 tahoma, arial, "Hiragino Sans GB", "\5b8b\4f53", sans-serif;
}

.search_host_fline > a {
    margin-right: 4px;
}

.search_panel {
    position: relative;
    display: block;
}

.btn_search {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 100;
    width: 74px;
    height: 40px;
    overflow: hidden;
    text-align: center;
    border: none;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    background-image: linear-gradient(to right, #ff9000 0, #ff5000 100%);
    background-repeat: repeat-x;
    cursor: pointer;
    outline: none;
}

.search_list_show {
    position: absolute;
    background-color: white;
    width: 554px;
    border: 1px solid rgb(225, 225, 225);
}

.search_list_show > li {
    font-size: 14px;
    padding: 8px;
    font-weight: 600;
    display: block;
    cursor: pointer;
}

.search_list_show > li:hover {
    background-color: rgb(245, 245, 245);
}

.a_read {
    color: #f40;
}
</style>
