<!--
 * @Author: a3802 253092329@qq.com
 * @Date: 2024-05-30 02:39:17
 * @LastEditors: a3802 253092329@qq.com
 * @LastEditTime: 2024-06-26 15:40:01
 * @FilePath: \tgvue\src\views\home\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div id="toTop" class="saveMoney_pay">
        <div class="pay_phone_money">
            <van-form @submit="onSubmit">
                <van-cell-group>
                    <van-field v-model="mobile" type="number" name="telphone" placeholder="请输入手机号"
                        class="pay_phone_number" />
                    <!-- <van-image width="0.34rem" height="0.38rem" :src="require('../../assets/contact.png')"
                        class="change_phone_number" /> -->
                </van-cell-group>


                <div class="pay_phone_money_item type_title" style="font-weight: 600;">
                    <div>&nbsp;待节省金额&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #fd2525;">50.1元</span></div>
                </div>
                <div class="pay_phone_money_price">
                    <div class="pay_phone_money_price_item">
                        <div class="orign_price">
                            <p>20</p>
                            <span>元</span> 
                        </div>
                    </div>
                    <div class="pay_phone_money_price_item type_active">
                        <div class="orign_price">
                               <p>100</p>
                               <span class="active_span">元</span> 
                            <div class="price" style="margin-top: 0px;">实付49.9元</div>
                        </div>
                    </div>
                    <div class="pay_phone_money_price_item">
                        <div class="orign_price">
                            <p>50</p>
                            <span>元</span> 
                        </div>
                    </div>

                    <van-notice-bar left-icon="" :scrollable="false">
                        <van-swipe
                            vertical
                            class="notice-swipe"
                            :autoplay="900"
                            :show-indicators="false"
                        >
                            <van-swipe-item>
                                <img src="https://image.hrzhuolin.com/tggy/Icon/qy/touixang1.png" draggable="false"><span>158****4634 用户购买100元话费券已到账</span>
                            </van-swipe-item>
                            <van-swipe-item>
                                <img src="https://image.hrzhuolin.com/tggy/Icon/qy/touixang2.png" draggable="false"><span>183****8106 用户购买100元话费券已到账</span></van-swipe-item>
                            <van-swipe-item>
                                <img src="https://image.hrzhuolin.com/tggy/Icon/qy/touixang3.png" draggable="false"><span>159****0702 用户购买100元话费券已到账</span></van-swipe-item>
                            <van-swipe-item>
                                <img src="https://image.hrzhuolin.com/tggy/Icon/qy/touixang4.png" draggable="false"><span>151****2044 用户购买100元话费券已到账</span></van-swipe-item>
                            <van-swipe-item>
                                <img src="https://image.hrzhuolin.com/tggy/Icon/qy/touixang5.png" draggable="false"><span>176****7298 用户购买100元话费券已到账</span></van-swipe-item>
                            <van-swipe-item>
                                <img src="https://image.hrzhuolin.com/tggy/Icon/qy/touixang6.png" draggable="false"><span>153****7820 用户购买100元话费券已到账</span></van-swipe-item> 
                            <van-swipe-item>
                                <img src="https://image.hrzhuolin.com/tggy/Icon/qy/touixang7.png" draggable="false"><span>138****9134 用户购买100元话费券已到账</span></van-swipe-item>
                            <van-swipe-item>
                                <img src="https://image.hrzhuolin.com/tggy/Icon/qy/touixang8.png" draggable="false"><span>133****2138 用户购买100元话费券已到账</span></van-swipe-item>                                                  
                        </van-swipe>
                    </van-notice-bar>
                    <van-notice-bar left-icon="volume-o" :scrollable="false" class="notice-bar-stop">
                        <van-swipe  class="notice-swipe" width="100%">活动名额有限，如付款失败代表名额已满！</van-swipe>
                    </van-notice-bar>
                </div>



                <!---->
                <!-- <div class="payRow" style="padding: 0px;">
                    <div class="pay_title" style="line-height: 0.5rem;">话费券包组成</div><img src="../../assets/coupon4.png"
                        style="width: 100%;">
       
                </div> -->
                <div class="payRow" style="padding-top: 0px;">
                    <div class="pay_title">支付方式</div>
                    <div class="payType">
                        <div class="payLeft"><img src="https://image.hrzhuolin.com/tggy/Icon/qy/wxal.png" alt="" class="payIcon">
                            <div class="payName">微信/支付宝</div>
                            <div class="payDesc">首单随机立减，最高至免单</div>
                        </div><img src="../../assets/checked.png" alt="" class="check">
                    </div>
                </div>

                <div class="checkboxItem">
                    <div class="paymentTitle"><span>实际支付金额:</span></div>
                    <div class="checkboxItemLeft"><span class="paymentTitle" style="color: rgb(38, 131, 255); font-weight:700;">49.9</span><span class="paymentDetails">元</span></div>
                </div>
                <div class="checkboxItem">
                    <div class="paymentTitle"><span>实际到账话费卷:</span></div>
                    <div class="checkboxItemLeft"><span class="paymentTitle" style="color: rgb(38, 131, 255); font-weight:700;">100</span><span class="paymentDetails">元</span></div>
                </div>

                <div class="pay_phone_number_button">
                    <!-- <van-button round block native-type="submit" class="pay_button" style="height: 0;">
                        立即充值
                    </van-button> -->
                    <button type="submit" class="submit_btn">立即充值</button>
                    <!-- <div class="submit_btn"  @click="openModal">立即充值</div> -->

                    <div class="pay_phone_number_tips">节省50.1元</div>
                </div>
                <!---->

                <teleport to="body">
                    <!-- <van-form @submit="onSubmit"> -->
                    <div
                        v-if="showModal"
                        class="modal-overlay"
                        @click.self="closeModal"> <!-- 点击遮罩层关闭模态框 -->
                        <div class="modal-content" @click.stop> <!-- 阻止事件冒泡 -->
                        <div class="modal-header">
                            <h3>重要提示</h3>
                            <button class="close-button" @click="closeModal">❌</button>
                        </div>
                        <div class="modal-body">
                            <p>①. 话费为按月到账，每月免费领取。</p>
                            <p style="color:red;">②. 支付成功之后注意查收短信，点击短信链接即可领取话费。</p>            
                            <p>③. 如需退款可直接联系客服，1个工作日即可退款到账。</p>

                        </div>
                        <div class="modal-footer">
                            <!-- 模态框底部操作按钮，根据需要添加 -->
                            <button  class="confirm-button" type="submit">确认购买</button>
                            <!-- <button type="submit" class="confirm-button" :disabled="isCountdownActive" ref="countdownButton" :style="buttonStyle">{{ isCountdownActive ? '倒计时中...' : '确认购买' }}</button> -->
                        </div>
                        </div>
                    </div>
                    <!-- </van-form> -->
                </teleport> 

            </van-form>
        </div>
        <div class="rightInfo">
            <!-- <a href="/cqy6/qy_refund?cid=0">极速退款</a> -->
            <!-- <router-link to="/rule" class="nav-item" active-class="nav-color">
                规则
            </router-link> -->
            <a id="53kfbtn" href="https://tb.53kf.com/code/client/818133c55cba154d3d56d99366e4b4475/1">在线客服</a>
            <!-- <a href="https://kefu.xianshangzixun.com/web/im?cptid=d4645200bee7">客服</a> -->
        </div>
        <div class="model2">
            <div class="model2-title">话费券包说明</div>
            <div class="tips">
                <p>&nbsp;一.100元话费每个月可领取10元话费,需要在每个周期(默认为月)进行兑换,举例:在1月5号购买成功,1月5日至2月4日为第一个兑换间期,2月5日至3月4日为第二个领取周期,以此类推;</p>
                <p>&nbsp;  领取方式1：办理成功时会收到充值短信,通过短信链接即可充值介意者请慎购！</p>
                <p>&nbsp;  领取方式2：关注【悦众科技服务】微信公众号,根据提示兑换充值介意者请慎购！</p>
                <p>&nbsp;二.每个周期内可随时兑换话费,若某周期未兑换,则视为主动放弃该次领取资格,后续不做补发;</p>
                <p>&nbsp;三.兑换话费时需输入抢购时的手机号,即可充值到账(一般1~10分钟内充值成功);</p>
                <p>&nbsp;四.注:部分携号转网号码可能导致充值不成功!</p>
                <p>&nbsp;五.北京悦众科技有限公司拥有对上述条款做最终解释的权利 客服电话:01013600346</p>
            </div>
        </div>
                    <!-- <van-image width="0.34rem" height="0.38rem" :src="require('../../assets/contact.png')"
                        class="change_phone_number" /> -->
        <div class="model2">
            <div class="model2-title">话费券包</div>
            <div class="tips">
                <van-image src='https://image.hrzhuolin.com/tggy/Icon/qy/bg1.png'/>
                <van-image src='https://image.hrzhuolin.com/tggy/Icon/qy/bg2.png'/>
                <van-image src='https://image.hrzhuolin.com/tggy/Icon/qy/bg3.png'/>
                <van-image src='https://image.hrzhuolin.com/tggy/Icon/qy/bg4.png'/>
                <van-image src='https://image.hrzhuolin.com/tggy/Icon/qy/bg5.png'/>
                <van-image src='https://image.hrzhuolin.com/tggy/Icon/qy/bg6.png'/>
                <van-image src='https://image.hrzhuolin.com/tggy/Icon/qy/bg7.png'/>
                <van-image src='https://image.hrzhuolin.com/tggy/Icon/qy/bg8.png'/>
                <van-image src='https://image.hrzhuolin.com/tggy/Icon/qy/bg9.png'/>
                <van-image src='https://image.hrzhuolin.com/tggy/Icon/qy/bg10.png'/>
                
            </div>
            <!---->
        </div>
        <div  class="toast tos" style="display: none;">
            <div></div>
        </div>

    </div>


   



