"use strict";

const path = require("path");
const PrintPlugin = require("./lib/print-plugin.js");
const webpack = require("webpack");

module.exports = {
  entry: "./index.js",
  mode: "development",
  context: path.resolve(__dirname),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
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
      },
      {
        test: /.md$/,
        use: [
          { loader: "raw-loader" },
          {
            loader: path.resolve(__dirname, "lib/markdown-loader.js")
          }
        ]
      }
    ]
  },
  resolve: {
    alias: {
      common$: path.resolve(__dirname, "../../lib/index.js")
    }
  },
  devtool: "source-map",
  plugins: [
    new webpack.ProvidePlugin({
      common: path.resolve(__dirname, "../../lib/index.js")
    }),
    new PrintPlugin()
  ]
};
