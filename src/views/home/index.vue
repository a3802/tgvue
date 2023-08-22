<!--
 * @Author: a3802 253092329@qq.com
 * @Date: 2023-07-25 21:05:10
 * @LastEditors: a3802 253092329@qq.com
 * @LastEditTime: 2023-08-23 02:13:28
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
                        享受百元话费优惠券包！
                    </p>
                    <van-count-down millisecond :time="time" format="mm:ss:SS" class="lock_message2">
                        <template v-slot="timeData">
                            支付剩余时间
                            <span class="timeout_second timeout block">{{ current.minutes }}</span>
                            <span class="colon"> : </span>
                            <span class="timeout_second timeout block">{{ current.seconds }}</span>
                            <span class="colon"> : </span>
                            <span class="timeout_second timeout block">{{ current.milliseconds }}</span>
                        </template>
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
                    <div>&nbsp;待节省金额&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #fd2525;">70.1元</span></div>
                </div>
                <div class="pay_phone_money_price">
                    <div class="pay_phone_money_price_item">
                        <div class="orign_price">
                            <p>20</p>
                        </div>
                    </div>
                    <div class="pay_phone_money_price_item type_active">
                        <div class="orign_price">
                            <p>100</p>
                            <div class="price" style="margin-top: 0px;">实付29.9元</div>
                        </div>
                    </div>
                    <div class="pay_phone_money_price_item">
                        <div class="orign_price">
                            <p>50</p>
                        </div>
                    </div>
                </div>
                <!---->
                <div class="payRow" style="padding: 0px;">
                    <div class="pay_title" style="line-height: 0.5rem;">话费券包组成</div><img src="../../assets/coupon4.png"
                        style="width: 100%;">
                    <!---->
                </div>
                <div class="payRow" style="padding-top: 0px;">
                    <div class="pay_title">支付方式</div>
                    <div class="payType">
                        <div class="payLeft"><img src="../../assets/weixin.png" alt="" class="payIcon">
                            <div class="payName">微信</div>
                            <div class="payDesc">首单随机立减，最高至免单</div>
                        </div><img src="../../assets/checked.png" alt="" class="check">
                    </div>
                </div>
                <!---->

                <div class="pay_phone_number_button">
                    <van-button round block native-type="submit" class="pay_button" style="height: 0;">
                        立即充值
                    </van-button>
                    <div class="pay_phone_number_tips">节省70.1元</div>
                </div>
                <!---->
            </van-form>
        </div>
        <div class="rightInfo">
            <a href="/cqy6/qy_refund?cid=0">极速退款</a>
            <router-link to="/rule" class="nav-item" active-class="nav-color">
                规则
            </router-link>
            <a href="https://tb.53kf.com/code/client/818133c55cba154d3d56d99366e4b4475/1">客服</a>
            <!-- <a href="https://kefu.xianshangzixun.com/web/im?cptid=d4645200bee7">客服</a> -->
        </div>
        <div class="model2">
            <div class="model2-title">话费优惠券券包说明</div>
            <div class="tips">
                <p>1、100元话费优惠券包：10张5元券和5张10元券;</p>
                <p>2、下载“APP”查收话费券包;</p>
                <p>3、充值金额门槛:单笔充值满100元可使用1张5元券，单笔充值满200元可使用1张10元券</p>
                <p>4、话费充值中如遇特殊情况请联系客服</p>
                <p>5、29.9非直充话费，以实际优惠金额为准。不满意可7天内无理由退款</p>
            </div>
            <!---->
        </div>
        <div data-v-74a32269="" class="toast tos" style="display: none;">
            <div data-v-74a32269=""></div>
        </div>


    </div>
</template>

<script>
import { reactive, toRefs, ref, onMounted } from 'vue';
import { useCountDown } from '@vant/use';
import { Toast, Dialog } from 'vant';
// import 'vant/es/dialog/style';
import * as Verify from '../../api/verify';
import * as Index from '../../api/index';
// 表单字段元素
export default {

    setup() {

        const countDown = useCountDown({
            time: 15 * 60 * 1000,
            millisecond: true,
        });
        countDown.start();

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
                // categoryId: 10072
            }

        });

        var isShow = sessionStorage.getItem("isShow");

        onMounted(() => {

            if (isShow == 'true') {
                console.log('isc');
                var order_sn = sessionStorage.getItem("order_sn");
                form.form.order_sn = order_sn;
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
                                window.location.href = 'https://tgqy.yueyueyouqian.cn/dw.html';
                            } else {
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
                                window.location.href = 'https://tgqy.yueyueyouqian.cn/dw.html';
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

        // 取url中的参数值
        const getQuery = (name) => {
            let geturl = window.location.href
            let getqyinfo = geturl.split('?')[1]
            let params = new URLSearchParams('?' + getqyinfo);
            return params.get(name);
        };


        //提交数据
        const submitBuy = (str) => {
            form.form.mobile = str;
            console.log(getQuery('channel'));
            form.form.channel = getQuery('channel');
            Index.register(form).
                then(result => {
                    if (result.status == 500) {

                        Toast(result.message)

                    } else {

                        sessionStorage.setItem("isShow", true);
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
            current: countDown.current,
            onSubmit,
            validteData,
            submitBuy,
            mobile,
            isShow,
            getQuery
            // show
            // mode
        };
    },


}
</script>
<style lang="less" scoped>
.noticeError {
    font-size: 28px !important;
    transform: scale(2) !important;
    margin-left: -.6rem !important
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

