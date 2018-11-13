const path= require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');

module.exports = {
    entry:'./src/index.js',
    output:{
        path:path.join(__dirname,'/dist'),
        publicPath:"/"
    },
    devServer:{
        historyApiFallback: true,
        contentBase: './',
        hot: true
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:'/node_modules',
                use:{
                    loader:'babel-loader'
                }

            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }, 
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                    'file-loader'
                ],
            },
            {
                test: /\.ico$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.mp4$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin(
            {
                template:'./public/index.html',
                PUBLIC_URL: ''
            }
        ),
        new InterpolateHtmlPlugin({
            PUBLIC_URL: ''
        })
    ],
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:5000'
        })
    }
}