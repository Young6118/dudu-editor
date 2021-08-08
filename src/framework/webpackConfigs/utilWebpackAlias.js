module.exports = function (resolve) {
  return {
    '@configs': resolve('src/configs'),
    '@framework': resolve('src/framework/index.js'),
    '@httpService': resolve('src/framework/services/httpService.js'),
    '@cacheService': resolve('src/framework/services/cacheService.js'),
    '@routerService': resolve('src/framework/services/routerService.js'),
    '@numberFormat': resolve('src/framework/components/utils/numberFormat.js'),
    '@logger': resolve('src/framework/components/utils/logger.js'),
    '@libRegister': resolve('src/framework/libRegister.json')
  };
};
