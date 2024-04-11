<!--
 * @Author: a3802 253092329@qq.com
 * @Date: 2024-04-11 19:09:51
 * @LastEditors: a3802 253092329@qq.com
 * @LastEditTime: 2024-04-12 03:09:51
 * @FilePath: \tgvue\src\views\takecust\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <van-image width="100%" height="100%" src="https://assetcdn.oss-cn-shanghai.aliyuncs.com/assets/qylqzx-e233fa67.png"/>
    <div class="item_list">
        <div class="title">
           <h6>会员权益</h6>  
        </div>
        <div class="content">
            <ul>
                <li class="list_atr" v-for="(item,index) in arr" v-bind:key="index" @click="handleItemClick(index)">
                    <van-image width="100px" height="100px" src="https://phone-card-cx.oss-cn-beijing.aliyuncs.com/image/20240304/0bf02b20-9c02-4c47-8be5-f80bd58a19d9.png"/>
                    <div>第{{item}}个月10元</div>
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
            <img :src="props.active ? icon1.active : icon1.inactive" />
            </template>            
        </van-tabbar-item>
    </van-tabbar>


    <van-dialog v-mode:show="showPopup" title="标题" show-cancel-button>
        <van-cell-group inset>
            <van-field v-model="tel" type="tel" label="手机号" />
        </van-cell-group>
    </van-dialog>
    
    
</template>
<script>
import { ref } from 'vue';
import { Dialog } from 'vant';

export default {
  setup() {
    const active = ref(0);
    const icon = {
      active: 'https://image.hrzhuolin.com/tggy/Icon/qy/tcoupona.png',
      inactive: 'https://image.hrzhuolin.com/tggy/Icon/qy/tcoupon.png',
    };
    const icon1 = {
      active: 'https://image.hrzhuolin.com/tggy/Icon/qy/tlista.png',
      inactive: 'https://image.hrzhuolin.com/tggy/Icon/qy/tlist.png',
    };

    const tel = ref('');
    const arr = ['一','二','三','四','五','六','七','八','九','十'];
    const showPopup = ref(false)

    const handleItemClick = (value) => {
        console.log(value);
        let showPopup = true

    };

    return {
      icon,
      icon1,
      active,
      tel,
      arr,
      handleItemClick

    };
  }
}



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
    margin:20px;
}
.list_atr>div {
    font-size:24px;
    text-align: center;
}

.van-tabbar-item__icon img {
    height: 0.6rem;
}

.van-tabbar-item__text span {
    font-size: 0.2rem;
}

</style>

<style>
:root {
    --van-tabbar-height: 120px;
}
</style>