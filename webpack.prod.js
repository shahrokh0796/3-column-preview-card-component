const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common,  {
    mode: "production",
    entry: {
        index: "./src/index.js",
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "build"),
        assetModuleFilename: "images/[hash][ext][query]",
        clean: true,
    },
});