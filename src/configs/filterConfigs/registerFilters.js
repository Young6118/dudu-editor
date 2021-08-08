export default (Vue) => {
  // 转小写
  Vue.filter('filterA', value => value || value.toLowerCase());

  // 转大写
  Vue.filter('filterB', value => value || value.toUpperCase());
};
