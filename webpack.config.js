const path = require('path')
const json5 = require('json5')

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
	devtool: 'inline-source-map',
	devServer: {
		static: './dist'
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.json5$/i,
				type: 'json',
				parser: {
					parse: json5.parse
				}
			}
		]
	}
}