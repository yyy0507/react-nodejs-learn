var webpack = require('webpack');

module.exports = {
	mode: "development",
	entry:{
		'view/main/index': './js/view/main/index.js'
	},
	output: {
		path: __dirname + '/output/js/',
		filename: '[name].bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader!jsx-loader?harmony'
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}
		]
	},
	resolve: {
		extensions: [' ','.js','.jsx','.css','.json'],
	}
}