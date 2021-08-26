const path = require('path');
const htmlWebpack = require('html-webpack-plugin');

const generateHtmlPlugin = (title) => {
  return new htmlWebpack({
    title,
    filename: `${title}.html`,
    template: `./src/pages/${title.toLowerCase()}.html`,
  });
};

const populateHtmlPlugins = (pagesArray) => {
  res = [];
  pagesArray.forEach((page) => {
    res.push(generateHtmlPlugin(page));
  });
  return res;
};

const pages = populateHtmlPlugins(['Index', 'Search', 'Recipe']);

module.exports = {
  entry: './src/script/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  plugins: pages,

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
};
