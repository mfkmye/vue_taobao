<template>
    <div class="core">
        <div class="tb-loading">
            <div class="promo-bd">
                <div class="mod">
                    <div class="block">
                        <el-carousel trigger="click" height="280px">
                            <el-carousel-item v-for="item in promoList" :key="item">
                                <img :src="item" />
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
            </div>
        </div>
        <div class="tb-tmal">
            <div class="tmal-hd">
                <div class="inner">
                    <span
                        class="hd-bg"
                        style="background-image: url(&quot;data:image/png;base64,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&quot;);"
                    ></span>
                    <em>理想生活上天猫</em>
                    <strong>
                        <i style="color:#f40">{{tmalListIndex}}</i>
                        &nbsp; / &nbsp;{{tmalList.length}}
                    </strong>
                </div>
            </div>
            <div class="tmal-bd">
                <el-carousel
                    indicator-position="outside"
                    trigger="click"
                    height="201px"
                    @change="updateIndex"
                >
                    <el-carousel-item v-for="(obj, index) in tmalList" :key="index">
                        <div>
                            <a
                                v-for="(item, i) in obj.imgs"
                                :key="i"
                                :class="{mod_12: obj.number == 12, mod_2: obj.number == 2}"
                            >
                                <img :src="'./src/img/tmalList/'+item" :img="item" />
                            </a>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            promoList: [
                "./src/img/tbh-core/TB15Z_Gzbr1gK0jSZR0XXbP8XXa-520-280.jpg",
                "./src/img/tbh-core/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg",
                "./src/img/tbh-core/TB183NQapLM8KJjSZFBSutJHVXa.jpg",
                "./src/img/tbh-core/TB1JNHwKFXXXXafXVXXSutbFXXX.jpg",
                "./src/img/tbh-core/TB1m_Svyy_1gK0jSZFqXXcpaXXa-520-280.png"
            ],
            tmalList: [
                {
                    number: 12,
                    imgs: [
                        "image120.gif",
                        "image121.jpg",
                        "image122.jpg",
                        "image123.png",
                        "image124.png",
                        "image125.png",
                        "image126.png",
                        "image127.png",
                        "image128.png",
                        "image129.png",
                        "image130.png",
                        "image131.png"
                    ]
                },
                {
                    number: 2,
                    imgs: ["image058.jpg", "image059.jpg"]
                },
                {
                    number: 2,
                    imgs: ["image060.jpg", "image061.jpg"]
                },
                {
                    number: 2,
                    imgs: ["image062.jpg", "image063.jpg"]
                },
                {
                    number: 2,
                    imgs: ["image064.jpg", "image065.jpg"]
                },
                {
                    number: 2,
                    imgs: ["image066.jpg", "image067.jpg"]
                }
            ],
            tmalListIndex: 0
        };
    },
    methods: {
        updateIndex(cur) {
            this.tmalListIndex = cur + 1;
        }
    },
    computed: {
        promoListCount() {
            return this.promoList.length;
        }
    }
};
</script>
<style scoped>
>>> .tmal-hd ul.el-carousel__indicators--horizontal {
    border-radius: 10px;
    position: absolute;
    bottom: 25px;
    height: 3px;
    line-height: 1em;
    text-align: center;
    background-color: #ff1648;
    width: 520px;
}

.tb-tmal {
    position: relative;
    width: 520px;
    height: 230px;
    margin-top: 1px;
    overflow: hidden;
}
.hd-bg {
    width: 136px;
    position: absolute;
    top: 6px;
    height: 19px;
    background-repeat: no-repeat;
    background-position: 2px 0;
    background-size: 122px 22px;
}

.tmal-hd em {
    font-size: 12px;
    color: #666;
    position: relative;
    margin-left: 136px;
}

.tmal-hd strong {
    float: right;
}

.tmal-hd {
    font-size: 14px;
    padding-top: 11px;
    border-bottom: 3px solid #ff1648;
    position: relative;
    background-color: #f1f1f1;
}
.tmal-bd {
    width: 520px;
    height: 201px;
}

>>> .tb-tmal .el-carousel__item,
>>> .tb-tmal .el-carousel__item > div {
    width: 520px;
    height: 201px;
    box-sizing: border-box;
}
>>> .tb-tmal .el-carousel__item > div {
    display: flex;
    flex-wrap: wrap;
    background-color: white;
}

>>> .tb-tmal .el-carousel__item > div > a {
    display: inline-block;
    box-sizing: border-box;
    margin: 6px 0px 0px 6px;
}

>>> .tb-tmal .el-carousel__item > div > a > img {
    width: 100%;
}

>>> .tb-tmal .el-carousel__item > div > a.mod_12 {
    box-sizing: border-box;
    width: 25%;
    margin: 0;
    text-align: center;
    padding: 5px 0;
    border-right: 1px solid #ebebeb;
    border-bottom: 1px solid #ebebeb;
    overflow: hidden;
}

>>> .tb-tmal .el-carousel__item > div > a.mod_12 > img {
    width: 84px;
    margin-top: 10px;
}

>>> .tb-tmal .el-carousel__item > div > a.mod_2 {
    box-sizing: border-box;
    width: 251px;
    height: 190px;
    overflow: hidden;
}
>>> div.el-carousel__item {
    font-size: 0px;
}
>>> .block .el-carousel__indicators--horizontal button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
}

>>> .block .el-carousel__indicator.is-active button {
    background-color: #f40;
}

>>> .block li.el-carousel__indicator--horizontal {
    display: inline-block;
    padding: 0 4px;
    text-align: center;
    vertical-align: 2px;
}

>>> .block ul.el-carousel__indicators--horizontal {
    border-radius: 10px;
    position: absolute;
    bottom: 20px;
    height: 14px;
    text-align: center;
    left: 50%;
    background-color: rgba(255, 255, 255, 0.3);
}

/*  */
>>> .tmal-bd ul.el-carousel__indicators--horizontal {
    position: absolute;
    width: 520px;
    left: 0px;
    top: -3px;
    height: 3px;
    background-color: #ff1648;
    display: flex;
    clear: both;
}
>>> .tmal-bd .el-carousel--horizontal {
    overflow: visible;
}
>>> .tmal-bd li.el-carousel__indicator--horizontal {
    flex: 1 1 0;
    height: 3px;
    display: block;
    background-color: #ff1648;
    box-sizing: border-box;
    line-height: 3px;
    padding: 0px;
    margin: 0px;
}

>>> .tmal-bd .el-carousel__indicators--horizontal button {
    height: 3px;
    width: 100%;
    background-color: black;
    line-height: 3px;
}
/*  */
.core {
    margin-left: 10px;
    margin-top: 10px;
    float: left;
    height: 512px;
    width: 520px;
}

.tb-loading {
    background-image: url("../../../../public/src/img/tbh-core/TB1BlobNFXXXXXyXXXXXXXXXXXX-34-34.gif");
    background-repeat: no-repeat;
    background-position: center;
    min-height: 40px;
}

.promo-bd {
    position: relative;
    width: 520px;
    overflow: hidden;
    height: 280px;
    box-sizing: border-box;
}

.mod {
    float: left;
    overflow: hidden;
    width: 520px;
    display: block;
    visibility: visible;
}

.mod > .block {
    height: 100%;
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>