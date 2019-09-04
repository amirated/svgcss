const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/*
{
    test:/\.css$/,
    use:['style-loader', 'css-loader']
},
*/
module.exports = {
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'index_bundle.js'
	},
	module: {
		rules: [
			{
			    test: /\.scss$/,
			    loaders: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
		})
	]
}