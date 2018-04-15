var webpack = require("webpack");

module.export = {
    entry: "./src/index.js",
    output: {
        path: "dist/assets",
        filename: "bundle.js",
        publicPath: "assets"
    },
    devServer: {
        inline: true,
        contentBase: "dist/",
        port: 3000
    },
    resolve: { extensions: [".jsx", ".js", ".json"] },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            loader: "babel-loader"
          }]
      }
}