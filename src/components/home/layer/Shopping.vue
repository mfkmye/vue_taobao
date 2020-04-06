<template>
    <div class="tbh-shopping">
        <slot></slot>
        <ul class="clearfix shopping-list">
            <li v-for="(item, index) in data" :key="index">
                <a>
                    <div class="img-wrapper">
                        <img :src="item.src" :alt="item.alt" />
                    </div>
                    <div class="info">
                        <p class="subtitle">
                            <span class="tb-ifont"></span>
                            {{item.title}}
                        </p>
                        <div class="extra">
                            <div class="pic-wrapper">
                                <img :src="item.src2" :alt="item.alt2" />
                            </div>
                            <p class="name">{{item.title2}}</p>
                        </div>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
            data: [
                {
                    src:
                        "https://img.alicdn.com/tfscom/i2/2878736573/TB2JkzWqYsTMeJjSsziXXcdwXXa_!!2878736573.jpg_180x180xzq90.jpg",
                    alt: "针织衫，你喜欢这样的花样吗",
                    title: "针织衫，你喜欢这样的花样吗",
                    src2:
                        "https://img.alicdn.com/imgextra/i4/2878736573/TB2qMKcaS8mpuFjSZFMXXaxpVXa_!!2878736573-0-beehive-scenes.jpg_30x30.jpg",
                    alt2: "傅***宝",
                    title2: "傅***宝"
                },
                {
                    src:
                        "https://img.alicdn.com/tfscom/i3/2522860159/TB275SBcyGO.eBjSZFEXXcy9VXa_!!2522860159.jpg_180x180xzq90.jpg",
                    alt: "秋冬的红人复古穿搭范",
                    title: "秋冬的红人复古穿搭范",
                    src2:
                        "https://img.alicdn.com/imgextra/i3/2522860159/O1CN01PlS1nT1D2rSckynzi_!!2522860159-0-beehive-scenes.jpg_30x30.jpg",
                    alt2: "a***o",
                    title2: "a***o"
                },
                {
                    src:
                        "https://img.alicdn.com/tfscom/i2/57220545/TB2e2VwbBTH8KJjy0FiXXcRsXXa_!!57220545.jpg_180x180xzq90.jpg",
                    alt: "百搭毛呢短裤瞬间拥有大长腿",
                    title: "百搭毛呢短裤瞬间拥有大长腿",
                    src2:
                        "https://img.alicdn.com/imgextra/i4/57220545/O1CN011FteKOPpOxkx6Am_!!57220545-2-beehive-scenes.png_30x30.jpg",
                    alt2: "L***超",
                    title2: "L***超"
                },
                {
                    src:
                        "https://img.alicdn.com/tfscom/i3/185674113/TB28TI.bMfH8KJjy1zcXXcTzpXa_!!185674113.jpg_180x180xzq90.jpg",
                    alt: "选对皮草，分分钟成为温柔又气场的小女人",
                    title: "选对皮草，分分钟成为温柔又气场的小女人",
                    src2:
                        "https://img.alicdn.com/tfscom/tuitui/TB1wD_7MpXXXXb4XpXXXXXXXXXX_30x30.jpg",
                    alt2: "杨***O",
                    title2: "杨***O"
                },
                {
                    src:
                        "https://img.alicdn.com/tfscom/i6/TB14NFSOFXXXXXDXVXXYXGcGpXX_M2.SS2_180x180xzq90.jpg",
                    alt: "百褶小立领",
                    title: "百褶小立领",
                    src2:
                        "https://img.alicdn.com/imgextra/i2/2457375907/TB2nh42tFooBKNjSZFPXXXa2XXa_!!2457375907-0-beehive-scenes.jpg_30x30.jpg",
                    alt2: "日***装",
                    title2: "日***装"
                },
                {
                    src:
                        "https://img.alicdn.com/tfscom/i1/12375520/TB2dqkfixuaVKJjSZFjXXcjmpXa_!!12375520.jpg_180x180xzq90.jpg",
                    alt: "解决你所有穿衣烦恼，白衬衫就能让你风格永存！",
                    title: "解决你所有穿衣烦恼，白衬衫就能让你风格永存！",
                    src2:
                        "https://img.alicdn.com/tfscom/tuitui/TB1jifoNpXXXXaVaFXXXXXXXXXX_30x30.jpg",
                    alt2: "小***窝",
                    title2: "小***窝"
                }
            ]
        };
    },
    methods: {
        // 用该脚本在淘宝官网扒取数据(*^▽^*)
        getAllData() {
            // ul.shopping-list > li > img(src/alt) span.tb-ifont p.name
            var className = "shopping-list";
            var ul = document.getElementsByClassName(className)[0];
            var list = ul.children;
            var str = "";
            for (let i = 0; i < list.length; i++) {
                const element = list[i];
                var img1 = element.getElementsByTagName("img")[0];
                var p = element.getElementsByClassName("subtitle")[0];
                var img2 = element.getElementsByTagName("img")[1];
                var p2 = element.getElementsByClassName("name")[0];
                str +=
                    '{src:"' +
                    img1.src +
                    '",alt:"' +
                    img1.alt +
                    '",title:"' +
                    p.text +
                    '",src2:"' +
                    img2.src +
                    '",alt2:"' +
                    img2.alt +
                    '",title2:"' +
                    p2.innerText +
                    '"},';
            }
            console.log(str);
        }
    }
};
</script>
<style lang="less">
.tbh-shopping {
    width: 590px;
    float: left;
    margin-left: 10px;
    height: 658px;
    background-color: white;
    .shopping-list {
        overflow: hidden;
        padding-left: 21px;
        li {
            float: left;
            width: 180px;
            overflow: hidden;
            margin: 0 4px 17px 0;
            a {
                display: block;
                .img-wrapper {
                    background-color: #4f4f4f;
                    overflow: hidden;
                    img {
                        width: 100%;
                        height: 180px;
                        display: block;
                        background: #fff;
                        opacity: 0.9;
                        transition: all 0.2s;
                    }
                }
                .img-wrapper:hover img {
                    opacity: 0.8;
                }
                .info {
                    overflow: hidden;
                    padding-left: 10px;
                    .subtitle {
                        margin-top: 11px;
                        line-height: 22px;
                        height: 44px;
                        overflow: hidden;
                        font-size: 14px;
                        color: #999;
                        .tb-ifont {
                            color: #ebebeb;
                            float: left;
                            width: 14px;
                            height: 14px;
                            font-size: 14px;
                            margin-right: 4px;
                            display: inline-block;
                            background: url("../../../assets/pictures/home/layer/single_quotation_marks.png")
                                no-repeat center/14px 18px;
                        }
                    }
                    .extra {
                        margin-top: 14px;
                        .pic-wrapper {
                            float: left;
                            width: 22px;
                            height: 22px;
                            border-radius: 50%;
                            background-clip: padding-box;
                            overflow: hidden;
                            img {
                                width: 100%;
                                height: 100%;
                                display: block;
                            }
                        }
                        .name {
                            margin-left: 30px;
                            line-height: 22px;
                            font-size: 12px;
                            color: #999;
                        }
                    }
                }
            }
            a:hover {
                color: #f40;
                cursor: pointer;
            }
        }
    }
}
</style>