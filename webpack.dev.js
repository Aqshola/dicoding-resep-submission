const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    headers: {
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
      'Access-Control-Allow-Origin': '*',
    },
    proxy: {
      '/resep': {
        target: 'https://masak-apa-tomorisakura.vercel.app',
        secure: false,
        changeOrigin: true,
        pathRewrite: { '^/resep': '' },
      },
    },
  },
})
