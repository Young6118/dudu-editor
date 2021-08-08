/**
 * Created by jason on 18/6/7.
 */

import VueRouter from 'vue-router';

import routerConfigs from '@configs/routerConfigs/routerConfigs';
import {
  beforeRouterUpdate,
  afterRouterUpdate
} from '@configs/routerConfigs/routerInterceptor';

export default (vue) => {
  vue.use(VueRouter);
  const router = new VueRouter({
    routes: routerConfigs
  });

  // 全局守卫，监听路由变化
  router.beforeEach((to, from, next) => {
    // 路由变化之前处理
    beforeRouterUpdate.bind(vue)(to, from, next);
  });
  // 路由改变之后
  router.afterEach((to, from) => {
    // 路由变化之后处理
    afterRouterUpdate.bind(vue)(to, from);
  });

  return {
    router
  };
};
