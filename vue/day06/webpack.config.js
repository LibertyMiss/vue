const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin')
// webpack.HotModuleReplacementPlugin
module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HTMLWebpackPlugin({
            template:path.join(__dirname,'src/index.html'),
            filename:'index.html'
        })
    ],
    devServer:{
        contentBase:path.join(__dirname,"src"),
        compress:true,
        port:3000,
        open:true,
        hot:true,
    },
    module: { //配置 所有 第三方模块
        rules: [ // 匹配规则
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader','less-loader']
            }, 
            {
                 test: /\.scss$/,
                 use: ['style-loader', 'css-loader', 'sass-loader']
            }, 
        ]
    },
    mode: 'development',
};