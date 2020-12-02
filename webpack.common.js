const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const HbsPlugin = require('handlebars-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'index.bundle.js',
		publicPath: '/',
	},
	module: {
		rules: [
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
						outputPath: 'imgs',
					},
				},
			},
		],
	},
	plugins: [
		new HbsPlugin({
			entry: path.join(process.cwd(), 'src', 'handlebars', '*.hbs'),
			output: path.join(process.cwd(), 'dist', '[name].html'),
			partials: [
				path.join(process.cwd(), 'src', 'handlebars', 'includes', '*', '*.hbs'),
			],
		}),
	],
}
