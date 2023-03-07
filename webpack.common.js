const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        index: "./src/index.js",
    },
    devtool: "source-map",
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/template.html",
            inject: true,
            scriptLoading: "defer",
            hash: true,
        }),
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    MiniCssExtractPlugin.loader, 
                    "css-loader", 
                    "sass-loader",
                    "postcss-loader",
                ],
            },
            {
                test: /\.html$/,
                use: "html-loader",
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
}