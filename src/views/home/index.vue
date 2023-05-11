<template>
    <div>
        <div id="toTop" class="saveMoney_pay">
            <div class="blind_box_pay_header" style="justify-content: center; align-items: flex-start;">
                <div style="display: flex;">
                    <div>
                        <p class="lock_message1 lock_message1-amend"></p>
                        <p class="lock_message1"
                            style="color: white; font-size: 0.54rem; font-weight: bolder; text-align: center;">锁定百元话费优惠券包！
                        </p>
                        <p class="lock_message2">支付剩余时间 <span class="timeout_minutes timeout"
                                style="border-radius: 2px; display: inline-block; font-weight: 500; background: linear-gradient(0deg, rgb(253, 242, 183) 0%, rgb(255, 255, 255) 100%);">05</span>
                            :
                            <span class="timeout_second timeout"
                                style="border-radius: 2px; display: inline-block; font-weight: 500; background: linear-gradient(0deg, rgb(253, 242, 183) 0%, rgb(255, 255, 255) 100%);">38</span>
                            : <span class="timeout_second timeout"
                                style="border-radius: 2px; display: inline-block; font-weight: 500; background: linear-gradient(0deg, rgb(253, 242, 183) 0%, rgb(255, 255, 255) 100%);">03</span>
                        </p>
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
                    <div>&nbsp;待节省金额&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: rgb(30, 82, 253);">70.1元</span></div>
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
                    <div class="pay_title" style="line-height: 0.5rem;">话费券包组成</div><img src="../../assets/coupon.jpg"
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
            <div class="rightInfo"><a href="/cqy6/qy_refund?cid=0">极速退款</a><a
                    href="http://okc2q.fujianyuanaic.cn/page/rule29.html">规则</a><a
                    href="https://kefu.xianshangzixun.com/web/im?cptid=d4645200bee7">客服</a></div>
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

<style lang="less" scoped>
.tos {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, .7);
    color: #fff;
    padding: 8px 10px;
    font-size: 16px
}

.saveMoney_pay {
    background: url(data:image/jpeg;base64,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) no-repeat top;
    background-color: #f7f9f9;
    background-size: 110% auto;
    overflow: hidden
}

.blind_box_pay_header {
    width: 100vw;
    font-size: 19px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 15px;
    box-sizing: border-box
}

.blind_box_pay_header img {
    width: 70px;
    margin-right: 8px
}

.timeout {
    width: .6rem;
    height: .4rem;
    line-height: .4rem;
    font-size: .3rem;
    text-align: center
}

.timeout_minutes,
.timeout_second {
    color: #0336fe
}

.lock_message1 {
    margin: 0;
    color: #000;
    font-size: .36rem;
    font-weight: 700;
    text-align: center;
    letter-spacing: .06rem
}

.lock_message1-amend {
    font-size: .2rem;
    font-weight: 400;
    color: #fff;
    display: block;
    text-align: center;
    padding-top: 0;
    margin-bottom: .1rem
}

.lock_message2 {
    color: #fff;
    text-align: center;
    font-size: .28rem;
    line-height: .28rem;
    margin: .15rem 0 0 0;
    font-weight: 400
}

.pay_title {
    color: #000;
    font-weight: 700;
    font-size: .3rem;
    line-height: .8rem
}

.pay_phone_money {
    position: relative;
    top: -.35rem;
    margin: .4rem .16rem 0;
    background: #fff;
    border-radius: .2rem;
    padding: .3rem .28rem
}

.pay_phone_money_item {
    display: flex;
    justify-content: space-between;
    font-size: 18px
}

.type_title {
    font-size: .38rem;
    background: #f6fcff;
    border-radius: 3px;
    font-weight: 700;
    color: #555;
    margin: .33rem 0 .15rem
}

.pay_phone_money_price {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin: 17px 0 5px;
    align-items: flex-start;
    flex-wrap: wrap
}

.pay_phone_money_price_item {
    width: calc(33% - .16rem);
    height: 1.62rem;
    background: #f1f9fe;
    border-radius: .2rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    color: #050505;
    margin-bottom: .3rem
}

.pay_phone_money_price_item .orign_price p {
    font-size: .6rem;
    text-align: center;
    color: #050505;
    font-weight: 700;
    margin-top: .16rem
}

.pay_phone_money_price_item .orign_price p :after {
    content: "å…ƒ";
    font-size: .3rem
}

.type_active {
    background: #0e82ff;
    color: #fff;
    position: relative;
    overflow: hidden
}

.pay_phone_money_price_item.type_active {
    background: #0e82ff
}

.pay_phone_money_price_item.type_active .orign_price p {
    color: #fff
}

.pay_phone_money_price_item .price {
    font-size: .2rem;
    line-height: 19px;
    color: #fff;
    margin-top: .18rem
}

