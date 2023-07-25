/*
 * @Author: a3802 253092329@qq.com
 * @Date: 2023-05-24 22:21:40
 * @LastEditors: a3802 253092329@qq.com
 * @LastEditTime: 2023-07-25 22:51:36
 * @FilePath: \tgvue\src\api\request.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from 'axios'
const baseUrl = 'http://tgqy.yueyueyouqian.cn/api'
class HttpRequest {
    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }

    getInsideConfig() {
        const config = {
            baseUrl: this.baseUrl,
            header: {
                // 设置后端需要的传参类型
                'Content-Type': 'application/json',
                'token': 'your token',
                'X-Requested-With': 'XMLHttpRequest',
            }
        }
        return config
    }

    interceptors(instance) {
        // 添加请求拦截器
        instance.interceptors.request.use(function(config) {
            // 在发送请求之前做些什么
            return config;
        }, function(error) {
            // 对请求错误做些什么
            return Promise.reject(error);
        });

        // 添加响应拦截器
        instance.interceptors.response.use(function(response) {
            // 2xx 范围内的状态码都会触发该函数。
            // 对响应数据做点什么
            const { code, data } = response.data
            if (code == 200) {
                return data
            }

            // return response;
        }, function(error) {
            // 超出 2xx 范围的状态码都会触发该函数。
            // 对响应错误做点什么
            return Promise.reject(error);
        });
    }

    request(options) {
        const instance = axios.create()
        options = {...this.getInsideConfig(), ...options }
        this.interceptors(instance)
        return instance(options)
    }

}

export default new HttpRequest(baseUrl)