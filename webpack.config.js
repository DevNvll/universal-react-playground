'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {

	devtool: '#inline-source-map',

	entry: [
		'webpack-hot-middleware/client', './client/index.js'
	],
	output: {
		path: path.join(__dirname, 'build'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		})
	],
	resolve: {
		alias: {},
		extensions: ['', '.js', '.jsx']
	},

	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel',
				exclude: /node_modules/,
				include: __dirname,
				query: {
					presets: [
						'react-hmre', "es2015", "stage-0", "react"
					],
					plugins: ["transform-decorators-legacy"]
				}
			}, {
				test: /\.css$/,
				loader: "style!css"
			}, {
				test: /\.(png|jpg|gif|jpeg)$/,
				loader: 'url-loader?limit=8192'
			}
		]
	}
};
