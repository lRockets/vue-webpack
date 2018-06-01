const path=require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); 
const uglify = require('uglifyjs-webpack-plugin'); 
const webpack=require('webpack');
const config={
    mode:'development',
    entry:'./main.js',
    output:{
        path:path.resolve(__dirname,"dist"),
		filename:'bundle[hash].js'
    },
    module:{
        rules:[
            {
                test: /\.vue$/,
                use:'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude:'/node_modules/'
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude:'/node_modules/'
            },
            {
                test: /\.scss$/,
                use: [
					MiniCssExtractPlugin.loader,
					'css-loader', {
						loader: 'postcss-loader',
						options: {
							sourceMap: true
						}
					},
					'sass-loader'
				]
            },
            {
                test: /\.css$/,
                use: [
                  MiniCssExtractPlugin.loader,
                //   'style-loader',
                  'css-loader'
                ]
            },
            {
                test:/\.(png|jpg|gif)/ ,
                use:[
                    {
                       loader:'url-loader',
                       options:{
                       limit:500000
                    }
                }]
           }
        ]
    },
    devServer: {
        contentBase: './dist',
        host:'192.168.1.101',
        hot: true,
        open:true
    },
    plugins: [
        new MiniCssExtractPlugin({
        	filename: "./src/style/main.css"
		}),
        new uglify(),
        new HtmlWebpackPlugin(),
        new VueLoaderPlugin(),
        new webpack.NamedModulesPlugin(),   //热加载 
        new webpack.HotModuleReplacementPlugin() //热加载 
    ]
}
module.exports=config;

