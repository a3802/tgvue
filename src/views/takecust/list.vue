<template>
    <ul>
        <van-cell>
                <div class="title_header">
                    <span>编号：</span>
                    <span class="title_sn">HF17126342624532498_1</span>
                    <span class="order_status">成功</span>
                </div>
                <div class="order_message">
                    <van-image  src="https://phone-card-cx.oss-cn-beijing.aliyuncs.com/image/20240304/0bf02b20-9c02-4c47-8be5-f80bd58a19d9.png"/>
                    <div class="message_right">
                        <div class="m_title">
                            <span>名称：</span>
                            <span>第一个月10元</span>
                        </div>
                        <div class="d_title">
                            <span>时间：</span>
                            <span>2024-04-09 11:24:58</span>
                        </div>
                    </div>
                </div>
        </van-cell>
    </ul>




    <van-tabbar v-model="active">
        <van-tabbar-item  replace to="/takecust">
            <span>权益领取</span>
            <template #icon="props">
            <img :src="props.active ? icon.active : icon.inactive" />
            </template>
        </van-tabbar-item>
        <van-tabbar-item replace to="/takecust/list">
            <span>领取记录</span>
            <template #icon="props">
            <img :src="props.active ? icon1.active : icon1.inactive" />
            </template>            
        </van-tabbar-item>
    </van-tabbar>    
</template>
<script>
import { ref,onMounted,reactive, toRefs } from 'vue';
import { Icon, Toast, Dialog } from 'vant';

export default {

    components: {
    'v-dialog': Dialog.Component,
    },  

    setup() {

        const active = ref(1);
        const icon = {
            active: 'https://image.hrzhuolin.com/tggy/Icon/qy/tcoupona.png',
            inactive: 'https://image.hrzhuolin.com/tggy/Icon/qy/tcoupon.png',
        };
        const icon1 = {
            active: 'https://image.hrzhuolin.com/tggy/Icon/qy/tlista.png',
            inactive: 'https://image.hrzhuolin.com/tggy/Icon/qy/tlist.png',
        };

        const list = ['一','二','三','四','五','六','七','八','九','十'];

        return {
            icon,
            icon1,
            active,
            list

        };        
        
    }



}

</script>

<style lang="less" scoped>
.van-tabbar-item__icon img {
    height: 0.6rem;
}

.van-tabbar-item__text span {
    font-size: 0.2rem;
    
}
/deep/ .van-cell__value{
    padding:0.1rem;
    border: 1px solid #ddd;
    margin: 0.1rem;
}

.title_header {
    height:0.3rem;
    font-size:0.3rem;
    margin:0.1rem 0;
    padding: 0.1rem 0;
    border-bottom: 1px solid #ddd;
}

.order_status{
    float:right;
}

.message_right {
    float: left;
    font-size: 0.3rem;
    display: flex;
    /* align-content: stretch; */
    flex-direction: column;
    /* flex-wrap: nowrap; */
    justify-content: center;
    align-items: flex-start;
    height: 2rem;
    padding: 0 0.2rem;    
}

.m_title {
    font-weight: bold;
}
.m_title, .d_title{
    margin:0.3rem 0;
}

/deep/ .van-image {
    float:left;
    width:2rem;
    height:2rem;
}


</style>

<style>
:root {
    --van-tabbar-height: 120px;
    --van-dialog-message-max-height:200px;
    --van-dialog-message-line-height: 200px;
    --van-dialog-message-padding: 200px;
    /* --van-dialog-header-padding-top: 40px; */
    --van-dialog-header-line-height: 30px;
    --van-cell-group-inset-padding: 20px;
    --van-field-label-color: #666
    
}


</style>