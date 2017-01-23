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
    <block wx:for="{{data}}" wx:for-index="idx" wx:for-item="item" wx:key="{{id}}">
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
</template>
<script>
    import wepy from 'wepy';

    export default class List extends wepy.component {
        props = {
            data:[]
        };

        events = {
            'index-broadcast': ($event, ...args) => {
                console.log(`${this.name} receive ${$event.name} from ${$event.source.name}`);
            }
        };

        methods = {
            tap () {
                console.log('tap');
            }
        };

        onLoad () {
            console.log(this.data)
        };

        load (data) {
            this.data= data;
            this.$apply();
        }
    }
</script>
