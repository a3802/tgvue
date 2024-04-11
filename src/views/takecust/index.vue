<template>
    <van-image width="100%" height="100%" src="https://assetcdn.oss-cn-shanghai.aliyuncs.com/assets/qylqzx-e233fa67.png"/>
    <div class="item_list">
        <div class="title">
           <h6>会员权益</h6>  
        </div>
        <div class="content">
            <ul>
                <li class="list_atr">
                    <van-image width="100px" height="100px" src="https://phone-card-cx.oss-cn-beijing.aliyuncs.com/image/20240304/0bf02b20-9c02-4c47-8be5-f80bd58a19d9.png"/>
                    <div>第一个月10元</div>
                </li>
                <li class="list_atr">
                    <van-image width="100px" height="100px" src="https://phone-card-cx.oss-cn-beijing.aliyuncs.com/image/20240304/0bf02b20-9c02-4c47-8be5-f80bd58a19d9.png"/>
                    <div>第一个月10元</div>
                </li>
                <li class="list_atr">
                    <van-image width="100px" height="100px" src="https://phone-card-cx.oss-cn-beijing.aliyuncs.com/image/20240304/0bf02b20-9c02-4c47-8be5-f80bd58a19d9.png"/>
                    <div>第一个月10元</div>
                </li>                
            </ul>
        </div>
    </div>

    <van-tabbar v-model="active">
        <van-tabbar-item>
            <span>权益领取</span>
            <template #icon="props">
            <img :src="props.active ? icon.active : icon.inactive" />
            </template>
        </van-tabbar-item>
        <van-tabbar-item>
            <span>领取记录</span>
            <template #icon="props">
            <img :src="props.active ? icon.active : icon.inactive" />
            </template>            
        </van-tabbar-item>
    </van-tabbar>
    
    
</template>
<script>
import { ref } from 'vue';

export default {
  setup() {
    const active = ref(0);
    const icon = {
      active: '../../../assets/alist.png',
      inactive: '../../assets/nlist.png',
    };
    return {
      icon,
      active,
    };
  },
};



</script>

<style lang="less" scoped>
h6 {
    display: block;
    font-size: 0.4em;
    margin-block-start: 0.2em;
    margin-block-end: 1em;
    font-weight: bold;
    unicode-bidi: isolate;
}

.item_list {
    padding:0.3em;
}
.list_atr {
    float:left;
    margin-right:20px;
}
.list_atr>div {
    font-size:24px;
    text-align: center;
}

:root {
    --van-tabbar-height: 100px;
}
</style>

<style>
:root {
    --van-tabbar-height: 100px;
}
</style>