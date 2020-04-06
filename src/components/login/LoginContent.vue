<template>
    <div class="login-content">
        <div class="login-box-warp box-border box-yellowgreen">
            <div class="container">
                <div class="container-box">
                    <div class="top-box" height="30px">
                        <div class="top">
                            <a href="javascript:void(0);" target="_self" class="password-login">密码登录</a>
                            <div v-show="errorMsg.error" class="error">
                                <i></i>
                                <p class="error_msg" :key="errorMsg.time">{{ errorMsg.msg}}</p>
                            </div>
                        </div>
                    </div>
                    <form class="login-form" @submit.prevent="submitFrom">
                        <div class="fm-field">
                            <label class="fm-label-icon">
                                <span class="icon-user" title="用户名"></span>
                            </label>
                            <div class="input-plain-wrap">
                                <input
                                    name="user-id"
                                    type="text"
                                    class="fm-text"
                                    id="fm-login-id"
                                    placeholder="会员名/邮箱/手机号"
                                    autocapitalize="off"
                                    v-model="username"
                                />
                            </div>
                        </div>
                        <div class="fm-field">
                            <div>
                                <label class="fm-label-icon">
                                    <span class="icon-pwd" title="请输入登录密码"></span>
                                </label>
                            </div>
                            <div class="input-plain-wrap input-wrap-password">
                                <input
                                    name="user-pwd"
                                    type="password"
                                    class="fm-text"
                                    id="fm-login-password"
                                    placeholder="请输入登录密码"
                                    maxlength="40"
                                    autocapitalize="off"
                                    v-model="password"
                                />
                            </div>
                        </div>
                        <div class="fm-btn">
                            <button
                                type="submit"
                                tabindex="3"
                                class="login-submit"
                            >{{ isLoading ? "正在登录..." : "登录"}}</button>
                        </div>
                        <div class="sns-login-links">
                            <a target="_self" class="weibo-login">
                                <i class="iconfont"></i>微博登录
                            </a>
                            <a target="_self" class="alipay-login">
                                <i class="iconfont"></i>支付宝登录
                            </a>
                        </div>
                        <div class="login-blocks">
                            <a class="forgot-username">忘记用户名</a>
                            <a class="forgot-password">忘记密码</a>
                            <a class="register">免费注册</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="content-bg"></div>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
    data() {
        return {
            username: "",
            password: ""
        };
    },
    computed: {
        ...mapState("UserInfo", ["isLoading", "errorMsg"])
    },
    watch: {
        "$store.state.UserInfo.isLoging": function(val) {
            if (val) {
                this.$router.push("/home");
            }
        }
    },
    methods: {
        submitFrom() {
            this.$store.dispatch("UserInfo/login", {
                userId: this.username,
                password: this.password
            });
        }
    },
};
</script>
<style scoped>
.login-content {
    width: 1190px;
    margin: 0 auto;
    overflow: hidden;
    position: relative;
    height: 600px;
}
.login-box-warp {
    position: absolute;
    top: 120px;
    right: 60px;
    width: 350px;
}

.box-border {
    box-sizing: border-box;
    border: 1px solid;
}

.box-yellowgreen {
    border-color: yellowgreen;
}

.box-red {
    border-color: red;
}

.container {
    width: 350px;
    min-height: 350px;
    padding: 25px 25px 23px;
    color: #6c6c6c;
    position: relative;
    margin: 0 auto;
    background-color: hsla(0, 0%, 100%, 0.9);
}

* {
    box-sizing: border-box;
}
.top-box {
    height: 46px;
}
.top {
    text-align: left;
    font-weight: 400;
    position: relative;
}
.top > a {
    height: 18px;
    line-height: 5px;
    font-size: 16px;
    color: #3c3c3c;
    font-weight: 700;
    position: absolute;
    top: 12px;
    left: 3px;
}

.top > a.active {
    border-bottom: 2px solid black;
}

.fm-field {
    position: relative;
    margin-bottom: 20px;
    font-size: 14px;
}

.fm-field,
.fm-text {
    width: 100%;
}

.fm-text {
    border: 1px solid #ccc;
    height: 42px;
    font-size: 14px;
    padding-left: 50px;
}

.fm-label-icon {
    display: inline-block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    background-color: #ccc;
    position: absolute;
    left: 1px;
    top: 1px;
}
.fm-label-icon > span {
    display: inline-block;
    width: 40px;
    height: 40px;
    background: url("../../assets/pictures/login/login_user.png") no-repeat
        center / 20px 20px;
}
.fm-label-icon > span.icon-pwd {
    background-image: url("../../assets/pictures/login/login_password.png");
}

.fm-label-icon > span.icon-phone {
    background-image: url("../../assets/pictures/login/login_phone.png");
}

.fm-label-icon > span.icon-sms {
    background-image: url("../../assets/pictures/login/login_sms-code.png");
}

input:link {
    border: 1px solid #ccc;
}

button {
    background: #f40;
    border-color: #f40;
    font-size: 16px;
    border: 1px solid;
    border-radius: 3px;
    height: 42px;
    line-height: 42px;
    outline: none;
    color: #fff;
    width: 100%;
    cursor: pointer;
}

.iconfont {
    font-size: 16px;
    margin-right: 3px;
}

.sns-login-links {
    text-align: left;
    margin-top: 16px;
}

.error {
    border-color: #ffb4a8;
    background-color: #fef2f2;
    color: #6c6c6c;
    line-height: 16px;
    padding: 6px 10px;
    overflow: hidden;
    width: 100%;
    border: 1px solid;
    position: relative;
}

.error > i {
    display: block;
    padding-right: 10px;
    float: left;
    font-size: 16px;
    width: 16px;
    height: 16px;
    background: url("../../assets/pictures/login/login_error.png") no-repeat
        center / 16px 16px;
    box-sizing: content-box;
}

.error > p {
    float: left;
    white-space: normal;
    word-wrap: break-word;
    width: 240px;
}

.sns-login-links > a > i {
    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: middle;
    background-position: center;
    background-size: 16px 16px;
    overflow: hidden;
}

.weibo-login > i {
    background-image: url("../../assets/pictures/login/login_weibo.png");
}

.alipay-login > i {
    background-size: 18px 18px !important; /* 图片比前一个小，特别放大 */
    background-image: url("../../assets/pictures/login/login_zhifubao.png");
}

.login-blocks {
    margin-top: 25px;
    overflow: hidden;
    text-align: right;
}

.login-blocks > a {
    margin-right: 10px;
}

.login-blocks > a:hover {
    color: #f40;
    cursor: pointer;
}

.content-bg {
    background-image: url("../../assets/pictures/login/login_bg.jpg");
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 600px;
}
</style>