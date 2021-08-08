/**
 * Created by spring on 2018/8/23.
 */
// 引入mockjs
const Mock = require('mihoyo-mockjs');

// 获取 mock.Random 对象
const Random = Mock.Random;

// mock一组数据
const demoList = function () {
  return {
    data: {
      'list|1-10': [{
        'id|+1': 1,
        'name|5-10': Random.string()
      }]
    },
    retcode: 0,
    message: ''
  };
};

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock(/demo\/list/gi, 'get', demoList);
