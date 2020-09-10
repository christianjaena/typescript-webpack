const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
	devtool: 'eval-source-map',
	target: 'node',
	externals: [nodeExternals()],
	mode: 'development',
	entry: './src/index.ts',
	module: {
		rules: [
			{
				test: /\.ts$/,
				include: [path.resolve(__dirname, 'src')],
				use: 'ts-loader',
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	output: {
		filename: 'bundle.js',
		publicPath: 'public',
		path: path.resolve(__dirname, 'public'),
	},
};
