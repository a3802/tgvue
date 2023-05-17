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
                        <template v-slot="">
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
                        :rules="[{ validator, message: '请输入正确手机号' }]" class="pay_phone_number" />
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
                <div class="pay_phone_number_button"> 立即充值
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
import { reactive, toRefs } from 'vue';
import { useCountDown } from '@vant/use';
export default {
    setup() {
        const countDown = useCountDown({
            time: 15 * 60 * 1000,
            millisecond: true,
        });
        countDown.start();

        const data = reactive({
            mobile: '',
        })
        const onSubmit = (values) => {
            console.log('submit', values);
        }

        return {
            ...toRefs(data),
            current: countDown.current,
            onSubmit,
        };
    },

}
</script>
<style lang="less" scoped>
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

/deep/ .van-field__control::-webkit-input-placeholder {
    color: #757575
}
</style>

