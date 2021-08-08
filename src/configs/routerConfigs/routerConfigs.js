import index from '../../main/index';

const routerConfigs = [{
  path: '/',
  name: 'index',
  component: index,
  // redirect: '/order/receive',
  children: [
    // {
    //   path: '/order/receive',
    //   name: 'orderReceive',
    //   component: orderReceive
    // }
  ]
}];

export default routerConfigs;
