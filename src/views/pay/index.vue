<!--
 * @Author: a3802 253092329@qq.com
 * @Date: 2023-07-31 23:10:29
 * @LastEditors: a3802 253092329@qq.com
 * @LastEditTime: 2023-08-04 23:19:26
 * @FilePath: \tgvue\src\views\pay\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <!-- html中，绑定一个事件，例如@click="clear" -->
    <van-button native-type="button" @click="clear" type="default" style="width: 80px; height: 40px" size="normal"
        class="btn_left">Clear</van-button>
</template>
 
<script>
import { Dialog } from 'vant';
export default {
    data() {
        return {
            msg: ''
        }
    },
    methods: {
        clear() {
            Dialog.confirm({
                //  文本内容，支持通过\n换行
                title: "Are you Sure",
                message: "Confirm to clear all information?",
                //  确认按钮文案
                confirmButtonText: "Yes",
                //	取消按钮文案
                cancelButtonText: "No",
                //  确认按钮颜色
                confirmButtonColor: "#07c160",
                //  自定义类名
                className: ["van-dialog"],
            })
                .then(() => {
                    // on confirm

                    setTimeout(() => {
                        Toast("Cleared successfully!");
                    }, 1000);
                })
                .catch(() => {
                    // on cancel
                });

        },
        mounted() {

        }
    }
}
</script>
 
<style>
.btn {
    margin: 20px;
}

.van-dialog {
    font-size: 44px !important;
    padding: 0 !important;
    width: 600px !important;
    height: 500px !important;
}
</style>