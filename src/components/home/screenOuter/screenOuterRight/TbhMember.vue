<template>
    <div class="tbh-member">
        <div class="member-bd">
            <div class="avatar-wrapper">
                <a>
                    <img src="../../../../../public/src/img/col-right/portrait.jpg" />
                </a>
            </div>
            <span class="member-nick-info">
                Hi!
                <strong class="member-nick">你好</strong>
            </span>
            <p class="member-tjb">
                <a class="glob">
                    <span class="tbh-icon"></span>领淘金币抵钱
                </a>
                <a class="club">
                    <span class="tbh-icon"></span>会员俱乐部
                </a>
            </p>
        </div>
        <div class="member-ft">
            <div class="member-logout">
                <a class="weight">登录</a>
                <a class="weight">注册</a>
                <a class="weight">开店</a>
            </div>
            <div class="member-login"></div>
        </div>
    </div>
</template>
<style lang="less">
.tbh-member {
    padding: 3px 0 10px 0;
    height: 132px;
    text-align: center;
    background-size: 290px 145px;
    background-repeat: no-repeat;
    background-position: 0 0;
    background-image: url("data:image/png;base64,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");
    .member-bd {
        position: relative;
        height: 91px;
        .avatar-wrapper {
            display: block;
            margin: 0 auto;
            width: 74px;
            height: 56px;
            a {
                cursor: pointer;
                img {
                    border-radius: 50%;
                }
            }
        }
        span {
            font-size: 12px;
            display: block;
            line-height: 17px;
            height: 17px;
        }
        .member-tjb {
            height: 17px;
            line-height: 17px;
            a {
                display: inline-block;
                border-radius: 9px;
                background-clip: padding-box;
                background: #ffe4db;
                padding: 0 10px 0 20px;
                position: relative;
                border: none;
                color: #ff5000;
                font-size: 12px;
                .tbh-icon {
                    position: absolute;
                    top: 0;
                    display: block;
                    left: 0;
                    height: 16px;
                    width: 16px;
                    vertical-align: middle;
                    background-position: 0 -572.5px;
                    background-image: url("../../../../../public/src/img/col-right/tbh-icon.png");
                    background-repeat: no-repeat;
                }
            }
            a:last-of-type {
                .tbh-icon {
                    background-position: 0 -528px;
                }
            }
        }
    }
    .member-ft {
        height: 40px;
        overflow: hidden;
        margin-top: 2px;
        .member-logout {
            display: inline-block;
            height: 25px;
            margin: 8px auto 0px auto;
            a {
                float: left;
                line-height: 25px;
                width: 75px;
                margin-right: 7px;
                text-align: center;
                color: #fff;
                background-image: linear-gradient(
                    to right,
                    #ff5000 0,
                    #ff6f06 100%
                );
                background-repeat: repeat-x;
                border-radius: 4px;
                font-size: 14px;
                font-weight: 700;
            }
            a:last-of-type {
                margin-right: 0px;
            }
        }
    }
}
</style>