const miniCss = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    output: {
        path: __dirname + '/dist', // Folder to store generated bundle
        filename: 'bundle.js',  // Name of generated bundle after build
        publicPath: '/', // public URL of the output directory when referenced in a browser
        
      },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    miniCss.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },

            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true,
                }
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'assets/images'
                }
              },
        ]
    },
    devServer: {

    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src/index.pug'),
            filename: 'index.html'
        }),
        new miniCss({
            filename: 'style.css',
          }),
       
    ]
}