.choose_price_item .right_bottom_img,
.choose_price_item .top_img {
    display: block !important
}

.pay_phone_number {
    display: flex;
    position: relative;
    margin-top: .2rem;
    padding-bottom: .08rem;
    border-bottom: .02rem solid hsla(0, 0%, 45%, .15)
}

.pay_phone_number input {
    display: flex;
    border: 0;
    width: 100%;
    height: .5rem;
    font-size: .46rem;
    color: #000;
    font-weight: 700
}

.change_phone_number {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    font-size: 15px
}

.pay_phone_number_button {
    animation: myanimation-148daba7 1s infinite;
    font-weight: 700;
    line-height: 1;
    background: linear-gradient(90deg, #279eff, #2787ff);
    color: #fff;
    text-align: center;
    border-radius: 20rem;
    padding: 16px 0;
    font-size: .4rem;
    width: 90%;
    margin: 0 auto;
    margin-top: .2rem;
    cursor: pointer;
    letter-spacing: .1rem
}

.pay_phone_number_tips {
    background: red;
    color: #fff;
    border-radius: .5rem .5rem .5rem 0;
    position: absolute;
    right: 0;
    top: -.2rem;
    font-size: .32rem;
    letter-spacing: 0;
    padding: .1rem .1rem
}

@keyframes myanimation-148daba7 {
    0% {
        transform: scale(1)
    }

    50% {
        transform: scale(1.1)
    }

    to {
        transform: scale(1)
    }
}

.read_message_xiaoxiang_area input {
    margin-right: 5px
}

.read_message_xiaoxiang_area span {
    color: #ffd39f
}

.read_message_xiaoxiang_area a {
    color: #9c3fef
}

.blind_box_out img,
.blind_box_refuse img {
    margin: 0 auto;
    margin-bottom: 2px;
    width: 60%
}

.rightInfo {
    position: fixed;
    right: 0;
    top: .2rem
}

.rightInfo a {
    background: rgba(0, 0, 0, .5);
    border-radius: 5vw 0 0 5vw;
    height: .5rem;
    color: #fff;
    line-height: .5rem;
    text-align: center;
    font-size: .2rem;
    cursor: pointer;
    min-width: .84rem;
    display: block;
    margin-top: .4rem
}

.payRow {
    padding: .34rem 0 .26rem 0
}

.payType {
    margin-top: .4rem;
    display: flex;
    align-items: center;
    justify-content: space-between
}

.payLeft {
    flex: 1;
    display: flex;
    align-items: center
}

.payIcon {
    width: .4rem;
    height: .42rem;
    margin-right: .27rem
}

.payName {
    font-size: .3rem;
    color: #2e2e2d
}

.payDesc {
    margin-left: .24rem;
    height: .4rem;
    border: .02rem solid red;
    border-radius: .02rem;
    padding: 0 .16rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .24rem;
    font-weight: 500;
    color: red
}

.check {
    width: .42rem;
    height: .42rem
}

.tip-01 {
    display: flex;
    font-size: .25rem;
    color: #aaa
}

.tip-01 img {
    width: .3rem;
    height: .34rem;
    margin-right: .2rem
}

.tip-02 {
    font-size: .32rem;
    color: #353535;
    margin-bottom: .2rem
}

.tip-02>p {
    padding: .1rem 0
}

.tip-02>p>.blue {
    color: #2787ff;
    font-weight: 700
}

.model2 {
    position: relative;
    margin: 0 .16rem 2rem .4rem;
    background: #fff;
    border-radius: .2rem;
    padding: .3rem .18rem .44rem
}

.model2-title {
    font-size: .3rem;
    text-align: center;
    font-weight: 700;
    color: #000
}

.tips {
    margin: .3rem 0;
    padding: .3rem .22rem .5rem .22rem;
    background: #f8f8f8;
    border-radius: .1rem;
    font-size: .26rem;
    color: #717171;
    line-height: .44rem
}

.bot-text {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .24rem;
    color: #717171
}

* {
    margin: 0;
    padding: 0
}

.textphone {
    height: .64rem;
    line-height: .64rem;
    width: 100%;
    border: none;
    font-size: .5rem;
    font-weight: 500;
    color: #676568
}

.pay-btn-tips-content {
    position: absolute;
    height: .3rem;
    line-height: .3rem;
    padding: 0 .1rem;
    background: #f0440f;
    color: #fff;
    font-size: .12rem;
    border-radius: .1rem .1rem .1rem 0;
    top: -.1rem;
    right: 3%
}

.xieyi {
    font-size: .26rem;
    margin-top: .4rem;
    text-align: center
}

.xieyi a,
.xieyi a :hover {
    color: #4f82ee
}
</style>