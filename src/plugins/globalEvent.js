/**
 * 我们将 event-bus 封装为一个插件.
 */
export default {
  install(Vue) {
    const EventBus = new Vue({});
    Vue.prototype.$gemit = EventBus.$emit.bind(EventBus);
    Vue.prototype.$gon = EventBus.$on.bind(EventBus);
  }
};
