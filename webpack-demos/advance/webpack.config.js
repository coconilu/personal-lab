"use strict";

const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./app/index.js",
  context: path.resolve(__dirname),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  devServer: {
    contentBase: "./dist",
    watchContentBase: true,
    host: "localhost",
    port: 8088,
    public: "http://localhost:8088"
  },
  module: {
    rules: [
      { test: /\.jpg$/, use: ["file-loader"] },
      { test: /\.png$/, use: ["url-loader?mimetype=image/png"] },
      {
        test: /\.html$/,
        use: [
          {
            loader: "file-loader?name=index.[ext]!extract-loader!html-loader",
            options: {
              attrs: ["img:src", "link:href"],
              minimize: true,
              removeComments: false,
              collapseWhitespace: false,
              interpolate: require
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, { loader: "css-loader" }]
      },
      {
        test: /.jsx?$/,
        include: [path.resolve(__dirname, "src")],
        exclude: [path.resolve(__dirname, "node_modules")],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/transform-runtime"],
            cacheDirectory: true
          }
        }
      }
    ]
  },
  resolve: {},
  devtool: "source-map",
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
