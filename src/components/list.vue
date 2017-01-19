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

</template>
<script>
    import wepy from 'wepy';

    export default class List extends wepy.component {

        data = {
            list: []
        };

        events = {
            'index-broadcast': ($event, ...args) => {
                console.log(`${this.name} receive ${$event.name} from ${$event.source.name}`);
            }
        };

        methods = {
            tap () {
                //this.num = this.num + 1;
                console.log(this.name + ' tap');
            }
        };

        onLoad () {

        };
    }
</script>
