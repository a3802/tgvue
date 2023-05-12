<template>
    <div>
        <div id="toTop" class="saveMoney_pay">
            <div class="blind_box_pay_header" style="justify-content: center; align-items: flex-start;">
                <div style="display: flex;">
                    <div>
                        <p class="lock_message1 lock_message1-amend"></p>
                        <p class="lock_message1"
                            style="color: white; font-size: 0.54rem; font-weight: bolder; text-align: center;">享受百元话费优惠券包！
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
