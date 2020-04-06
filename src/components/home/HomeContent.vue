<template>
    <div class="home-content">
        <HomeSearch id="fixedtool-1" name="fixedtool-1"></HomeSearch>
        <TbhNav></TbhNav>
        <ScreenOuter id="fixedtool-3" name="fixedtool-3"></ScreenOuter>
        <Layer>
            <Goods>
                <LayerHead
                    id="fixedtool-4"
                    name="fixedtool-4"
                    logoSrc="https://img.alicdn.com/tfs/TB1tqpnegMPMeJjy1XcXXXpppXa-148-48.png"
                    logoAlt="有好货"
                    qrCodeSrc="https://img.alicdn.com/tfs/TB17e_6e3MPMeJjy1XcXXXpppXa-380-382.png"
                    qrCodeAlt="有好货"
                    qrCodeTitle="手机淘宝扫码"
                    title="与品质生活不期而遇"
                ></LayerHead>
            </Goods>
            <Shopping>
                <LayerHead
                    logoSrc="https://img.alicdn.com/tfs/TB1UNX2bSFRMKJjy0FhXXX.xpXa-112-46.png"
                    logoAlt="爱逛街"
                    title="献给聪明可爱的你"
                    :more="more"
                ></LayerHead>
            </Shopping>
        </Layer>
        <Layer>
            <Hotsale>
                <LayerHeadTwo title="猜你喜欢"></LayerHeadTwo>
            </Hotsale>
        </Layer>
    </div>
</template>
<script>
import HomeSearch from "./HomeSearch";
import TbhNav from "./TbhNav";
import ScreenOuter from "./screenOuter/ScreenOuter";
import Layer from "./layer/Layer";
import Goods from "./layer/Goods";
import Shopping from "./layer/Shopping";
import LayerHead from "./layer/LayerHead";
import Hotsale from "./layer/Hotsale";
import LayerHeadTwo from "./layer/LayerHeadTwo";

export default {
    data() {
        return {
            more: true
        };
    },
    components: {
        HomeSearch,
        TbhNav,
        ScreenOuter,
        Layer,
        Goods,
        Shopping,
        Hotsale,
        LayerHead,
        LayerHeadTwo
    }
};
</script>