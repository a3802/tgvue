<!--
 * @Author: a3802 253092329@qq.com
 * @Date: 2023-07-25 21:05:10
 * @LastEditors: a3802 253092329@qq.com
 * @LastEditTime: 2024-04-24 04:35:32
 * @FilePath: \tgvue\src\views\home\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!--
 * @Author: a3802 253092329@qq.com
 * @Date: 2023-07-24 20:06:37
 * @LastEditors: a3802 253092329@qq.com
 * @LastEditTime: 2023-07-30 18:09:48
 * @FilePath: \tgvue\src\views\home\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div id="toTop" class="saveMoney_pay">
        <div class="blind_box_pay_header" style="justify-content: center; align-items: flex-start;">
            <div style="display: flex;">
                <div>
                    <p class="lock_message1 lock_message1-amend"></p>
                    <p class="lock_message1"
                        style="color: #fd2525; font-size: 0.54rem; font-weight: bolder; text-align: center;">
                        <!-- 享受百元话费优惠券包！ -->
                    </p>
                    <van-count-down millisecond :time="time" format="mm:ss:SS" class="lock_message2">
                        <!-- <template v-slot="timeData">
                            支付剩余时间
                            <span class="timeout_second timeout block">{{ current.minutes }}</span>
                            <span class="colon"> : </span>
                            <span class="timeout_second timeout block">{{ current.seconds }}</span>
                            <span class="colon"> : </span>
                            <span class="timeout_second timeout block">{{ current.milliseconds }}</span>
                        </template> -->
                    </van-count-down>
                </div>
            </div>
        </div>
        <div class="pay_phone_money">
            <van-form @submit="onSubmit">
                <van-cell-group>
                    <van-field v-model="mobile" type="number" name="telphone" placeholder="请输入手机号"
                        class="pay_phone_number" />
                    <van-image width="0.34rem" height="0.38rem" :src="require('../../assets/contact.png')"
                        class="change_phone_number" />
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
                                <img src="https://image.hrzhuolin.com/tggy/Icon/qy/touixang2.png" draggable="false"><span>186****8206 用户购买100元话费券已到账</span></van-swipe-item>
                            <van-swipe-item>
                                <img src="https://image.hrzhuolin.com/tggy/Icon/qy/touixang3.png" draggable="false"><span>159****0502 用户购买100元话费券已到账</span></van-swipe-item>
                            <van-swipe-item>
                                <img src="https://image.hrzhuolin.com/tggy/Icon/qy/touixang4.png" draggable="false"><span>150****6044 用户购买100元话费券已到账</span></van-swipe-item>
                            <van-swipe-item>
                                <img src="https://image.hrzhuolin.com/tggy/Icon/qy/touixang5.png" draggable="false"><span>176****9298 用户购买100元话费券已到账</span></van-swipe-item>
                            <van-swipe-item>
                                <img src="https://image.hrzhuolin.com/tggy/Icon/qy/touixang6.png" draggable="false"><span>151****1820 用户购买100元话费券已到账</span></van-swipe-item> 
                            <van-swipe-item>
                                <img src="https://image.hrzhuolin.com/tggy/Icon/qy/touixang7.png" draggable="false"><span>138****3134 用户购买100元话费券已到账</span></van-swipe-item>
                            <van-swipe-item>
                                <img src="https://image.hrzhuolin.com/tggy/Icon/qy/touixang8.png" draggable="false"><span>132****4138 用户购买100元话费券已到账</span></van-swipe-item>                                                  
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
                        <div class="payLeft"><img src="../../assets/weixin.png" alt="" class="payIcon">
                            <div class="payName">微信</div>
                            <div class="payDesc">首单随机立减，最高至免单</div>
                        </div><img src="../../assets/checked.png" alt="" class="check">
                    </div>
                </div>

                <div class="checkboxItem">
                    <div class="paymentTitle"><span>实际支付金额:</span></div>
                    <div class="checkboxItemLeft"><span class="paymentTitle" style="color: rgb(38, 131, 255); font-weight:700;">49.9</span><span class="paymentDetails">元</span></div>
                </div>
                <div class="checkboxItem">
                    <div class="paymentTitle"><span>实际到账花费卷:</span></div>
                    <div class="checkboxItemLeft"><span class="paymentTitle" style="color: rgb(38, 131, 255); font-weight:700;">100</span><span class="paymentDetails">元</span></div>
                </div>

                <div class="pay_phone_number_button">
                    <van-button round block native-type="submit" class="pay_button" style="height: 0;">
                        立即充值
                    </van-button>
                    <div class="pay_phone_number_tips">节省50.1元</div>
                </div>
                <!---->
            </van-form>
        </div>
        <div class="rightInfo">
            <!-- <a href="/cqy6/qy_refund?cid=0">极速退款</a> -->
            <router-link to="/rule" class="nav-item" active-class="nav-color">
                规则
            </router-link>
            <a href="https://tb.53kf.com/code/client/818133c55cba154d3d56d99366e4b4475/1">客服</a>
            <!-- <a href="https://kefu.xianshangzixun.com/web/im?cptid=d4645200bee7">客服</a> -->
        </div>
        <div class="model2">
            <div class="model2-title">话费优惠券券包说明</div>
            <div class="tips">
                <p>1.100元话费每个月可领取10元话费,需要在每个周期(默认为月)进行手动兑换,举例:在1月5号购买成功,1月5日至2月4日为第一个兑换间期,2月5日至3月4日为第二个领取周期,以此类推;</p>
                <p>2.每个周期内可随时兑换话费,若某周期未兑换,则视为主动放弃该次领取资格,后续不做补发;</p>
                <p>3.兑换话费时需输入抢购时的手机号,即可充值到账(一般1~10分钟内充值成功);</p>
                <p>4.注:部分携号转网号码可能导致充值不成功!</p>
                <p>5.用户下载"口袋折扣APP"可根据注册手机号,领取100元话费券包,其中包括10张5块话费立减券(有效期1年)和5张10块话费立减券</p>
                <p>6.本公司拥有对上述条款做最终解释的权利:</p>
            </div>
            <!---->
        </div>
        <div  class="toast tos" style="display: none;">
            <div></div>
        </div>

    </div>


