<style lang="sass">
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

            </view>
        </view>
        <view class="weui-cells weui-cells_after-title">
            <view wx:if="{{!list.length}}" class="text-center pad-v">暂无数据</view>
            <block wx:for="{{list}}" wx:for-item="item">
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

    </div>
</template>

<script>
import wepy from 'wepy';
import Toast from 'wepy-com-toast';
import {globalData, request} from '../utils/common';

    export default class Discover extends wepy.page {
        config = {
            "navigationBarTitleText": "发现",
        };

        components = {

        };

        data = {
            tabs: ["热度优先", "价格优先", "筛选"],
            list: []
        };

        methods = {
            tabClick(){

            }
        };

        events = {

        };

        async onLoad() {
            try {
                request('getProjectInfoForTrips', {
                    pageIndex: 1,
                    pageSize: 5,
                    projectColumnCode: globalData.get('projectColumnCode')
                }, (res) => {
                    console.log(res.dataList);
                    this.list = res.dataList;
                });
            } catch (error) {
                console.error(error.stack);
            }
        }
    }
</script>
