import Vue from 'vue';
import 'lodash';

import registerFrameworkServices from '@framework';
import { memoryCache } from '@cacheService';

import app from './app.vue';
import registerFilters from './configs/filterConfigs/registerFilters';
import registerComponent from './configs/componentConfigs/registerComponent';
import './index.scss';

// 注册普通组件
registerComponent(Vue);
// 注册过滤器
registerFilters(Vue);

// require('./mock.js');

// 注册框架服务
registerFrameworkServices(Vue)
  .then((allLibs) => {
    const vueItem = new Vue({
      el: '#root',
      template: '<app />',
      components: { app },
      ...allLibs
    });

    // 将vue对象存入缓存
    memoryCache.set('vueItem', vueItem);
  });
