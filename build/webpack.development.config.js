/**
 * Created by spring on 2018/9/11.
 */
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const launchDevTools = require('./tool/launchDevTools');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  // 入口
  entry: {
    main: resolve('src/index.js')
  },

  output: {
    path: resolve('dist'), // 打包后的文件存放的地方
    filename: '[name].js' // 打包后输出文件的文件名
  },

  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          'vue-style-loader',
          {
            loader: 'css-loader',
            options: {
              minimize: false
            }
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass')
            }
          }
        ]
      }
    ]
  },
  devtool: 'source-map',

  devServer: {
    hot: true,
    contentBase: resolve('src'), // 本地服务器所加载的页面所在的目录
    historyApiFallback: false, // 不跳转
    inline: true, // 实时刷新
    disableHostCheck: true,
    after() {
      setTimeout(() => {
        launchDevTools(null, this.port);
      }, 3000);
    }
    // 默认注释了，需要去掉注释
    // proxy: {
    //   // xxxxx 表示当前项目请求url里的关键字，匹配到就把请求代理到target指定的域
    //   // 如 localhost:8080/xxx/api/user/get 会被代理到 https://xxx.mihoyo.com/xxx/api/user/get
    //   '/xxx': {
    //     target: 'https://xxx.mihoyo.com', // 代理服务器路径
    //     changeOrigin: true
    //   }
    // }

  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),

    new HtmlWebpackPlugin({
      template: resolve('src/index.html') // new 一个这个插件的实例，并传入相关的参数
    })
  ]
};