</template>

<script>
import { reactive, toRefs, ref, onMounted } from 'vue';
import { NoticeBar } from 'vant';
import { Toast, Dialog } from 'vant';
// import 'vant/es/dialog/style';
import * as Verify from '../../api/verify';
import * as Index from '../../api/index';
// 表单字段元素
export default {

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

                // categoryId: 10072
            }

        });

        // 取url中的参数值
        const getQuery = (name) => {
            let geturl = window.location.href
            let getqyinfo = geturl.split('?')[1]
            let params = new URLSearchParams('?' + getqyinfo);
            return params.get(name);
        };


        var isShow = sessionStorage.getItem("isShow");
        var channel = sessionStorage.getItem("channel");
        var userkey = getQuery("userkey");
        var plid = getQuery("plid");
        var a_oId = getQuery("a_oId");
        var bxm_id = getQuery("bxm_id");
        var qcjParamStr = getQuery("qcjParamStr");
        var landingid = getQuery("landingid");

        onMounted(() => {

            if (isShow == 'true') {
                var order_sn = sessionStorage.getItem("order_sn");
                console.log(order_sn);
                form.form.order_sn = order_sn;
                form.form.channel = channel;
                form.form.userkey = userkey;
                form.form.plid = plid;
                form.form.a_oId = a_oId;
                form.form.bxm_id = bxm_id;
                form.form.qcjParamStr = qcjParamStr;
                form.form.landingid = landingid;
                Dialog.confirm({
                    title: '确认支付',
                    message: '请确认是否完成支付',
                    confirmButtonText: '已支付',
                    width: '300px',
                }).then(() => { 
                    sessionStorage.setItem("isShow", false);
                    Index.callOrder(form).
                        then(result => {
                            console.log(result);
                            if (result.status == 200) {


                                window.location.href = 'https://tgqy.yueyueyouqian.cn/takecharge.html#/takecust?sn='+order_sn+'&channel='+channel;
                            } else {

                                console.log(order_sn);
                                console.log(channel);
                                Toast('支付失败');
                            }
                        }).catch(err => {
                            Toast('支付失败');

                        })

                }).catch(() => {
                    sessionStorage.setItem("isShow", false);
                    Index.callOrder(form).
                        then(result => {
                            console.log(result);
                            if (result.status == 200) {
                                window.location.href = 'https://tgqy.yueyueyouqian.cn/takecharge.html#/takecust?sn='+order_sn+'&channel='+channel;
                            } else {

                                Toast('支付失败');
                            }
                        }).catch(err => {

                            Toast('支付失败');

                        })
                });
            }
        });


        const mobile = ref('');
        const onSubmit = (value) => {
            console.log(value);
            if (validteData(value.telphone)) {
                let res = submitBuy(value.telphone)
                if (res.status == 500) Toast(res.message);
            }
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
            return true
        };


        //提交数据
        const submitBuy = (str) => {
            form.form.mobile = str;
            form.form.channel = getQuery('channel');
            form.form.userkey = userkey;
            form.form.plid = plid;
            form.form.a_oId = a_oId;
            form.form.bxm_id = bxm_id;
            form.form.qcjParamStr = qcjParamStr;
            form.form.landingid = landingid;
            Index.register(form).
                then(result => {
                    if (result.status == 500) {

                        Toast(result.message)

                    } else {

                        sessionStorage.setItem("isShow", true);
                        sessionStorage.setItem("channel", form.form.channel);
                        console.log(result);
                        isShow = sessionStorage.getItem("isShow");
                        sessionStorage.setItem('order_sn', result.data.data.order_sn);
                        window.location.href = 'https://tgqy.yueyueyouqian.cn/hpay.html?url=' + encodeURIComponent(result.data.data.payment);
                    }


                }).catch(err => {
                    console.log(err);
                })
        };


        return {
            ...toRefs(form),
            onSubmit,
            validteData,
            submitBuy,
            mobile,
            isShow,
            getQuery,
            channel,
            a_oId,
            userkey,
            plid,
            bxm_id,
            qcjParamStr,
            landingid
            // show
            // mode
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
</style>
<style>
.van-dialog {
    font-size: 22px !important;
    height: 2.2rem !important;

}

.van-dialog__header {
    font-size: 0.35rem
}

.van-dialog__message {
    font-size: 0.35rem;
    display: flex;
    flex-direction: column;
    line-height: 0.85rem
}

.van-dialog__content {
    height: 1.1rem
}

.van-button__content {
    height: unset;
}

.van-dialog__cancel,
.van-dialog__confirm {
    font-size: 0.4rem;
}

.van-toast__text {
    font-size: 46px;
    line-height: 46px;
}
</style>

