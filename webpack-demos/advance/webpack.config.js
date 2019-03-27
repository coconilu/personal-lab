"use strict";

const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./app/index.js",
  context: path.resolve(__dirname),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      { test: /\.jpg$/, use: ["file-loader"] },
      { test: /\.png$/, use: ["url-loader?mimetype=image/png"] },
      {
        test: /\.html$/,
        use: [
          {
            loader:
              "html-loader",
            options: {
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
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
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
  plugins: [new CleanWebpackPlugin()]
};
