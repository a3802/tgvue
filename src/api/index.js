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