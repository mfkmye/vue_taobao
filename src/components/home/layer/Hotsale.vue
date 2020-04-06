<template>
    <div class="hotsale clearfix">
        <slot></slot>
        <div class="list clearfix">
            <div class="item" v-for="item in data.result" :key="item.itemId">
                <!-- {{item}} -->
                <a class="hotsale-item">
                    <div class="img-wrapper">
                        <img :src="item.pic" />
                    </div>
                    <h4>{{item.itemName}}</h4>
                </a>
                <p class="info">
                    <span class="marks" :class="{adHot: item.extMap && item.extMap.isAd}"></span>
                    <span class="price">
                        <em>¥</em>
                        {{item.promotionPrice}}
                    </span>
                    <span class="sales">销量:{{item.saleCnt}}</span>
                </p>
                <a class="item-more" title="发现更多相似的宝贝">
                    <p class="similar">
                        <i class="tb-ifont love"></i>找相似
                    </p>
                    <p>
                        发现更多相似的宝贝
                        <span class="tb-ifont"></span>
                    </p>
                </a>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
    computed: {
        ...mapState("HotsaleData", ["data", "isLoading"])
    },
    methods: {
        ...mapActions("HotsaleData", ["getData"]),
        handleScroll() {
            if (this.data.curPage >= this.data.pageCount) {
                return;
            }
            if (this.isLoading) {
                return;
            }
            var all = document.body.clientHeight;
            var top = 0;
            if (document.documentElement.scrollTop) {
                top = document.documentElement.scrollTop;
            }
            if (document.body.scrollTop) {
                top = document.body.scrollTop;
            }
            // console.log(all, top, all - top);

            if (all - top < 1100) {
                var page = this.data.curPage + 1;
                this.getData({ page });
            }
        }
    },
    mounted() {
        this.getData({ page: 1 });
        if (document.addEventListener) {
            document.addEventListener("scroll", this.handleScroll);
        }
    },
    destroyed() {
        if (document.addEventListener) {
            document.removeEventListener("scroll", this.handleScroll);
        }
    }
};
</script>
<style lang="less">
.hotsale {
    font-size: 12px;
    background-color: white;
    margin-top: 10px;
    .list {
        min-height: 50px;
        .item {
            float: left;
            padding: 20px 20px 0 20px;
            border: 1px solid transparent;
            color: #6c6c6c;
            width: 196px;
            height: 312px;
            overflow: hidden;
            position: relative;
            transition: border-color 0.3s;
            border-right-color: #f4f4f4;
            border-bottom-color: #f4f4f4;
            a.hotsale-item {
                color: #3c3c3c;
                .img-wrapper {
                    width: 197px;
                    height: 197px;
                    overflow: hidden;
                    background: #4f4f4f;
                    img {
                        display: block;
                        width: 101%;
                        height: 100%;
                        opacity: 0.9;
                    }
                    img:hover {
                        opacity: 0.8;
                    }
                }
                h4 {
                    margin-top: 7px;
                    line-height: 22px;
                    height: 44px;
                    font-size: 14px;
                    color: #666;
                    font-weight: normal;
                    transition: color 0.3s;
                    overflow: hidden;
                    font: tahoma, arial, "Hiragino Sans GB", "\5b8b\4f53",
                        sans-serif;
                }
            }
            a.hotsale-item:hover {
                color: #f40;
            }
            p.info {
                margin-top: 22px;
                height: 24px;
                line-height: 24px;
                span.marks {
                    float: left;
                    width: 0;
                    height: 18px;
                    margin-right: 8px;
                    background-repeat: no-repeat;
                    vertical-align: middle;
                    position: relative;
                    border-radius: 4px;
                }

                span.adHot {
                    background-image: url("../../../assets/pictures/home/layer/hot_span.png");
                    width: 33px;
                    height: 15px;
                    left: 0px;
                    top: 5px;
                }

                span.price {
                    float: left;
                    color: #f40;
                    font-size: 20px;
                    em {
                        font-family: "Microsoft Yahei";
                        display: inline-block;
                        zoom: 1;
                        letter-spacing: normal;
                        word-spacing: normal;
                        margin-right: 2px;
                        font-size: 12px;
                        vertical-align: inherit;
                    }
                }
                span.sales {
                    float: right;
                    color: #9ca0aa;
                    margin-top: 3px;
                }
            }
            a.item-more {
                display: none;
                position: absolute;
                bottom: 0;
                left: 0;
                width: 236px;
                height: 82px;
                background: #ff5000;
                p {
                    line-height: 22px;
                    font-size: 12px;
                    height: 22px;
                    color: #fff;
                    text-align: center;
                    span.tb-ifont {
                        display: inline-block;
                        font-size: 14px;
                        display: inline-block;
                        width: 12px;
                        height: 12px;
                        background: url("../../../assets/pictures/home/layer/right-arrow.png")
                            no-repeat center / 12px 12px;
                        position: relative;
                        top: 2px;
                    }
                }
                p.similar {
                    margin: 0 auto;
                    width: 120px;
                    margin-top: 15px;
                    line-height: 32px;
                    height: 32px;
                    font-size: 18px;
                    font-weight: normal;
                    border-bottom: 1px solid #fe964a;
                    i.love {
                        display: inline-block;
                        width: 16px;
                        height: 16px;
                        font-size: 16px;
                        margin-right: 4px;
                        color: white;
                        background: url("../../../assets/pictures/home/layer/peach_heart.png")
                            no-repeat center/ 16px 16px;
                        vertical-align: middle;
                    }
                }
            }
        }
        .item:hover {
            border-color: #f40;
            transition: border-color 0.3s;
            .item-more {
                display: block;
                transition: opacity 0.3s;
            }
        }
    }
}

.hotsale-hide {
    display: none;
}
a:hover {
    cursor: pointer;
}

.tb-ifont {
    font-family: iconfont !important;
    font-size: 14px;
    font-style: normal;
    display: inline-block;
    text-decoration: none;
}
</style>