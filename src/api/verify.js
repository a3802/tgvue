/**
 * 用户输入内容验证类
 */

// 是否为空
export const isEmpty = (str) => {
    return str.trim() == ''
}

/**
 * 匹配phone
 */
export const isPhone = (str) => {
    const reg = /^((0\d{2,3}-\d{7,8})|(1[3456789]\d{9}))$/
    return reg.test(str)
}

/**
 * 匹配phone
 */
export const isMobile = (str) => {
    const reg = /^(1[3456789]\d{9})$/
    return reg.test(str)
}

/**
 * 匹配Email地址
 */
export const isEmail = (str) => {
    if (str == null || str == "") return false
    var result = str.match(/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)
    if (result == null) return false
    return true
}

/**
 * 判断数值类型，包括整数和浮点数
 */
export const isNumber = (str) => {
    if (isDouble(str) || isInteger(str)) return true
    return false
}

/**
 * 判断是否为正整数(只能输入数字[0-9])
 */
export const isPositiveInteger = (str) => {
    return /(^[0-9]\d*$)/.test(str)
}

/**
 * 匹配integer
 */
export const isInteger = (str) => {
    if (str == null || str == "") return false
    var result = str.match(/^[-\+]?\d+$/)
    if (result == null) return false
    return true
}

/**
 * 匹配double或float
 */
export const isDouble = (str) => {
    if (str == null || str == "") return false
    var result = str.match(/^[-\+]?\d+(\.\d+)?$/)
    if (result == null) return false
    return true
}

/**
 * 
 * 验证服务商手机号
 */
export const checkMobileCarrier = (str) => {
    const mobileRegex = /^(?:134|135|136|137|138|139|147|148|150|151|152|157|158|159|178|182|183|184|187|188|189|198|199)\d{8}$/; // 移动号码段
    const unicomRegex = /^(?:130|131|132|145|155|156|166|175|176|177|178|185|186|187|188|189|196)\d{8}$/; // 联通号码段
    const telecomRegex = /^(?:133|149|153|173|177|180|181|189|199)\d{8}$/; // 电信号码段

    if (mobileRegex.test(str)) {
        return 'mobile';
    } else if (unicomRegex.test(str)) {
        return 'unicom';
    } else if (telecomRegex.test(str)) {
        return 'telecom';
    } else {
        return 'unkonw';
    }
}