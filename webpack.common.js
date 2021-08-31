const path = require('path')
const htmlWebpack = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

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
  ],

  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
}
