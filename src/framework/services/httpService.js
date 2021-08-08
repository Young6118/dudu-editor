/* eslint no-unused-vars:off */

import axios from 'axios';
import _ from 'lodash';

import {
  requestComplete,
  dealConfigsBeforeRequest
} from '../../configs/httpServiceConfigs/httpServiceInterceptor';
import defaultConfigs from '../../configs/httpServiceConfigs/defaultConfigs';

// 请求封装
function HttpServiceRequest(configs, axiosTemp, type) {
  const {
    url,
    data,
    query,
    onSuccess = () => {
    },
    onError = () => {
    },
    ...others
  } = dealConfigsBeforeRequest ? dealConfigsBeforeRequest.bind(this)(configs) : configs;

  // 处理参数，格式解析为axios组件对应格式
  let requestInfo = [data, { params: query, ...others }];
  if (type === 'get') {
    requestInfo = [{ params: data, ...others }];
  } else if (type === 'delete') {
    requestInfo = [{ params: query, data, ...others }];
  }

  return (
    axiosTemp[type](url, ...requestInfo)
      .then((response) => {
        // 请求总线处理，如果返回true，则直接拦截
        if (requestComplete.bind(this)(response, configs)) {
          return null;
        }
        // 成功回调
        onSuccess.bind(this)(_.get(response, 'data'));
        return response;
      }, (error) => {
        // 请求总线处理
        const response = _.get(error, 'response');
        // 请求总线处理，如果返回true，则直接拦截
        if (requestComplete.bind(this)(response, configs, error)) {
          return null;
        }
        // 失败回调
        onError.bind(this)(response);
        return Promise.reject(error);
      })
  );
}

// 请求方法匹配
function HttpService(axiosTemp) {
  return {
    get: configs => HttpServiceRequest.bind(this)(configs, axiosTemp, 'get'),
    post: configs => HttpServiceRequest.bind(this)(configs, axiosTemp, 'post'),
    put: configs => HttpServiceRequest.bind(this)(configs, axiosTemp, 'put'),
    delete: configs => HttpServiceRequest.bind(this)(configs, axiosTemp, 'delete')
  };
}

// 注册请求服务
export default (VueTemp) => {
  const Vue = VueTemp;

  // 设置业务中请求服务的基本配置
  _.merge(axios.defaults, defaultConfigs);

  // 注册axios
  Object.defineProperty(Vue.prototype, '$http', {
    get() {
      // 获取调用$http的实例this
      return HttpService.bind(this)(axios);
    }
  });
};
