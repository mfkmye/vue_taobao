<template>
    <div class="fixedToolsHome">
        <div
            class="fixedtool"
            ref="fixedTools"
            :style="{position: 'absolute',
        top: top+'px'}"
        >
            <span class="wangwang"></span>
            <a  class="fixedtool-1" href="#fixedtool-1">
                热品
                <br />搜索
            </a>
            <a href="#fixedtool-3" class="fixedtool-3">
                分类
                <br />浏览
            </a>
            <a href="#fixedtool-4" class="fixedtool-4">
                爱逛
                <br />好货
            </a>
            <!-- <a href="#" class="fixedtool-5">
                实惠
                <br />热卖
            </a>-->
            <!-- <a href="#" class="fixedtool-6">
                猜你
                <br />喜欢
            </a>-->
            <a href="#" class="fixedtool-7" v-show="showTopLink">
                <span class="tb-ifont"></span>顶部
            </a>
            <a class="fixedtool-8">
                <i>反馈</i>
            </a>
            <a class="fixedtool-9">
                暴恐
                <br />举报
            </a>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            showTopLink: false,
            top: 500,
            topBlock: 75
        };
    },
    methods: {
        handleScroll() {
            var top = 0;
            if (document.documentElement.scrollTop) {
                top = document.documentElement.scrollTop;
            }
            if (document.body.scrollTop) {
                top = document.body.scrollTop;
            }
            // 些条件应该使fiexd不能与顶部重合
            if (top < 460) {
                this.showTopLink = false;
            } else {
                this.showTopLink = true;
            }

            this.$nextTick(function() {
                var ele = this.$refs.fixedTools;
                if (top >= 425) {
                    ele.style.position = "fixed";
                    ele.style.top = this.topBlock + "px";
                } else {
                    ele.style.position = "absolute";
                    ele.style.top = this.top + "px";
                }
            });
        }
    },
    mounted() {
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
.fixedToolsHome {
    min-height: 0;
    background-color: #fff;
    .fixedtool {
        display: block;
        width: 50px;
        position: absolute;
        top: 548px;
        right: 50%;
        z-index: 4;
        text-align: center;
        margin-right: -655px;
        transition: none 0s ease 0s;
        span.wangwang {
            position: absolute;
            height: 36px;
            width: 50px;
            line-height: 36px;
            text-align: center;
            font-size: 32px;
            color: #ff7f13;
            top: -31px;
            right: 0;
            background: url("../../assets/pictures/home/fiexdtools/wangwang.png")
                no-repeat center / 23px 23px;
        }
        a {
            display: block;
            position: relative;
            padding: 10px 8px 0;
            background: #fff;
            cursor: pointer;
            transition: all 0.2s;
            font-size: 13px;
            width: 34px;
            height: 40px;
        }
        a:not(:last-of-type)::after {
            content: "";
            border-bottom: 1px solid #efefef;
            width: 34px;
            position: absolute;
            left: 8px;
            bottom: -1px;
            z-index: 1;
        }
        a:hover {
            z-index: 2;
            color: white;
            font-weight: 700;
            background-image: linear-gradient(135deg, #ff971b, #ff5000);
        }
        .fixedtool-1 {
            background-color: #ff4400;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            background-image: linear-gradient(135deg, #ff971b, #ff5000);
            color: white;
            font-weight: 700;
        }
        .fixedtool-3 {
            color: #f05;
        }
        .fixedtool-4 {
            color: #8d7afb;
        }
        .fixedtool-5 {
            color: #a8c001;
        }
        .fixedtool-6 {
            color: #f40;
        }
        .fixedtool-7 {
            text-align: center;
            span.tb-ifont {
                text-align: center;
                color: #999;
                position: relative;
                line-height: 20px;
                font-size: 14px;
                width: 100%;
                height: 14px;
                display: block;
                background: url("../../assets/pictures/home/fiexdtools/top-arrow.png");
                background-position: center -5px;
                background-size: 18px 18px;
                background-repeat: no-repeat;
            }
        }
        .fixedtool-9 {
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
        }
    }
}
</style>