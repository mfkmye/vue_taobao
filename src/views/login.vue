<template>
    <div class="login">
        <Header>
            <LoginHeader></LoginHeader>
        </Header>
        <Content>
            <LoginContent></LoginContent>
        </Content>
        <Footer class="footer">
            <LoginFooter></LoginFooter>
        </Footer>
    </div>
</template>
<script>
import Header from "../components/Header";
import LoginHeader from "../components/login/LoginHeader";
import Content from "../components/Content";
import LoginContent from "../components/login/LoginContent";
import Footer from "../components/Footer";
import LoginFooter from "../components/login/LoginFooter";
export default {
    data() {
        return {};
    },
    components: {
        Header,
        LoginHeader,
        Content,
        LoginContent,
        Footer,
        LoginFooter
    }
};
</script>