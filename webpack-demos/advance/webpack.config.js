"use strict";

const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: ["./app/index.js"],
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
      {
        test: /\.jpg$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: `[path][name].[ext]`
            }
          }
        ]
      },
      { test: /\.png$/, use: ["url-loader?mimetype=image/png"] },
      {
        test: /\.html$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]"
            }
          },
          {
            loader: "extract-loader"
          },
          {
            loader: "html-loader",
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
        use: [
          {
            loader: "style-loader/url",
            options: {
              sourceMap: true,
              convertToAbsoluteUrls: true
            }
          },
          { loader: "file-loader" }
        ]
      },
      {
        test: /\.styl$/,
        use: [
          {
            loader: "style-loader",
            options: {
              sourceMap: true,
              convertToAbsoluteUrls: true
            }
          },
          { loader: "css-loader" },
          { loader: "stylus-loader" }
        ]
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
