<template>
    <h3 class="layerHead">
        <img class="mlogo" :src="logoSrc" :alt="logoAlt" />
        <p>
            <span v-if="qrCodeSrc" class="qr-wrapper">
                <span class="tb-qr"></span>
                <span class="a-all">
                    <img :src="qrCodeSrc" :alt="qrCodeAlt" />
                    <em>{{qrCodeTitle}}</em>
                </span>
            </span>
            <span class="subtitle">{{title}}</span>
        </p>
        <span v-if="more" class="tb-fn clearfix">
            <a class="more">
                更多
                <i class="tb-ifont"></i>
            </a>
        </span>
    </h3>
</template>
<script>
export default {
    props: {
        logoSrc: String,
        logoAlt: String,
        qrCodeSrc: String,
        qrCodeAlt: String,
        qrCodeTitle: String,
        title: String,
        more: {
            type: Boolean,
            default: false
        }
    }
};
</script>
<style lang="less">
.layerHead {
    position: relative;
    padding-left: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
    .mlogo {
        height: 24px;
        margin-right: 5px;
        float: left;
        display: inline;
    }
    p {
        line-height: 24px;
        height: 24px;
        color: #999;
        font-weight: 400;
        .qr-wrapper {
            position: relative;
            float: left;
            width: 26px;
            text-align: center;
            height: 24px;
            .tb-qr {
                font-size: 20px;
                width: 20px;
                height: 20px;
                margin: 0;
                color: #ccc;
                position: relative;
                top: 1px;
                display: inline-block;
                background-image: url("../../../assets/pictures/home/layer/qr_code.png");
                background-size: 20px 20px;
                background-repeat: no-repeat;
                background-position: center;
            }
            .a-all {
                position: absolute;
                left: -17px;
                top: 30px;
                opacity: 0;
                width: 66px;
                height: 80px;
                padding: 10px;
                background: #fff;
                z-index: -1;
                border: 1px solid #f0f0f0;
                transition: all 0.2s;
                img {
                    width: 66px;
                    height: 66px;
                }
                em {
                    position: absolute;
                    display: block;
                    left: 0;
                    right: 0;
                    bottom: 3px;
                    text-align: center;
                    color: #666;
                    font-weight: 400;
                    font-size: 12px;
                }
            }
        }
        .qr-wrapper:hover .a-all {
            z-index: 5;
            opacity: 1;
        }
    }
    .tb-fn {
        position: absolute;
        top: 0;
        right: 20px;
        line-height: 24px;
        height: 24px;
        font-size: 12px;
        color: #999;
        width: 100px;
        text-align: right;
        .more {
            margin-left: 14px;
            color: inherit;
            cursor: pointer;
            font-weight: 400;
            .tb-ifont {
                float: right;
                width: 12px;
                height: 12px;
                line-height: 12px;
                font-size: 12px;
                position: relative;
                top: 6px;
                display: inline-block;
                background-image: url("../../../assets/pictures/home/screenOuter/right-arrow.png");
                background-size: 12px 12px;
                background-position: center;
                background-repeat: no-repeat;
            }
        }
    }
}
</style>