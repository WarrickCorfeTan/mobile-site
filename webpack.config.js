module.exports = {
	entry: {
		App: "./app/assets/scripts/App.js",
		Vendor: "./app/assets/scripts/Vendor.js"
	},
	output: {
		//path: "./app/temp/scripts",
		path: __dirname + "/app/temp/scripts",
		filename: "[name].js"
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