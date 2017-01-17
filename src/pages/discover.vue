<style lang="sass">

</style>

<template>
    <div class="page__bd">
        <view class="weui-tab">
            <view class="weui-navbar">
                <block wx:for-items="{{tabs}}" wx:key="{{index}}">
                    <view class="weui-navbar__item" bindtap="tabClick">
                        <view class="weui-navbar__title">{{item}}</view>
                    </view>
                </block>
            </view>
            <view class="weui-tab__panel">
                <view class="weui-tab__content" hidden="{{activeIndex != 0}}">选项一的内容</view>
            </view>
        </view>
        <view class="weui-cells weui-cells_after-title">
            <view class="weui-cell">
                <view class="weui-cell__hd" style="position: relative;margin-right: 10px;">
                    <image src="http://placeholder.qiniudn.com/100x80" style="width: 100px; height: 80px; display: block"/>
                </view>
                <view class="weui-cell__bd">
                    <view>水泉沟村（莲花缘度假村）</view>
                    <view class="text-secondary">详细地址：延庆县大庄科...</view>
                    <view class="text-secondary">活动时间：2017-2-9 18:00</view>
                </view>
            </view>
            <view class="weui-cell">
                <view class="weui-cell__hd" style="position: relative;margin-right: 10px;">
                    <image src="http://placeholder.qiniudn.com/100x80" style="width: 100px; height: 80px; display: block"/>
                </view>
                <view class="weui-cell__bd">
                    <view>水泉沟村（莲花缘度假村）</view>
                    <view class="text-secondary">详细地址：延庆县大庄科...</view>
                    <view class="text-secondary">活动时间：2017-2-9 18:00</view>
                </view>
            </view>
            <view class="weui-cell">
                <view class="weui-cell__hd" style="position: relative;margin-right: 10px;">
                    <image src="http://placeholder.qiniudn.com/100x80" style="width: 100px; height: 80px; display: block"/>
                </view>
                <view class="weui-cell__bd">
                    <view>水泉沟村（莲花缘度假村）</view>
                    <view class="text-secondary">详细地址：延庆县大庄科...</view>
                    <view class="text-secondary">活动时间：2017-2-9 18:00</view>
                </view>
            </view>
            <view class="weui-cell">
                <view class="weui-cell__hd" style="position: relative;margin-right: 10px;">
                    <image src="http://placeholder.qiniudn.com/100x80" style="width: 100px; height: 80px; display: block"/>
                </view>
                <view class="weui-cell__bd">
                    <view>水泉沟村（莲花缘度假村）</view>
                    <view class="text-secondary">详细地址：延庆县大庄科...</view>
                    <view class="text-secondary">活动时间：2017-2-9 18:00</view>
                </view>
            </view>
            <view class="weui-cell">
                <view class="weui-cell__hd" style="position: relative;margin-right: 10px;">
                    <image src="http://placeholder.qiniudn.com/100x80" style="width: 100px; height: 80px; display: block"/>
                </view>
                <view class="weui-cell__bd">
                    <view>水泉沟村（莲花缘度假村）</view>
                    <view class="text-secondary">详细地址：延庆县大庄科...</view>
                    <view class="text-secondary">活动时间：2017-2-9 18:00</view>
                </view>
            </view>
            <view class="weui-cell">
                <view class="weui-cell__hd" style="position: relative;margin-right: 10px;">
                    <image src="http://placeholder.qiniudn.com/100x80" style="width: 100px; height: 80px; display: block"/>
                </view>
                <view class="weui-cell__bd">
                    <view>水泉沟村（莲花缘度假村）</view>
                    <view class="text-secondary">详细地址：延庆县大庄科...</view>
                    <view class="text-secondary">活动时间：2017-2-9 18:00</view>
                </view>
            </view>
            <view class="weui-cell">
                <view class="weui-cell__hd" style="position: relative;margin-right: 10px;">
                    <image src="http://placeholder.qiniudn.com/100x80" style="width: 100px; height: 80px; display: block"/>
                </view>
                <view class="weui-cell__bd">
                    <view>水泉沟村（莲花缘度假村）</view>
                    <view class="text-secondary">详细地址：延庆县大庄科...</view>
                    <view class="text-secondary">活动时间：2017-2-9 18:00</view>
                </view>
            </view>
            <view class="weui-cell">
                <view class="weui-cell__hd" style="position: relative;margin-right: 10px;">
                    <image src="http://placeholder.qiniudn.com/100x80" style="width: 100px; height: 80px; display: block"/>
                </view>
                <view class="weui-cell__bd">
                    <view>水泉沟村（莲花缘度假村）</view>
                    <view class="text-secondary">详细地址：延庆县大庄科...</view>
                    <view class="text-secondary">活动时间：2017-2-9 18:00</view>
                </view>
            </view>
            <view class="weui-cell">
                <view class="weui-cell__hd" style="position: relative;margin-right: 10px;">
                    <image src="http://placeholder.qiniudn.com/100x80" style="width: 100px; height: 80px; display: block"/>
                </view>
                <view class="weui-cell__bd">
                    <view>水泉沟村（莲花缘度假村）</view>
                    <view class="text-secondary">详细地址：延庆县大庄科...</view>
                    <view class="text-secondary">活动时间：2017-2-9 18:00</view>
                </view>
            </view>
            <view class="weui-cell">
                <view class="weui-cell__hd" style="position: relative;margin-right: 10px;">
                    <image src="http://placeholder.qiniudn.com/100x80" style="width: 100px; height: 80px; display: block"/>
                </view>
                <view class="weui-cell__bd">
                    <view>水泉沟村（莲花缘度假村）</view>
                    <view class="text-secondary">详细地址：延庆县大庄科...</view>
                    <view class="text-secondary">活动时间：2017-2-9 18:00</view>
                </view>
            </view>
            <view class="weui-cell">
                <view class="weui-cell__hd" style="position: relative;margin-right: 10px;">
                    <image src="http://placeholder.qiniudn.com/100x80" style="width: 100px; height: 80px; display: block"/>
                </view>
                <view class="weui-cell__bd">
                    <view>水泉沟村（莲花缘度假村）</view>
                    <view class="text-secondary">详细地址：延庆县大庄科...</view>
                    <view class="text-secondary">活动时间：2017-2-9 18:00</view>
                </view>
            </view>
            <view class="weui-cell">
                <view class="weui-cell__hd" style="position: relative;margin-right: 10px;">
                    <image src="http://placeholder.qiniudn.com/100x80" style="width: 100px; height: 80px; display: block"/>
                </view>
                <view class="weui-cell__bd">
                    <view>水泉沟村（莲花缘度假村）</view>
                    <view class="text-secondary">详细地址：延庆县大庄科...</view>
                    <view class="text-secondary">活动时间：2017-2-9 18:00</view>
                </view>
            </view>
        </view>

    </div>
</template>

<script>
    import wepy from 'wepy';
    // import Toast from 'wepy-com-toast'; 

    export default class Index extends wepy.page {
        config = {
            "navigationBarTitleText": "发现",
        };

        components = {

        };

        data = {
            tabs: ["热度优先", "价格优先", "筛选"]
        };

        methods = {
            tabClick(){

            }
        };

        events = {

        };

        async onLoad() {
            try {

            } catch (error) {
                console.error(error.stack);
            }
        }
    }
</script>