</template>

<script>
import { reactive, toRefs, ref, computed,onMounted  } from 'vue';
import { NoticeBar } from 'vant';
import { Toast, Loading  } from 'vant';
import { decode } from 'js-base64';
// import 'vant/es/dialog/style';
import * as Verify from '../../api/verify';
import * as Index from '../../api/index';
// 表单字段元素
export default {
 
    components: {
        'van-loading': Loading
    },

    setup() {
 

        const form = reactive({
            form: {
                mobile: '',
                isParty: false,
                partyData: {},
                productId: 310072,
                payType: 20,
                couponId: 0,
                coupon_money: 0,
                mode: 'Coupon',
                order_sn: '',
                channel: '',
                userkey: '',
                plid: '',
                a_oId: '',
                bxm_id: '',
                qcjParamStr: '',
                landingid: ''
            }

        });
 


            const showModal = ref(false);
            // 控制加载画面显示的响应式变量
            const showLoading = ref(false);

            // 显示模态框的方法
            function openModal() {
                showModal.value = true;
                return true;
            }

            // 关闭模态框的方法
            function closeModal() {
                showModal.value = false;
                return false;
            }


        var userkey, plid, a_oId, bxm_id, qcjParamStr, landingid, channel,id_mobile

        // 取url中的参数值
        const getQuery = (name) => {
            let geturl = window.location.href
            console.log()
            let getqyinfo = geturl.split('?')[1]
            let params = new URLSearchParams('?' + getqyinfo);
            return params.get(name);
        };

        const mobile = ref('');
        const submitting = ref(false);
 
        if(getQuery("phone")){
            mobile.value = decode(decodeURIComponent(getQuery("phone")));
        }
        

        getQuery("userkey") ? userkey = getQuery("userkey") : '';
        getQuery("plid") ? plid = getQuery("plid") : '';
        getQuery("a_oId") ? a_oId = getQuery("a_oId") : '';
        getQuery("bxm_id") ? bxm_id = getQuery("bxm_id") : '';
        getQuery("qcjParamStr") ? qcjParamStr = getQuery("qcjParamStr") : '';
        getQuery("landingid") ? landingid = getQuery("landingid") : '';
        getQuery("channel") ? channel = getQuery("channel") : '';
        getQuery("id") ? userkey = getQuery("id") : '';




            const onSubmit = () => {
                if (submitting.value) return; // 如果正在提交，则不执行
                submitting.value = true; // 标记为正在提交
                // showLoading.value = true;
                Toast('..正在申请,请等待..')
                // closeModal();
                if (validteData(mobile.value)) {
                    submitBuy(mobile.value);                       
                }

                setTimeout(() => {
                    submitting.value = false;
                }, 2500); 

            };

            // 验证手机号
            const validteData = (str) => {
                if (Verify.isEmpty(str)) {
                    Toast('请输入手机号');
                    return false
                }
                if (!Verify.isMobile(str)) {
                    Toast('请输入正确格式的手机号')
                    return false
                }

                if(Verify.checkMobileCarrier(str) == 'mobile'){
                    Toast('移动手机暂不支持')
                    return false 
                }
                
                return true
            };


            //提交数据
            const submitBuy = (str) => {

                // submitting.value = true; // 开始提交

                form.form.mobile = str;
                form.form.channel = channel;
                form.form.userkey = userkey;
                form.form.plid = plid;
                form.form.a_oId = a_oId;
                form.form.bxm_id = bxm_id;
                form.form.qcjParamStr = qcjParamStr;
                form.form.landingid = landingid;

                    Index.register(form).
                        then(result => {
                            if (result.status == 500) {

                                console.log(result.message)
                                Toast('网络错误')
                                return false;

                            } else {

                                sessionStorage.setItem('order_sn', result.data.data.order_sn);

                                if(result.data.data.pay_chal == 'sum' || result.data.data.pay_chal == 'jxpay' || result.data.data.pay_chal == 'heepay' || result.data.data.pay_chal == 'wechat_ori' ){

                                    window.location.href = 'https://tgqy.yueyueyouqian.cn/hpay.html?url=' + encodeURIComponent(result.data.data.payment);//正常wx


                                }else if(result.data.data.pay_chal == 'bill9'){

                                    window.location.href = 'https://tgqy.yueyueyouqian.cn/hpay.html?pay_string=' + encodeURIComponent(result.data.data.payment);//wx表单提交支付
                                
                                }else{
                                     window.location.href = 'weixin://app/?appId=wxc494aae6debcd84b&path=page/common/wbeview?url=' + encodeURIComponent(result.data.data.payment);
                                }

                                // submitting.value = false; // 结束提交

                                setTimeout(function(){location.reload();},6500);
                                return true;

                            }

                        }).catch(err => {
                            console.log(err);
                            return false;
                        });
                };


            
            return {
                ...toRefs(form),
                onSubmit,
                validteData,
                submitBuy,
                mobile,
                getQuery,
                channel,
                a_oId,
                userkey,
                plid,
                bxm_id,
                qcjParamStr,
                landingid,
                showModal,
                openModal,
                closeModal,
                showLoading,

            };


    },


}

