const path = require('path');
module.exports = {
	"mode": "production",
	"entry": "./src/index.js",
	"output": {
		"path": __dirname+'/dist',
		"filename": "[name].js"
	},
	"module": {
		"rules": [
			{
				"enforce": "pre",
				"test": /\.(js|jsx)$/,
				"exclude": /node_modules/,
				"use": "eslint-loader"
			},
			{
				"test": /\.spec\.js$/,
				"exclude": /node_modules/,
				"use": {
					"loader": "babel-loader",
					"options": {
						"presets": ["env"]
					}
				}
			},
		]
	}
};
