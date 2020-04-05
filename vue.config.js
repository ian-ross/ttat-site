const path = require("path");
const AssetsPlugin = require("assets-webpack-plugin");

module.exports = {
  pages: {
    main: 'src/main.js',
    vueThing: 'src/vue-thing.js',
  },
  configureWebpack: config => {
    config.plugins = config.plugins.concat(
      new AssetsPlugin({
        filename: "webpack.json",
        path: path.join(process.cwd(), "site/data"),
        prettyPrint: true
      }),
    )
  },
  css: {
    extract: true
  }
}
