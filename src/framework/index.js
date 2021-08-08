import 'babel-polyfill';

import libList from '@libRegister';
import logger from '@logger';
import registerHttpService from './services/httpService';


export default async function (Vue) {
  // 注册请求服务
  registerHttpService(Vue);

  const registerList = [];

  try {
    // 注册依赖库
    const keys = Object.keys(libList);
    for (let i = 0; i < keys.length; i++) {
      const libKey = keys[i];
      const libRegister = require(`${libList[libKey]}`).default;
      registerList.push(libRegister(Vue));
    }
  } catch (e) {
    logger.error(e);
  }

  return Object.assign({}, ...registerList);
}
