<style lang="sass">
    $primary:#ff9d00;

    .userinfo {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding:80rpx 2rpx;
        &-avatar{
            width: 120rpx;
            height: 120rpx;
            border-radius: 50%;
        }
        &-nickname{
            padding-top:10px
        }
    }
</style>

<template>
    <view class="page">
        <view class="userinfo bg-primary">
          <image class="userinfo-avatar" src="{{userInfo.avatarUrl}}" background-size="cover"></image>
          <text class="userinfo-nickname text-white">{{userInfo.nickName}}</text>
        </view>

        <view class="page__bd weui-cells_after-title">
            <view class="weui-cells">
                <view class="weui-cell weui-cell_access">
                    <view class="weui-cell__bd">
                        <view style="display: inline-block; vertical-align: middle">手机号</view>
                    </view>
                    <view class="weui-cell__ft weui-cell__ft_in-access">18611441234</view>
                </view>
                <view class="weui-cell weui-cell_access">
                    <view class="weui-cell__bd">
                        <view style="display: inline-block; vertical-align: middle">邮箱</view>
                    </view>
                    <view class="weui-cell__ft weui-cell__ft_in-access">kolf@live.cn</view>
                </view>
                <view class="weui-cell weui-cell_access">
                    <view class="weui-cell__bd">
                        <view style="display: inline-block; vertical-align: middle">我的订单</view>
                    </view>
                    <view class="weui-cell__ft weui-cell__ft_in-access"></view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    import wepy from 'wepy';
    // import Toast from 'wepy-com-toast';

    export default class Index extends wepy.page {
        config = {
            "navigationBarTitleText": "我的",
        };

        components = {
            // toast: Toast
        };

        data = {
            userInfo: {
                nickName: '加载中...'
            },
        };

        methods = {

        };

        events = {

        };
        async onLoad() {
            try {
                let userInfo;
                try {
                    userInfo = await this.$parent.getUserInfo();
                } catch (e) {
                    userInfo = {
                        nickName: 'Network error'
                    }
                }
                if (userInfo){
                     this.userInfo = userInfo;
                }

                console.log(userInfo);

                this.$apply();
            } catch (error) {
                console.error(error.stack);
            }
        }
    }
</script>
