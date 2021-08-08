/* eslint no-unused-vars:off */

import globalEvent from '../../plugins/globalEvent';

// 注册组件
export default (Vue) => {
  /*
  const Vue = VueTemp;

  // 组件
  Vue.component('a', a);
  Vue.use(b);
  */

  Vue.use(globalEvent);
};
