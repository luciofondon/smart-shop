const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');


const env = dotenv.config().parsed;


const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
}, {});

module.exports = {
    entry: "./index.tsx",
    resolve: {
        extensions: [".js", ".ts", ".tsx"],
    },
    context: resolve(__dirname, "../../src"),

    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html",
        }),
        new webpack.DefinePlugin(envKeys),
        new FaviconsWebpackPlugin('./resources/logo.png')

    ],
    devServer: {
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.(js|ts|jsx|tsx)$/,
                exclude: /node_modules/,
                use: ["babel-loader"],
            },
            {
                test: /\.(css)$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: "url-loader",
                options: { limit: false },
            },
        ],
    },
};