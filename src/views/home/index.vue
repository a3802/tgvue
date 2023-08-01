<!--
 * @Author: a3802 253092329@qq.com
 * @Date: 2023-07-25 21:05:10
 * @LastEditors: a3802 253092329@qq.com
 * @LastEditTime: 2023-08-02 02:51:20
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
                    <van-button round block native-type="submit" class="pay_button" style="">
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
            <a href="https://kefu.xianshangzixun.com/web/im?cptid=d4645200bee7">客服</a>
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
import { reactive, toRefs, ref, watch } from 'vue';
import { useCountDown } from '@vant/use';
import { Toast } from 'vant';
import * as Verify from '../../api/verify';
import * as Index from '../../api/index';
import { showConfirmDialog } from 'vant';
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
                mode: 'Coupon'
                // categoryId: 10072
            }

        });

        // const mode = ref('Coupon');
        const mobile = ref('');
        const isShow = ref(false);
        const onSubmit = (value) => {
            console.log(value);
            if (validteData(value.telphone)) {
                submitBuy(value.telphone)
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
            Index.register(form).
                then(result => {
                    isShow.value = true;
                    console.log(result);
                    console.log(isShow.value);
                    setInterval(() => {
                        window.location.href = 'http://tgqy.yueyueyouqian.cn/hpay.html?url=' + encodeURIComponent(result.data.data.payment);
                    }, 1000);

                }).catch(err => {
                    if (err.result) {
                        const errData = err.result.data
                        if (errData.is_created) {
                            // app.navToMyOrder()
                            return false
                        }
                    }

                })
        };

        const onSubmitCallback = (result) => {
            console.log(result);
            isShow = true;
            setInterval(() => {
                window.location.href = 'http://tgqy.yueyueyouqian.cn/hpay.html?url=' + encodeURIComponent(result.data.data.payment);
            }, 1000);

        };

        watch(() => isShow, () => {
            if (isShow.value == true) {
                showConfirmDialog({
                    title: '标题',
                    message: '如果解决方法是丑陋的，那就肯定还有更好的解决方法，只是还没有发现而已。',

                }).then(() => {
                    // on confirm
                }).catch(() => {
                    // on cancel
                });

            }
        });

        return {
            ...toRefs(form),
            current: countDown.current,
            onSubmit,
            validteData,
            submitBuy,
            onSubmitCallback,
            mobile,
            isShow
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
</style>

