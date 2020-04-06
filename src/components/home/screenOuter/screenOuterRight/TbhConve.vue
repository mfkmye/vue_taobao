<template>
    <div class="tbh-conve clearfix">
        <div class="conve">
            <ul class="conve-list clearfix">
                <li
                    v-for="(item, index) in data"
                    :class="{selected:curSelected == index}"
                    :key="index"
                    @mouseenter="index < 3 ? curSelected = index: null "
                >
                    <a>
                        <span class="tbh-icon"></span>
                        <p>{{item}}</p>
                    </a>
                </li>
            </ul>
            <div class="conve-bd-box" v-show="curSelected > -1">
                <!-- TODO: 功能较多，等待完善 -->
                <a @click="curSelected = -1" class="close">×</a>
                <div v-show="curSelected == 0" class="conve-bd-item phone">
                    <div class="content">
                        <ul class="conve-tabs">
                            <li>充话费</li>
                            <li>充流量</li>
                            <li>充固话</li>
                            <li>充宽带</li>
                        </ul>
                        <div class="conve-bc">
                            <div>
                                <input class="tbr-number-input" type="tel" placeholder="请输入手机号码" />
                                <span class="conve-icon conve-icon-phone"></span>
                            </div>
                            <div>
                                <input class="tbr-number-input" type="tel" placeholder="请输入手机号码" />
                                <span class="conve-icon conve-icon-phone"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-show="curSelected == 1" class="conve-bd-item trip">1</div>
                <div v-show="curSelected == 2" class="conve-bd-item baoxian">2</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            data: [
                "充话费",
                "旅行",
                "车险",
                "游戏",
                "彩票",
                "电影",
                "酒店",
                "理财"
            ],
            curSelected: -1
        };
    }
};
</script>
<style lang="less">
.tbh-conve {
    font-size: 12px;
    background-color: white;
    .conve {
        position: relative;
        border-top: 1px solid #f4f4f4;
        .conve-list {
            width: 294px;
            overflow: hidden;
            li {
                float: left;
                width: 72.5px;
                height: 75px;
                border: 1px solid #f4f4f4;
                border-left-color: transparent;
                border-top-color: transparent;
                box-sizing: border-box;
                a {
                    padding-top: 1px;
                    text-align: center;
                    display: block;
                    .tbh-icon {
                        display: inline-block;
                        width: 24px;
                        height: 24px;
                        margin-top: 11px;
                        background-repeat: no-repeat;
                        background: url("../../../../../public/src/img/col-right/tbh-icon.png");
                        background-position: 0 -1px;
                    }
                    p {
                        color: #333;
                        line-height: 24px;
                    }
                }
            }
            li:nth-of-type(2) .tbh-icon {
                background-position: 0 -43px;
            }
            li:nth-of-type(3) .tbh-icon {
                background-position: 0 -87px;
            }
            li:nth-of-type(4) .tbh-icon {
                background-position: 0 -131px;
            }
            li:nth-of-type(5) .tbh-icon {
                background-position: 0 -175px;
            }
            li:nth-of-type(6) .tbh-icon {
                background-position: 0 -219px;
            }
            li:nth-of-type(7) .tbh-icon {
                background-position: 0 -263px;
            }
            li:nth-of-type(8) .tbh-icon {
                background-position: 0 -307px;
            }
            li:hover a p {
                color: #f40;
            }
            li.selected {
                position: relative;
                border-color: #f40;
                z-index: 11;
                transition: border-color 0.1s;
            }
            li.selected a {
                position: relative;
                z-index: 11;
                background: #fff;
                height: 75px;
            }
        }
        .conve-bd-box {
            position: absolute;
            left: 0px;
            top: 76px;
            width: 288px;
            height: 156px;
            background-color: white;
            border: 1px solid #eaeaea;
            border-color: #f40;
            transition: border-color 0.1s;
            z-index: 8;
            overflow: hidden;
            outline: 0;
            .close {
                display: block;
                z-index: 5;
                position: absolute;
                top: 1px;
                right: 1px;
                width: 18px;
                height: 18px;
                line-height: 18px;
                font-size: 18px;
                text-align: center;
                font-style: normal;
                color: #999;
                background-color: #fff;
            }
            .conve-bd-item {
                position: relative;
                padding-top: 4px;
                z-index: 2;
            }
        }
    }
}
</style>