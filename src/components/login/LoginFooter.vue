<template>
    <div class="footer">
        <div class="footer-hd">
            <p>
                <template v-for="(item, index) in arr_hd">
                    <a :key="index">{{ item }}</a>
                    <span :key="`_${index}`" v-if="index < arr_hd.length - 1">|</span>
                </template>
            </p>
        </div>
        <div class="footer-bd">
            <template v-for="(itemArr, indexArr) in arr_bd">
                <p :key="indexArr">
                    <template v-for="(item, index) in itemArr">
                        <a :key="index" v-if="item.url">
                            <span class="text-black">{{item.name}}</span>
                        </a>
                        <span :key="index" v-else>{{item.name}}</span>
                        <span :key="`_${index}`" v-if="item.line">|</span>
                    </template>
                </p>
            </template>
        </div>
        <div class="footer-ft">
            <template v-for="(item, index) in arr_ft">
                <a
                    :key="index"
                    :style="{display: 'inline-block', width:item.w+'px',height:item.h+'px', overflow:'hidden', background: 'url('+item.url+') no-repeat '+item.x+'px '+item.y+'px', marginLeft:'15px'}"
                ></a>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            arr_hd: [
                "阿里巴巴集团",
                "阿里巴巴国际站",
                "阿里巴巴中国站",
                "全球速卖通",
                "淘宝网",
                "天猫",
                "聚划算",
                "一淘",
                "阿里妈妈",
                "飞猪",
                "虾米",
                "阿里云计算",
                "云OS",
                "万网",
                "支付宝",
                "来往"
            ],
            arr_bd: [
                [
                    { name: "关于淘宝", url: "#", line: false },
                    { name: "合作伙伴", url: "#", line: false },
                    { name: "营销中心", url: "#", line: false },
                    { name: "廉正举报", url: "#", line: false },
                    { name: "联系客服", url: "#", line: false },
                    { name: "开放平台", url: "#", line: false },
                    { name: "诚征英才", url: "#", line: false },
                    { name: "联系我们", url: "#", line: false },
                    { name: "网站地图", url: "#", line: false },
                    { name: "隐私权政策", url: "#", line: false },
                    { name: "法律声明", url: "#", line: false },
                    { name: "知识产权", url: "#", line: true },
                    {
                        name: "© 2003-现在 Taobao.com 版权所有",
                        url: null,
                        line: false
                    }
                ],
                [
                    {
                        name: "增值电信业务经营许可证：浙B2-20080224",
                        url: "#",
                        line: true
                    },
                    {
                        name: "增值电信业务经营许可证（跨地区）： B2-20150210",
                        url: "#",
                        line: true
                    },
                    { name: "浙网文（2019）1033-086号", url: "#", line: false },
                    {
                        name:
                            "浙江省网络食品销售第三方平台提供者备案：浙网食A33010001",
                        url: null,
                        line: false
                    }
                ],
                [
                    {
                        name:
                            "互联网药品信息服务资格证书（浙）-经营性-2018-0010",
                        url: null,
                        line: true
                    },
                    {
                        name:
                            "短消息类服务接入代码使用证书：号【2016】00154-A01",
                        url: null,
                        line: true
                    },
                    {
                        name: "信息网络传播视听许可证：1109364号",
                        url: null,
                        line: true
                    },
                    {
                        name:
                            "出版物网络交易平台服务经营备案号：新出发浙备字第002号",
                        url: null,
                        line: false
                    }
                ],
                [
                    {
                        name: "浙公网安备 33010002000078号",
                        url: "#",
                        line: true
                    },
                    {
                        name: "广播电视节目制作经营许可证（浙）字第01012号",
                        url: null,
                        line: true
                    },
                    {
                        name: "市场名称登记证：工商网市字3301004120号",
                        url: null,
                        line: true
                    },
                    {
                        name:
                            "医疗器械网络交易服务第三方平台备案：（浙）网械平台备字[2018]第00004号",
                        url: null,
                        line: false
                    }
                ]
            ],
            arr_ft: [
                {
                    w: 36,
                    h: 40,
                    x: 0,
                    y: 0,
                    url:
                        "http://img.alicdn.com/tps/i1/T1FeW3XXNfXXXXXXXX-36-36.gif",
                    path:
                        "../assets/pictures/login/T1FeW3XXNfXXXXXXXX-36-36.gif"
                },
                {
                    w: 30,
                    h: 40,
                    x: 0,
                    y: 0,
                    url:
                        "https://img.alicdn.com/tfs/TB1EPnIQXXXXXaSXpXXXXXXXXXX-1133-35.jpg",
                    path:
                        "../assets/pictures/login/TB1EPnIQXXXXXaSXpXXXXXXXXXX-1133-35.jpg"
                },
                {
                    w: 33,
                    h: 40,
                    x: -40,
                    y: 0,
                    url:
                        "https://img.alicdn.com/tfs/TB1EPnIQXXXXXaSXpXXXXXXXXXX-1133-35.jpg",
                    path:
                        "../assets/pictures/login/TB1EPnIQXXXXXaSXpXXXXXXXXXX-1133-35.jpg"
                },
                {
                    w: 50,
                    h: 40,
                    x: -80,
                    y: 0,
                    url:
                        "https://img.alicdn.com/tfs/TB1EPnIQXXXXXaSXpXXXXXXXXXX-1133-35.jpg",
                    path:
                        "../assets/pictures/login/TB1EPnIQXXXXXaSXpXXXXXXXXXX-1133-35.jpg"
                },
                {
                    w: 83,
                    h: 40,
                    x: -140,
                    y: 0,
                    url:
                        "https://img.alicdn.com/tfs/TB1EPnIQXXXXXaSXpXXXXXXXXXX-1133-35.jpg",
                    path:
                        "../assets/pictures/login/TB1EPnIQXXXXXaSXpXXXXXXXXXX-1133-35.jpg"
                },
                {
                    w: 250,
                    h: 40,
                    x: 0,
                    y: -18,
                    url:
                        "http://img.alicdn.com/tfs/TB1N7kwRVXXXXbAapXXXXXXXXXX-500-127.png_250x250",
                    path:
                        "../assets/pictures/login/TB1N7kwRVXXXXbAapXXXXXXXXXX-500-127.png"
                },
                {
                    w: 105,
                    h: 40,
                    x: -650,
                    y: 0,
                    url:
                        "https://img.alicdn.com/tfs/TB1EPnIQXXXXXaSXpXXXXXXXXXX-1133-35.jpg",
                    path:
                        "../assets/pictures/login/TB1EPnIQXXXXXaSXpXXXXXXXXXX-1133-35.jpg"
                },
                {
                    w: 82,
                    h: 40,
                    x: -345,
                    y: 0,
                    url:
                        "https://img.alicdn.com/tfs/TB1EPnIQXXXXXaSXpXXXXXXXXXX-1133-35.jpg",
                    path:
                        "../assets/pictures/login/TB1EPnIQXXXXXaSXpXXXXXXXXXX-1133-35.jpg"
                },
                {
                    w: 97,
                    h: 40,
                    x: -761,
                    y: 0,
                    url:
                        "https://img.alicdn.com/tfs/TB1EPnIQXXXXXaSXpXXXXXXXXXX-1133-35.jpg",
                    path:
                        "../assets/pictures/login/TB1EPnIQXXXXXaSXpXXXXXXXXXX-1133-35.jpg"
                },
                {
                    w: 249,
                    h: 40,
                    x: -884,
                    y: 0,
                    url:
                        "https://img.alicdn.com/tfs/TB1EPnIQXXXXXaSXpXXXXXXXXXX-1133-35.jpg",
                    path:
                        "../assets/pictures/login/TB1EPnIQXXXXXaSXpXXXXXXXXXX-1133-35.jpg"
                }
            ],
            flag: false
        };
    }
};
</script>

<style scoped>
.footer {
    font-family: "Microsoft YaHei", tahoma, arial, "Hiragino Sans GB", 宋体,
        sans-serif;
    font-size: 12px;
    position: relative;
    margin: 60px auto 0;
    padding: 7px 0 9px;
    border-top: 1px solid #ddd;
    width: 1190px;
}

.footer-bd a,
.footer-hd a {
    margin: 0 4px;
    float: left;
    white-space: nowrap;
    color: #6c6c6c;
}

.footer-hd p {
    margin-bottom: 8px;
    line-height: 27px;
    border-bottom: 1px solid #ddd;
}

.footer-bd span,
.footer-hd span {
    float: left;
    margin: 0 3px;
    font-weight: 400;
    color: #ddd;
}

a > span.text-black {
    color: #6c6c6c;
}

.footer-hd p {
    margin-bottom: 8px;
    line-height: 27px;
    border-bottom: 1px solid #ddd;
    overflow: hidden;
}

.footer-bd p,
.footer-hd p {
    padding-bottom: 8px;
    overflow: hidden;
}

.footer-ft {
    font-size: 40px;
}

.footer-ft > a {
    margin-right: 7px;
}
</style>