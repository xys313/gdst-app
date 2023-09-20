const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

const baseURL = "http://44.241.233.14";
const port = process.env.PORT || 3000;

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "../weekly-nft"),
        filename: "bundle.[hash].js",
    },
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(tsx|ts)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [["@babel/preset-env", { targets: "defaults" }]],
                        },
                    },
                ],
            },
            {
                test: /\.(c|sc)ss$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    {
                        loader: "css-loader",
                    },
                    { loader: "sass-loader" },
                ],
            },
            {
                test: /\.splinecode$/,
                use: 'raw-loader'
            },
            {
                test: /\.(woff|svg|eot)\??.*$/,
                use: [
                    {
                        loader: "url-loader",
                        // "?limit=50000&name=[path][name].[ext]",
                        options: {
                            limit: 50000,
                            name: "[name].[ext]",
                            publicPath: "../fonts/",
                            outputPath: "fonts/",
                        },
                    },
                ],
            },
            {
                test: /\.(png|gif|jpg|jpeg|bmp)$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            outputPath: "img/",
                            name: "[name].[hash:7].[ext]",
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].[chunkhash].css",
            chunkFilename: "[id].[chunkhash].css",
        }),
        new HtmlWebpackPlugin({
            template: "public/index.html",
            favicon: "public/favicon.ico",
        }),
    ],
    devServer: {
        // host: "10.161.224.138",
        // host: "127.0.0.1",
        port: 3000,
        historyApiFallback: true,
        open: true,
        proxy: {
            '/eth-nft-api':{
                target: baseURL+":23305/eth-nft-api",
                changeOrigin: true,
            },
        },
    },
};
