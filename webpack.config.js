module.exports = {
	entry: "./app/assets/scripts/App.js",
	output: {
		//path: "./app/temp/scripts",
		path: __dirname + "/app/temp/scripts",
		filename: "App.js"
	},
	module: {
		loaders: [
			{
				loader: 'babel-loader', //apparently have to add -loader to resolve the loader
				query: {
					presets: ['es2015']
				},
				test : /\.js$/,
				exclude: /node_modules/
			}
		]
	}
}