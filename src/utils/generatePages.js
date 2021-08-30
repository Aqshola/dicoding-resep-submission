const htmlWebpack = require('html-webpack-plugin');

const generateHtmlPlugin = (title) => {
  return new htmlWebpack({
    title,
    filename: 'index.html',
    template: `../src/pages/${title.toLowerCase()}.html`,
  });
};

export const populateHtmlPlugins = (pagesArray) => {
  res = [];
  pagesArray.forEach((page) => {
    res.push(generateHtmlPlugin(page));
  });
  return res;
};
