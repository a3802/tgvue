<template>
    <div>
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
                <div class="pay_phone_number"><input type="tel" maxlength="11" pattern="[0-9]*" placeholder="请输入手机号"
                        id="textphone" class="textphone">
                    <div class="change_phone_number"><img
                            src="data:image/png;base64,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"
                            alt="" style="width: 0.34rem; height: 0.38rem;"></div>
                </div>
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
                        <div class="payLeft"><img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABHNCSVQICAgIfAhkiAAABWxJREFUaEPlW01WG0cQriEvNrs4Jwg+gfHGQavIJ4h9gsAJAicwOYHJCSKfIOgEFiuJbCxOEOUEgZ2zMJPv62bQaNQ/1ZppSYZ+bx42U1NdX1d1dVV1UYhrfJJn8p/8gld9PPt49px02/fLGUSaSiHn8kSG8lKumyIWSzJfyjsp5Ri/f7Z9eJIkugbwM/lRfqt/NQdstfoHXr5JYrv9xAN5KieVtueAJ/LnAwRbqWMgB3LE/1jAYznFv95tv7JaSXgC0GeFWFP++wHs2dhqXMO0nxfQ7iG0y7378EcpR4VM4MJFfn74aA3CIQHTnPceCeAZAZetwZbyD3iM8MywPa7BcVrjycWsnj7e/9B6vhYMVgdMkDzYS2yJHoBqB53kZ5z1hQluXmg/64ouHXApF7JjIhju/XbjL4StX8CrkJ/aMdJ/nQL4BmxPeZbp2SspL6HxWwM8u7lrAV9Bq4fyamFvKtEoyWw8MAB11hNDA/gKB3bflXkooaSRjQG6MJlalhEDvF6wFcSMoEOAb+CB94MeeAJPW8h3kPNK5cSqPLuA+d7C+fXMUeYeY7zL4Mz8gEvkkT04Kd9YjtBMcB60w4nxAfOjqJC33oUa4+wuDD0XtLPhBswztheIvqwwjNDqYwbAzwMaY9DxceE9j7ieqar4tNx5FufTcFhb1jT/bUh5BcAsB/mETwds55l1qWU34KfyfdQrNx0LMhFoaxC0vea+LOV1cB+TWccObBlwzMzqiJha2jh5FBW8+m7+zUAVkjIoKU01ppPhAhx2Vp1M22BCn7CD8LI09bSsVdLNAh7DYdnSUh9gmYyc4xnhyJo6tU96WzrmdyvF38uAQ0dFV9q1zohmSqAX+Hmq3hLzrcGtRC9Oq1AfXS4Nx51PG+DMkG4BtoSo30DYtvF5Ygy+XpO2YD8B7AfZRZTmuBlYeS0Z9VHjEW27AH+AedH7djss2I8AO8zCn9LaOUYh0K5zOBwxrbIM1uyoWUZW3S9mXSbrCBcjutp7X2gZDwhSgLPQLwC6Cw10acY+GQIXC77QcoQw8XUKJi+tjbup3bdeT1z32oKj6QC0rrFIdwa6E++8zUTljjCULXWjZetMDoNxtqV5XxPeHctPTDb26z1dONtyXjCE8uEZKh0vW5vgBNoVeOVQ6pgDsCfxiFU8/OaltXfWvWPJiC3dMspieHmBvf7GudAWBL0wc+ohFjF8tetIPGKACev+qlGL8Z6u8pgHd7eUyQxafuBwXhrAFnTtUlkthgVM5+LPk9XMViB0XBRqAXO2KTKao6RQ0Ab7jJP5c/3DcSanAKbA8bpVHdZXbNIWRomaVco9UhU7x5xWLt2v6LQqcZZrVpcomDNpZ3WReey3KNc2I6mJuU08jpZ/coCemLrbQjdSiknPzdkCPQWzPY+cLK9WPVLcv/EjpGvAns4GPWCasy3DhID6xd6B7tvmvtpFqZIVh0K0gKktPj6NakTpLj6PzdYMQWv0WsCxKbTv07y8luviyRBs0lk3YHr6fCUkRUfS+gFbbRwj+vp9FQV6v1GA5bebAsy5zxGuHrXOxsgpoZNwk4Apqu14fQJtt6mEKLW7aQ03rZM3/yzCs+41c5qurZ68wLOPZ3h/zLlvM50sNq3h0DauBy+k6zuIB3CCvBqaod9s8e7Zw3mbAet9WoFgqMSNZ7384wU8Nt1z2duF9NJnpMT9FTX8yJpLEzxcxrVfD2vTPpyhrWA90ifPcoNzf+8R/glAtVAd91Ikr3/OD3hbeXentfhnPJ9Ng2e2tr+cmLy8G1ezy3+oZeNSXn2ob9U3AiQ+KTsJz5rNdcuAyWjexM0OGoZxX8c5bftEpqZpfRePIz7/H3se5zwlO2nUAAAAAElFTkSuQmCC"
                                alt="" class="payIcon">
                            <div class="payName">微信</div>
                            <div class="payDesc">首单随机立减，最高至免单</div>
                        </div><img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAANWSURBVHja5JltT9NQFIDPubQE+cZ/0S8YQEREHQGFSGBMCDDjf1IhRHGAggwcEAFlIgIG+CMGY2Ki9P3au65lZO16u7WjiSe5SVlud5+d13sOAlQp6fQzSgiAYVCO3QQk6Q/Mzb3Gas8L9GIylaLNTc1Qi1BKYXr6BUYCOjj4mLa0tECYomkazM7OYGig6fRTpoTI5PzcgExmGmsCnZxMR4h42YdnZp5jVaATE1N1giyiEjR99yUGAh0fn6wrpC2qqppu4J4ZSFwgmYiiCKnUE9fzhdI/xsbGzcAx4CqFkIbKpk8mp8wErkEchBWRTOYVupoeUS0k4zgsNBFHR0dpmemZX/CVwro6QbmPanr9/HJh/o1j0uGRJK2UyllFXF5+hw42NbUZ9dJU/RKkBZ3BSu8Ignih0aGhEfOzaM0uNCAsLi64qo73bMGKsuhMz+jm3y66QrLYOJcUPo/VI4Q0IxSWltwhWTrkgUwmrQIg0IhAFUWBXG4VvYJEkn5zfo9qmZ5Xo6vZ5cKh/Q8HfZ2K1eyN9TVXyLv3H9EgWUbRLFDCE7E2pA2M4L2X/XAvyIGBYdokYqBsQYr5lLBAqrRkWS47MJt9j5quue7Pra24a7InQRVFAr/zylbx7kH8yllpLisVpjXd0J197DmXy7pCJhL9VBSE6kpqsWISlscqL8Pz6rW58QFl+a/z7LbnQaKP+p9RYdl5lCfqz85+FUy39XG9DGZnZ9uzBvb29lNN02vuWjk1Sp3q0dHRzV3CephPqhrUpE3mUrpiB5PO7dhiowBd3fcoD6QeNGg8lm0xQoRrgV5kzt3W3ukJe8f8IaqmhQJZ2qeTrc2VwFMLUWyE2109ZbCd5meh3msxpEvJrc7LPssCM8x7WP7TRaAW0n5+dxvj0oY4eVnXvbpQBBZYcZGve5/dm7sv+fholWCD/6Sk9WbHlXZ5aF55vu3n0XdSQq+4G3WD9Jw9sTypqvX316PDPeRrnh1H3kUKNDaQvvPRdlOzkqxG7JMA34/2axvk2nL9RislhEQwYzLg5PiAi4G7fLa1dVFZkSGUObn5HcecgIFBS5uzn2c/AAP6MEs7LKOcnBxU9S8crFU5zC3QmXiwJ2pBUWvcbZgd5+npIcL/Iv8EGACnACbDTv2DQwAAAABJRU5ErkJggg=="
                            alt="" class="check">
                    </div>
                </div>
                <!---->
                <div class="pay_phone_number_button"> 立即充值
                    <div class="pay_phone_number_tips">节省70.1元</div>
                </div>
                <!---->
            </div>
            <div class="rightInfo">
                <a href="/cqy6/qy_refund?cid=0">极速退款</a>
                <router-link to="/rule" class="nav-item" active-class="nav-color">
                    <van-icon name="coupon-o" size="30" />
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
    </div>
</template>

<script>
import { useCountDown } from '@vant/use';
export default {
    setup() {
        const countDown = useCountDown({
            time: 15 * 60 * 1000,
            millisecond: true,
        });
        countDown.start();

        const inputChange = (value, detail) => {
            store.state.cartList.map((item) => {
                if (item.id === detail.name) {
                    item.num = value;
                }
            })
        }

        return {
            current: countDown.current,
            inputChange
        };
    },

}
</script>
<style>
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
</style>

