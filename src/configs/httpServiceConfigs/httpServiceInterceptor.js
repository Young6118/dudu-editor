/*
 请求服务拦截器
*/
/* eslint no-unused-vars:off */

// 请求前（未进入axios）对configs进行处理
export function dealConfigsBeforeRequest(configs) {
  // 此处的this为调用$http的vue实例
  const config = configs;
  // show loading
  return config;
}

// 请求前（已进入axios）的处理
export function beforeRequest(configs) {
  // 此处的this为Vue类
  // show loading
}

// 请求回来后的处理
export function requestComplete(response) {
  // 此处的this为Vue类
  // hide loading

  if (response === 'request') {
    // 请求报错
  } else if (!response || response.status !== 200) {
    // 响应报错
  } else if (response && response.status === 200 && response.data.retcode === -100) {
    this.$loginModal({
      refresh: response.config.method !== 'post'
    });
  }
}
