'use strick'
let webpack = require('webpack')
let config = require('./webpack.base')
let HtmlWebpackPlugin = require('html-webpack-plugin')
  // config.devtool = false
  // add hot-reload related code to entry chunks
  // let polyfill = 'eventsource-polyfill'
  // let hotClient = 'webpack-hot-middleware/client?noInfo=true&reload=true'
  // Object.keys(config.entry).forEach(function(name, i) {
  //     let extras = i === 0 ? [polyfill, hotClient] : [hotClient]
  //     config.entry[name] = extras.concat(config.entry[name])
  // })
config.output.publicPath = '/'
  // eval-source-map is faster for development
config.devtool = 'eval-source-map'
config.devServer = {
  port: 3000,
  proxy: {
    '/': {
      secure: false,
      bypass: function(req, res, proxyOptions) {
        if (req.headers.accept.indexOf('html') !== -1) {
          console.log('Skipping proxy for browser request.');
          return '/index.html';
        }
      }
    },
    '/api/*': {
      target: 'http://127.0.0.1:8085/',
      secure: false
    }
  }
}
config.plugins = (config.plugins || []).concat([
  // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
  new webpack.optimize.OccurenceOrderPlugin(),
  //将样式统一发布到style.css中
  new webpack.NoErrorsPlugin(),
  // https://github.com/ampedandwired/html-webpack-plugin
  new HtmlWebpackPlugin({
    title: 'YUN-API|HOME',
    filename: 'index.html',
    template: 'src/client/index.html',
    inject: true
  })
])

module.exports = config
