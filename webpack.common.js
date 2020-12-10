const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const HbsPlugin = require('handlebars-webpack-plugin')

module.exports = {
	entry: './src/js/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.bundle.js',
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.(hbs|handlebars)$/,
				use: {
					loader: 'handlebars-loader',
					query: {
						helperDirs: [
							path.join(__dirname, 'src', 'handlebars', 'helpers'),
						],
						partialDirs: [
							path.join(__dirname, 'src', 'handlebars', 'partials'),
						],
						inlineRequires: '\/assets\/',
					},
				},
			},
			{
				test: /\.html$/,
				use: {
					loader: 'html-loader',
					options: {
						attributes: {
							list: [
								{
									tag: 'img',
									attribute: 'src',
									type: 'src',
								}
							],
						},
					},
				},
			},
			{
				test: /\.(jpg|jpeg|svg|gif|png)$/,
				use: {
					loader: 'file-loader',
					options: {
						name: '[name].[hash].[ext]',
						outputPath: 'imgs',
						esModule: false,
					},
				},
			},
		],
	},
	plugins: [
		new HtmlPlugin({
			template: path.join(__dirname, 'src', 'handlebars', 'index.hbs'),

		}),
		new HtmlPlugin({
			template: path.join(__dirname, 'src', 'handlebars', 'blocks.hbs'),
			filename: 'blocks.html'
		}),
	],
}
