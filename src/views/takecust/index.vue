<!--
 * @Author: a3802 253092329@qq.com
 * @Date: 2024-04-11 19:09:51
 * @LastEditors: a3802 253092329@qq.com
 * @LastEditTime: 2024-04-12 04:40:42
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


    <van-dialog  v-model:show="showDialog" title="标题1" show-cancel-button>
      <template v-if="showDialog">
        <!-- 这里是自定义的内容 -->
        <div>
          <p>这是自定义的对话框内容。</p>
          <p>你可以在这里放置任何你需要的组件或 HTML。</p>
          <!-- 如果需要，你也可以在这里引入和使用其他 Vue 组件 -->
        </div>
      </template>
      <template v-else>
                  <p>这ssssssssss框内容。</p>
          <p>你可以在这里放置任何你需要的组件或 HTML。</p>
        <!-- 这里是对话框未显示时的占位内容（可选） -->
      </template>

    </van-dialog>

    
    
</template>
<script>
import { ref,onMounted,reactive, toRefs } from 'vue';

export default {

    //   components: {
    //     [Dialog.name]: Dialog,
    //   },
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

    const arr = ['一','二','三','四','五','六','七','八','九','十'];

    const showDialog  = ref(false);

    console.log(showDialog.value);

    const handleItemClick = (value) => {
        

        console.log(value);

    };
    // 确认按钮的回调
    const onConfirm = () => {
      console.log('点击了确认按钮');
      showDialog.value = false; // 关闭对话框
    };

    // 取消按钮的回调
    const onCancel = () => {
      console.log('点击了取消按钮');
      showDialog.value = false; // 关闭对话框
    };


    return {
      icon,
      icon1,
      active,
      arr,
      handleItemClick,
      showDialog,
      onConfirm,
      onCancel,

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


.wxpDialogContentClass{
  padding: 10px 8px;
  word-wrap: break-word;
  font-size: 14px;
  white-space: pre-wrap;
  color: #646566;
  max-height: 60vh;
  overflow: auto;
  line-height: 20px;
}
 
 
.wxContent{
  display: block;
  max-height: 65vh;
  overflow: auto;
}

</style>

<style>
:root {
    --van-tabbar-height: 120px;
}
</style>