</script>
<style lang="less" scoped>

.checkboxItem{
    padding-right: 12px;
    height:0.5rem;
    padding-top: 12px;
    padding-bottom: 12px; 
}

/* 自定义对话框内容样式 */
.content {
  padding: 16px;
  font-size: 14px;
  color: #333;
}

.submit_btn {
    background-color: transparent;
    border: none;
    /* 同时去除边框 */
    color: inherit;
    font-size:0.45rem;
}

.paymentTitle {
    font-size: 0.35rem;
    font-family: Microsoft YaHei;
    font-weight: 700;
    color: rgb(108, 108, 108);;
    line-height: 0.36rem;
    margin-right: 0.14rem;
    float:left;
}

.paymentDetails {
    padding-top:0.05rem;
    font-size: 0.2rem;
    font-family: Source Han Sans CN-Regular,Source Han Sans CN;
    font-weight: 400;
    color: rgb(38, 131, 255);
    line-height: 0.36rem;
    display:flex;
}


.noticeError {
    font-size: 28px !important;
    transform: scale(2) !important;
    margin-left: -.6rem !important
}

.van-notice-bar{
    height:0.55rem;
    line-height:0.55rem;
    position: relative;
    width: 80%;
    margin: auto;
    margin-bottom: 4px;
    overflow: hidden;
    background-color: #fff;   
    font-size:0.26rem; 
    color:#ccc
}

