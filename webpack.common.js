const webpack = require('webpack')

const path = require('path')
const htmlWebpack = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
require('dotenv').config({ path: './.env' })

const generateHtmlPlugin = (title) => {
  return new htmlWebpack({
    title,
    filename: `${title.toLowerCase()}.html`,
    template: `./src/pages/${title.toLowerCase()}.html`,
  })
}

const populateHtmlPlugins = (pagesArray) => {
  res = []
  pagesArray.forEach((page) => {
    res.push(generateHtmlPlugin(page))
  })
  return res
}

const pages = populateHtmlPlugins(['Index', 'Search', 'Recipe', 'Detail'])

module.exports = {
  entry: './src/script/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },

  plugins: [
    ...pages,
    new CopyWebpackPlugin({
      patterns: [{ from: 'src/assets', to: 'assets' }],
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
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
}
