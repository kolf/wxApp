<style lang="sass">
.slide {
    &-image {
        display: block;
        height: 100%;
        width: 100%;
    }
}

.list{
    &-item{
        &__img{
            width:100px;
            height:100px;
            background-color:#eee;
            display:block
        }
    }
}
</style>

<template>
<swiper>
    <block wx:for="{{banners}}" wx:key={{id}} wx:for-item="item">
        <swiper-item>
            <swiper-item>
                <image mode="aspectFill" src="{{item.url}}" class="slide-image" />
            </swiper-item>
        </swiper-item>
    </block>
</swiper>
<view class="page__bd">
    <view class="weui-cells__title">亲子出游</view>
    <view class="weui-cells weui-cells_after-title">
        <block wx:for="{{forTrips}}" wx:for-item="item">
            <view class="weui-cell">
                <view class="weui-cell__hd" style="position: relative;margin-right: 10px;">
                    <image src="{{item.picUrl}}" mode="aspectFill" class="list-item__img"/>
                </view>
                <view class="weui-cell__bd">
                    <view>{{item.playName}}</view>
                    <view class="text-secondary">详细地址：{{item.projectComments}}</view>
                    <view class="text-secondary">活动时间：{{item.projectStartTime}}</view>
                </view>
            </view>
        </block>
    </view>
    <view class="weui-cells__title">亲子交流</view>
    <view class="weui-cells weui-cells_after-title">
        <view wx:if="{{!forInteracts.length}}" class="text-center pad-v">暂无数据</view>
        <block wx:for="{{forInteracts}}" wx:for-item="item">
            <view class="weui-cell">
                <view class="weui-cell__hd" style="position: relative;margin-right: 10px;">
                    <image src="{{item.picUrl}}" mode="aspectFill" class="list-item__img"/>
                </view>
                <view class="weui-cell__bd">
                    <view>{{item.playName}}</view>
                    <view class="text-secondary">详细地址：{{item.projectComments}}</view>
                    <view class="text-secondary">活动时间：{{item.projectStartTime}}</view>
                </view>
            </view>
        </block>
    </view>
</view>
</template>

<script>
import wepy from 'wepy';
import Toast from 'wepy-com-toast';
import {globalData, request} from '../utils/common';

export default class Index extends wepy.page {
    config = {
        "navigationBarTitleText": "首页",
    };

    components = {
        // toast: Toast
    };

    data = {
        banners: [],
        forTrips: [],
    };

    methods = {

    };

    events = {

    };
    async onLoad() {
        try {
            request('getProjectColumnList', {
                pageIndex: 1,
                pageSize: 10,
                projectColumnCode: globalData.get('projectColumnCode')
            }, (res) => {
                const list = res.dataList.columnImgsInfoList;
                this.banners = list.map(item => {
                    return {
                        url: item.picUrl,
                        link: 'https://www.baidu.com'
                    }
                })
            });

            request('getProjectInfoForTrips', {
                pageIndex: 1,
                pageSize: 5,
                projectColumnCode: globalData.get('projectColumnCode')
            }, (res) => {
                console.log(res.dataList);
                this.forTrips = res.dataList;
            }, (err) => {
                console.log(err)
            });

            request('getProjectInfoForInteract', {
                pageIndex: 1,
                pageSize: 5,
                projectColumnCode: globalData.get('projectColumnCode')
            }, (res) => {
                console.log(res.dataList);
                this.forInteracts = res.dataList;
            });

        } catch (error) {
            console.error(error.stack);
        }
    };
}
</script>