.van-swipe-item {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
}

.van-notice-bar img {
    width:0.33rem;
    height:0.33rem;
}
.van-notice-bar span {
    line-height:0.37rem;
    height:0.3rem;
}


.notice-swipe {
    height: 100px;
    line-height: 100px;
    width:100%;
}

.notice-bar-stop {
    width:77%;
    background-color:rgba(255,39,0,.8);
    border-radius: 7px;
    text-align: center;
    color:white;
}

/deep/ .van-hairline--top-bottom:after {
    border-width: 0;
}

.block {
    border-radius: 2px;
    display: inline-block;
    font-weight: 500;
    background: linear-gradient(0deg, rgb(253, 242, 183) 0%, rgb(255, 255, 255) 100%);
}

.nav-item {
    display: flex;
    flex-flow: column;
    align-items: center;
}

/deep/ .van-button__text {
    width: 90%;
}

/deep/ .van-field__control::-webkit-input-placeholder {
    color: #757575
}

.wrapper1 {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.block1 {
    width: 120px;
    height: 120px;
    background-color: #fff;
}



.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 遮罩层半透明 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* 确保模态框在页面最上层 */
}

.modal-content {
  background: white;
  color: black;
  border-radius: 8px;
  width: 90%;
  max-width: 600px; /* 最大宽度，适应不同屏幕尺寸 */
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1001; /* 确保内容层在遮罩层之上 */
  font-size:0.3rem;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-button {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

.modal-body {
  margin-top: 20px;

  p {
    padding:0.5em;
  }
}

.modal-footer {
  /* 模态框操作按钮区域的样式 */
}

/* 省略其他样式，仅展示模态框底部按钮样式 */
.modal-footer {
    display: flex;
    justify-content: center;
    padding: 1em 0em 0.5em 0em;
}

.confirm-button {
  padding: 10px 20px; /* 按钮内边距 */
  border: none; /* 移除边框 */
  border-radius: 5px; /* 按钮圆角 */
  background: linear-gradient(90deg, #0081ff, #2787ff); /* 线性渐变背景 */
  color: white; /* 文字颜色 */
  font-size: .25rem; /* 字体大小 */
  cursor: pointer; /* 鼠标悬停时显示指针手势 */
  transition: background 0.3s ease; /* 平滑的背景颜色过渡效果 */
  width: 50%;
  height: 0.6rem;
}

.confirm-button:hover {
  background: linear-gradient(90deg, #0050b3, #0050b3); /* 鼠标悬浮时的渐变背景 */
}

.tips {
    width: 100%;
    border-radius: 2em;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    box-sizing: border-box;
    background: #fff;
    margin-bottom: 1em;
    padding-bottom: 1em;
    font-size: 0.31rem;
}

.tips  p {
    margin: 0.1rem 0;
    padding: 0;

}


</style>
<style>

.van-toast__text {
    font-size: 46px;
    line-height: 46px;
}
</style>

