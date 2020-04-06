<template>
    <div class="tbh-goods clearfix">
        <slot></slot>
        <ul
            class="list clearfix goods-list"
            data-spm-anchor-id="a21bo.2017.201870.i0.5af911d9yV5Isy"
        >
            <template v-for="item in data">
                <a :key="item.itemId">
                    <div class="img-wrapper">
                        <img class="a-all" :src="'https:'+item.pic" />
                    </div>
                    <div class="info">
                        <h4 class="a-all">{{item.title}}</h4>
                        <p>{{item.content}}</p>
                        <p class="extra">
                            <span class="tb-ifont"></span>
                            {{item.zanTotal}} 人说好
                        </p>
                    </div>
                </a>
            </template>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            data: []
        };
    },
    methods: {
        // jsonp 跨域请求淘宝官网数据
        getGoodsData() {
            var _this = this;
            var src = "https://tce.taobao.com/api/mget.htm?";
            var tce_sid = 1947676;
            this.$jsonp(src, {
                tce_sid,
                tce_vid: 1,
                env: "online",
                startIndex: 0,
                pageSize: 0
            })
                .then(callback => {
                    if (callback.success) {
                        _this.data = callback.result["" + tce_sid].result;
                        // console.log(JSON.stringify(_this.data));
                    }
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
        this.getGoodsData();
    }
};
</script>
<style lang="less">
.tbh-goods {
    margin-top: 10px;
    position: relative;
    width: 590px;
    float: left;
    height: 658px;
    background-color: white;
    .goods-list {
        overflow: hidden;
        padding-left: 21px;
        a {
            display: block;
            float: left;
            width: 180px;
            overflow: hidden;
            margin: 0 4px 17px 0;
            .img-wrapper {
                background: #4f4f4f;
                overflow: hidden;
                img {
                    width: 100%;
                    height: 180px;
                    display: block;
                    opacity: 0.9;
                    background: #fff;
                    transition: all 0.2s;
                }
            }
            .img-wrapper:hover img {
                opacity: 0.8;
            }
            .info {
                overflow: hidden;
                padding: 0 4px 0 6px;
                h4 {
                    margin-top: 5px;
                    font-size: 16px;
                    height: 28px;
                    overflow: hidden;
                    line-height: 28px;
                    font-weight: normal;
                }
                p {
                    line-height: 24px;
                    color: #999;
                    font-size: 14px;
                    overflow: hidden;
                    height: 24px;
                }
                .extra {
                    line-height: 22px;
                    height: 22px;
                    margin-top: 12px;
                    color: #35b1ff;
                    .tb-ifont {
                        margin-right: 4px;
                        font-size: 12px;
                        width: 12px;
                        height: 12px;
                        display: inline-block;
                        background-image: url("../../../assets/pictures/home/layer/smiling.png");
                        background-size: 12px 12px;
                        line-height: 14px;
                        background-position: center;
                        background-repeat: no-repeat;
                        position: relative;
                    }
                }
                .a-all {
                    transition: all 0.2s;
                }
            }
        }
        a:hover {
            color: #f40;
        }
    }
}
</style>