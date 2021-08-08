/* eslint no-unused-vars:off */

// 路由变化之前处理
export function beforeRouterUpdate(to, from, next) {
  if (to.matched.length === 0) {
    // 如果未匹配到路由
    // 此处可以404
    if (from.path) {
      // 如果上级也未匹配到路由则跳转首页，如果上级能匹配到则不跳转
      next(false);
    } else {
      next('/');
    }
  } else {
    next();
  }
}

// 路由变化之后处理
export function afterRouterUpdate(to, from) {
  // document.title = to.name;
}
