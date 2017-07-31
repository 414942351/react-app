var path = require('path');
var webpack = require('webpack');
module.exports = {
	entry: [
		'./src/main.js'
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	// devtool: 'inline-source-map',
	devServer: {
		// contentBase: false
	},
	module: {
		loaders: [
			{ test: /\.js[x]?$/, loader: "babel-loader?presets[]=es2015&presets[]=react", include: /src/},
	    { test: /\.css$/, loader: "style!css"},
	    { test: /\.styl$/, loader: "style-loader!css-loader!stylus-loader"},
	    { test: /\.(png|jpg)$/, loader: 'url?limit=8192'}
    ]
	}
}