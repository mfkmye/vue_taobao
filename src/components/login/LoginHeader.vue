<template>
    <div class="login-header clearfix">
        <div class="logo">
            <div class="left">
                <router-link tag="a" title="淘宝网" to="/home">淘宝网</router-link>
            </div>
            <div class="login-msg error">
                <p class="error">为确保您账户的安全及正常使用，依《网络安全法》相关要求，6月1日起会员账户需绑定手机。如您还未绑定，请尽快完成，感谢您的理解及支持！</p>
            </div>
            <a href="https://survey.taobao.com/survey/Q095thIx2" class="link">
                <span src="../assets/pictures/login/login_msg.png"></span> "登录页面"改进建议
            </a>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("../../assets/css/login.css");

.login-header {
    padding: 22px 0;
    height: 44px;
}

.logo {
    width: 1190px;
    margin: 0 auto;
    overflow: hidden;
}

.left > a {
    display: block;
    width: 110px;
    height: 44px;
    color: #f40;
    background: url("../../assets/pictures/login/login_logo.png") no-repeat
        center / 110px 44px;
    overflow: hidden;
    padding-top: 44px;
    box-sizing: border-box;
    vertical-align: middle;
}

.login-msg {
    text-align: center;
    width: 880px;
    margin: 0 auto;
    line-height: 16px;
    padding: 6px 10px;
    overflow: hidden;
    background: #fef2f2;
    border: 1px solid #ffb4a8;
    color: #6c6c6c;
}

.login-msg > p {
    float: none;
    width: auto;
    white-space: normal;
    word-wrap: break-word;
}

.link {
    float: right;
    line-height: 44px;
    color: #666;
    font-size: 12px;
    text-decoration: none;
}

.link:hover {
    color: #f40;
}

.link > span {
    display: inline-block;
    width: 16px;
    height: 16px;
    background: url("../../assets/pictures/login/login_msg.png") no-repeat -4px -4px /
        22px 22px;
    vertical-align: middle;
}
</style>