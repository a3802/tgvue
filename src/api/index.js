import axios from './request'

/**手机号提交 */
export const alldata = (data) => {
    return axios({
        url: '/article/data',
        method: 'post',
        data
    })
}

export default { alldata }