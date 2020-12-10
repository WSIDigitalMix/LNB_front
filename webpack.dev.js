let common = require('./webpack.common.js')
let merge = require('webpack-merge')

let dev = {
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	devServer: {
		contentBase: ['./src/handlebars', './src/js'],
		watchContentBase: true,
		hotOnly: true,
		host: '0.0.0.0',
	},
}

module.exports = merge(common, dev)
