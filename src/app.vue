<style lang="sass">
@import "./node_modules/weui-wxss/dist/app.wxss";

$primary: #ff9d00;

page {
    background-color: #f8f8f8;
}

.bg {
    &-primary {
        background-color: $primary;
    }
}

.text {
    &-white {
        color: #fff;
    }
    &-secondary {
        color: #999;
        font-size: 13px;
    }
}
</style>

<script>
import wepy from 'wepy';
import "babel-polyfill";

export default class extends wepy.app {

    config = {
        "pages": [
            "pages/index",
            "pages/discover",
            "pages/my",
        ],
        "window": {
            "backgroundTextStyle": "light",
            "navigationBarBackgroundColor": "#ff9d00",
            "navigationBarTitleText": "app",
            "navigationBarTextStyle": "light"
        },
        "tabBar": {
            "color": "#000",
            "selectedColor": "#ff9d00",
            "backgroundColor": "#fff",
            "borderStyle": "white",
            "list": [{
                "pagePath": "pages/index",
                "text": "首页",
                "iconPath": "images/home.png",
                "selectedIconPath": "images/home_on.png"
            }, {
                "pagePath": "pages/discover",
                "text": "发现",
                "iconPath": "images/discover.png",
                "selectedIconPath": "images/discover_on.png"
            }, {
                "pagePath": "pages/my",
                "text": "我的",
                "iconPath": "images/my.png",
                "selectedIconPath": "images/my_on.png"
            }]
        }
    };

    globalData = {
        userInfo: null,
        tokenPamrs: {
            "clientId": "eqy123456",
            "state": "22222",
            "token": "4f7790de-a1ed-45f3-9e6a-f123845975bb",
            "userCode": "VST1931017104987078"
        }
    };

    onLaunch() {
        console.log(this);
    }

    async getUserInfo() {
        if (this.globalData.userInfo) {
            return this.globalData.userInfo;
        }
        let x = await wx.login();
        let res = await wx.getUserInfo();
        this.globalData.userInfo = res.userInfo;
        return res.userInfo;
    }
}
</script>
