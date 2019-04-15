"use strict";

const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ManifestPlugin = require("webpack-manifest-plugin");
const webpack = require("webpack");
const MinifyPlugin = require("babel-minify-webpack-plugin");

module.exports = {
  mode: "development",
  entry: ["./app/index.js"],
  context: path.resolve(__dirname),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
    chunkFilename: "[name].[hash:5].js"
  },
  devServer: {
    contentBase: "./dist",
    watchContentBase: true,
    host: "localhost",
    port: 8088,
    hot: true,
    public: "http://localhost:8088"
  },
  module: {
    rules: [
      {
        test: /\.bundle\.js$/,
        use: [
          {
            loader: "bundle-loader",
            options: {
              lazy: true,
              name: `bayes`
            }
          }
        ]
      },
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
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: {
          loader: "eslint-loader",
          options: {
            fix: false,
            cache: false,
            formatter: require("eslint/lib/formatters/stylish"),
            eslintPath: "eslint",
            emitError: true,
            emitWarning: false,
            quiet: false,
            failOnWarning: true,
            failOnError: true,
            outputReport: false
          }
        }
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
    new ManifestPlugin(),
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true),
      VERSION: JSON.stringify("5fa3b9"),
      BROWSER_SUPPORTS_HTML5: true,
      TWO: "1+1",
      "typeof window": JSON.stringify("object")
    }),
    new webpack.IgnorePlugin(/define\.js$/),
    new webpack.ProvidePlugin({
      _: "lodash"
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new MinifyPlugin(
      {},
      {
        test: /.jsx?$/,
        include: [path.resolve(__dirname, "src")],
        exclude: [path.resolve(__dirname, "node_modules")],
        comments: false
      }
    )
  ]
};
