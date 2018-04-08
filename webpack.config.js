var path = require('path');
var debug = process.env.NODE_ENV !== 'production';
var webpack = require('webpack');

module.export = {
    mode: 'development',
    entry: "./src/index.js",
    context: __dirname,
    devtool: debug ? 'inline-sourcemap' : null,
    output: {
        path: path.resolve(__dirname, 'dist/assets'),
        filename: "bundle.js",
        publicPath: "assets"
    },
    devServer: {
        inline: true,
        contentBase: "./dist",
        port: 3000
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                include: [path.resolve(__dirname, './src/*')], 
                loader: ["babel-loader"],
                query: {
                    presets: ["latest", "stage-0", "react"],
                    plugins: ['transform-react-jsx']    
                }
            }
        ]
    }
}