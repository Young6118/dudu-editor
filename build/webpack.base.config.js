/**
 * Created by spring on 2018/9/11.
 */
const webpack = require('webpack');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');
// 注册框架工具别名
const frameWorkUtils = require('../src/framework/webpackConfigs/utilWebpackAlias');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = env => ({
  resolve: {
    extensions: ['.js', '.vue', '.scss', '.css', '.json'],
    alias: {
      appConfig: resolve(`src/configs/globalConfigs/${env}.config.js`),
      vue$: 'vue/dist/vue.esm.js',
      '@images': resolve('src/resources/images'),
      ...frameWorkUtils(resolve)
    }
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png|svg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: '15360',
            name: '[path][name].[hash:8].[ext]'
          }
        }]
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: '10240',
            name: '[path][name].[hash:8].[ext]'
          }
        }]
      }
    ]
  },

  plugins: [
    // new CleanWebpackPlugin(['dist'], {
    //   root: resolve('./')
    // }),
    new VueLoaderPlugin(),
    new webpack.BannerPlugin(`Copyright © 2011 - ${(new Date()).getFullYear()} miHoYo. All Rights Reserved`)
  ]
});
