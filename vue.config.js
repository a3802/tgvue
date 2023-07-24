/*
 * @Author: a3802 253092329@qq.com
 * @Date: 2023-05-12 22:10:13
 * @LastEditors: a3802 253092329@qq.com
 * @LastEditTime: 2023-07-24 20:11:42
 * @FilePath: \tgvue\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { VantResolver } = require('unplugin-vue-components/resolvers');
const ComponentsPlugin = require('unplugin-vue-components/webpack');

module.exports = {
    lintOnSave: false,
    transpileDependencies: [],
    css: {

        loaderOptions: {

            postcss: {

                plugins: [

                    require('postcss-pxtorem')({ rootValue: 100, propList: ['*'] }),

                ],

            },

        },

    },
    configureWebpack: {
        plugins: [
            ComponentsPlugin({
                resolvers: [VantResolver()],
            }),
        ],
    },


    devServer: {
        port: 8080, // 端口
        proxy: {
            '/api': { //   若请求的前缀不是这个'/api'，那请求就不会走代理服务器
                target: 'http://156.61.146.85:8078', //这里写路径 
                pathRewrite: { '^/api': '' }, //将所有含/api路径的，去掉/api转发给服务器
                ws: true, //用于支持websocket
                changeOrigin: true //用于控制请求头中的host值
            },
        }
    }

};