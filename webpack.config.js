var path = require("path");

var webpack = require("webpack")

module.exports = {
    entry: "./app/app.js",
    output: {
        filename: "public/bundle.js"
    },
    module: {
        loaders: [{
            test: /.jsx?$/,
            loaders: "babel-loader",
            include: /app/,
            exclude: /node_modules/,
            query: {
                presets: ["es2015", "react"]
            }
        }]
    },
    devtool: "eval-source-map"
}