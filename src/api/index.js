/*
 * @Author: a3802 253092329@qq.com
 * @Date: 2023-05-25 00:33:21
 * @LastEditors: a3802 253092329@qq.com
 * @LastEditTime: 2023-07-25 22:44:49
 * @FilePath: \tgvue\src\api\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from './request'

/**手机号提交 */
export const alldata = (data) => {
    return axios({
        url: '/article/data',
        method: 'post',
        data
    })
}

export const register = (data) => {
    return axios({
        url: '/equity/qylogin',
        method: 'post',
        data
    })
}

export default { alldata, register }