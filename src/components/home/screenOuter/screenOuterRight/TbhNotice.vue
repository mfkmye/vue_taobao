<template>
    <div class="tbh-notice">
        <ul class="notice-hd">
            <li :class="{selected: curIndex == index}" v-for="(item, index) in data" :key="index">
                <a
                    @click="curIndex = index"
                    @mouseenter="runTimer(index)"
                    @mouseleave="cleanTimer()"
                >{{item.title}}</a>
            </li>
        </ul>
        <div class="notice-bd">
            <ul
                class="mod"
                v-show="curIndex == index"
                v-for="(itemObj, index) in data"
                :key="index"
            >
                <li v-for="(item, i) in itemObj.list" :key="i">
                    <a>{{item}}</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            data: [
                {
                    title: "公告",
                    list: [
                        "95公益周阿里、腾讯等六家公司同台联合做公益",
                        "淘宝造物节之城市秘密",
                        "聚划算88红包省钱卡"
                    ]
                },
                {
                    title: "规则",
                    list: [
                        "新增《淘宝网汽配行业管理规范》公示通知",
                        "《淘宝网区域零售服务说明》变更公示通知",
                        "《淘宝网票务行业管理规范》变更公示通知",
                        "《淘宝网数字娱乐市场须提供官方授权的商品目录》变更公示通知"
                    ]
                },
                {
                    title: "论坛",
                    list: [
                        "淘宝1212大促招商",
                        "在线职业培训招商",
                        "金秋超值购招商",
                        "运营神器年中大促"
                    ]
                },
                {
                    title: "安全",
                    list: [
                        "魔豆妈妈公益项目",
                        "让母爱永不打烊！",
                        "卖家注意：风险通报！",
                        "售假获刑又起诉！"
                    ]
                },
                {
                    title: "公益",
                    list: [
                        "淘宝公益平台正式更名",
                        "益起来商家招募即将截止",
                        "卖家如何设置公益宝贝",
                        "公益机构开店全攻略"
                    ]
                }
            ],
            curIndex: 0,
            timer: null
        };
    },
    methods: {
        runTimer(index) {
            var _this = this;
            this.timer = setTimeout(function() {
                console.log(new Date(), _this);
                _this.curIndex = index;
                _this.timer = null;
            }, 300);
        },
        cleanTimer() {
            if (this.timer) {
                clearTimeout(this.timer);
            }
        }
    }
};
</script>
<style lang="less">
.tbh-notice {
    font-size: 12px;
    height: 98px;
    padding-top: 10px;
    width: 290px;
    background-color: white;
    .notice-hd {
        position: relative;
        height: 24px;
        margin-top: 4px;
        overflow: hidden;
        margin-right: -2px;
        padding: 0 8px;
        li {
            float: left;
            line-height: 20px;
            width: 32px;
            text-align: center;
            margin: 0 11px;
        }
        li.selected {
            padding: 0;
            font-weight: 700;
            border-bottom: 2px solid #f40;
        }
        li:hover {
            color: #f40;
        }
    }
    .notice-bd {
        .mod {
            margin: 0 12px;
            height: 50px;
            overflow: hidden;
            padding-top: 9px;
            padding-bottom: 6px;
            li {
                float: left;
                line-height: 25px;
                height: 25px;
                width: 130px;
                overflow: hidden;
            }
            li:hover {
                color: #f40;
            }
        }
        .mod:first-of-type li:first-of-type {
            width: 100%;
        }
    }
}
</style>