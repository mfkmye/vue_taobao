<template>
    <div class="tbh-service clearfix" >
        <div class="service">
            <ul class="service-bd" v-cloak>
                <li
                    v-for="(items, indexs) in data"
                    :key="indexs"
                    @mouseover="serviceFloatDataIndex = indexs; leaveServiceBD = false"
                    @mouseleave="leaveServiceBD = true"
                >
                    <a>{{items.text_list[0].title}}</a>&nbsp;/&nbsp;
                    <a>{{items.text_list[1].title}}</a>&nbsp;/&nbsp;
                    <a>{{items.text_list[2].title}}</a>
                    <span class="right-arrow bg-icon"></span>
                </li>
            </ul>
            <div
                class="service-float"
                @mouseover="leaveServiceFloat = false"
                @mouseleave="leaveServiceFloat = true"
                v-show="!(leaveServiceBD && leaveServiceFloat)"
            >
                <template v-for="(serviceFloatData, dataIndex) in data">
                    <div
                        class="clearfix"
                        :key="dataIndex"
                        v-show="serviceFloatDataIndex == dataIndex"
                        :show="serviceFloatDataIndex"
                        :_key="dataIndex"
                    >
                        <div class="left">
                            <div class="service-fi-links">
                                <div
                                    class="service-panel"
                                    v-for="(item, index) in serviceFloatData.text_list"
                                    :key="index"
                                >
                                    <h5 class="clearfix">
                                        <a class="left">{{item.title}}</a>
                                        <a class="right">
                                            更多
                                            <span class="right-arrow bg-icon"></span>
                                        </a>
                                    </h5>
                                    <p>
                                        <a v-for="(obj , i) in item.list" :key="i">{{obj}}</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="right service-rmd">
                            <h3>猜你喜欢</h3>
                            <div class="service-rmd-list clearfix" data-spm-ab="rmds-11">
                                <a v-for="(item, index) in serviceFloatData.img_list" :key="index">
                                    <div class="div img-wrapper">
                                        <img
                                            :src="'./src/img/screenOuterTbhList/'+item.src"
                                            :alt="item.description"
                                        />
                                    </div>
                                    <h5>
                                        <span class="li-name a-all">{{item.description}}</span>
                                    </h5>
                                </a>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
    data() {
        return {
            serviceFloatData: [],
            serviceFloatDataIndex: 0,
            leaveServiceBD: true,
            leaveServiceFloat: true
        };
    },
    computed: {
        ...mapState("ScreenOuterTbh", ["data", "isLoading"])
    },
    methods: {
        ...mapActions("ScreenOuterTbh", ["getData"])
    },
    mounted() {
        this.getData();
    }
};
</script>
<style>
[v-cloak] {
    display: none;
}
.tbh-service {
    position: relative;
    float: left;
    width: 190px;
    background-color: white;
}

.service {
    height: 522px;
    position: relative;
    font-size: 14px;
    color: #fff;
    width: 190px;
    box-sizing: border-box;
    border: 1px solid #ff5000;
}

.service-bd {
    border-top: none;
    padding-top: 5px;
    padding-bottom: 3px;
    overflow: hidden;
}

.service-bd > li {
    overflow: hidden;
    line-height: 32px;
    height: 32px;
    padding-left: 25px;
    padding-right: 19px;
    position: relative;
    font-size: 14px;
    font-weight: 400;
    width: 145px;
    color: #666;
    transition: all 0.2s;
}

.service-bd > li:hover {
    background-color: #ffe4dc;
    color: #ff5000;
}

.service-bd > li > a:hover {
    text-decoration: underline;
    cursor: pointer;
}

.service-bd > li .right-arrow {
    background-size: 10px 10px;
    position: absolute;
    right: 10px;
    top: 10px;
}

.service-panel h5 a span.right-arrow {
    background-size: 10px 10px;
}

.service-panel h5 a span.right-arrow,
.service-bd > li .right-arrow {
    background-image: url("../../../assets/pictures/home/screenOuter/right-arrow.png");
}

.service-panel h5 a:hover span.right-arrow,
.service-bd > li:hover .right-arrow {
    background-image: url("../../../assets/pictures/home/screenOuter/right-arrow-action.png");
}

.bg-icon {
    background-position: center;
    background-size: 1em 1em;
    background-repeat: no-repeat;
    width: 1em;
    height: 1em;
    display: inline-block;
    vertical-align: middle;
}

.service-float {
    position: absolute;
    left: 188px;
    top: 0;
    padding: 0 0 0 18px;
    width: 692px;
    height: 518px;
    border: 2px solid #f94a14;
    box-shadow: 2px 2px 0 #dcdadb;
    background-color: #fff;
    color: #333;
    font-size: 12px;
    z-index: 22;
}

.service-float:hover {
    display: block;
    transition: all 0.2s;
}

.service-fi-links {
    padding-top: 10px;
    width: 415px;
    height: 490px;
    overflow: hidden;
    padding-right: 12px;
    padding-left: 10px;
    float: left;
    display: flex;
    flex-direction: column;
}

.service-panel {
    flex: 1 1 0;
    /* border: 1px solid forestgreen; */
    overflow: hidden;
    font-size: 12px;
    margin-bottom: 5px;
    padding-bottom: 10px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
}

.service-panel > h5 {
    position: relative;
    height: 36px;
    line-height: 36px;
    font-size: 16px;
    color: #333;
    flex: 0 0 36px;
    font-weight: 700;
}

.service-panel > h5 > a:hover,
.service-panel > h5 span {
    color: #ff5000;
}
.service-panel > h5 a.right,
.service-panel > h5 span {
    font-size: 12px;
    font-weight: normal;
}

.service-panel > p {
    overflow: hidden;
    line-height: 26px;
    flex: 1 1 auto;
}

.service-panel > p > a {
    color: #666;
    display: inline-block;
    margin-right: 12px;
    white-space: nowrap;
}

.service-rmd {
    float: left;
    width: 253px;
    border-left: 1px solid #f4f4f4;
    position: relative;
    height: 498px;
    padding-top: 20px;
}

.service-rmd h3 {
    line-height: 18px;
    color: #333;
    font-size: 14px;
    text-align: center;
    font-weight: 400;
}

.service-rmd-list > a {
    display: block;
    width: 97px;
    height: 143px;
    padding: 10px 0 0 20px;
    overflow: hidden;
    float: left;
}

.service-rmd-list .img-wrapper {
    width: 97px;
    height: 97px;
    overflow: hidden;
    background: #4f4f4f;
}

.img-wrapper:hover {
    opacity: 0.8;
}

.service-rmd-list h5 {
    height: 26px;
    line-height: 26px;
    font-size: 12px;
    overflow: hidden;
    font-weight: 400;
    color: #999;
}

.img-wrapper > div,
.img-wrapper > a {
    width: 97px;
    height: 97px;
    background-size: 97px 97px;
    background-position: center;
    background-repeat: no-repeat;
}
</style>