<template>
    <div class="col-right">
        <TbhMember></TbhMember>
        <div class="tbh-tipoff">
            <a>
                网上有害信息举报专区
                <span class="triangle"></span>
            </a>
        </div>
        <TbhNotice></TbhNotice>
        <TbhConve></TbhConve>
        <TbhApp></TbhApp>
    </div>
</template>
<script>
import TbhMember from "./screenOuterRight/TbhMember";
import TbhNotice from "./screenOuterRight/TbhNotice";
import TbhConve from "./screenOuterRight/TbhConve";
import TbhApp from "./screenOuterRight/TbhApp";
export default {
    components: {
        TbhMember,
        TbhNotice,
        TbhConve,
        TbhApp
    }
};
</script>
<style lang="less">
.col-right {
    float: right;
    width: 290px;
    height: 100%;
    margin-top: 10px;
    position: relative;

    .tbh-tipoff {
        a {
            position: relative;
            padding-left: 82px;
            color: #f40;
            display: block;
            height: 26px;
            line-height: 26px;
            background: #ffe4dd;
            font-size: 12px;
            span {
                position: absolute;
                right: 52px;
                top: 9px;
                line-height: 0;
                width: 0;
                height: 0;
                border-style: solid;
                margin-left: 32px;
                border-width: 5px 0 5px 7px;
                border-color: transparent transparent transparent #f40;
            }
        }
    }

    a {
        cursor: pointer;
    }
}
</style>