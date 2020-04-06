<template>
    <div class="home" @touchstart.stop.prevent="touchstart">
        <Header>
            <HomeHeader></HomeHeader>
        </Header>
        <Content>
            <HomeContent></HomeContent>
            <HomeContentBg></HomeContentBg>
        </Content>
        <Footer class="footer">
            <LoginFooter></LoginFooter>
        </Footer>
        <FixedToolsHome></FixedToolsHome>
    </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header";
import HomeHeader from "../components/home/HomeHeader";
import Content from "../components/Content";
import HomeContent from "../components/home/HomeContent";
import HomeContentBg from "../components/home/HomeContentBg";
import Footer from "../components/Footer";
import LoginFooter from "../components/login/LoginFooter";
import FixedToolsHome from "../components/home/FixedToolsHome";
export default {
    name: "Home",
    components: {
        Header,
        HomeHeader,
        Content,
        HomeContent,
        HomeContentBg,
        Footer,
        LoginFooter,
        FixedToolsHome
    }
};
</script>
<style scoped>
.footer {
    background-color: white;
}
</style>
