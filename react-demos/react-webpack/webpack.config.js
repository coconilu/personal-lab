const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src", "index.js"),
  watch: true,
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js",
    chunkFilename: "[name].js"
  },
  module: {
    rules: [
      // {
      //   test: /.jsx?$/,
      //   include: [path.resolve(__dirname, "algorithms")],
      //   exclude: [path.resolve(__dirname, "node_modules")],
      //   loader: "babel-loader",
      //   query: {
      //     presets: [
      //       [
      //         "@babel/env",
      //         {
      //           targets: {
      //             browsers: "last 2 chrome versions"
      //           }
      //         }
      //       ]
      //     ]
      //   }
      // },
      {
        test: /.jsx?$/,
        include: [path.resolve(__dirname, "src")],
        exclude: [path.resolve(__dirname, "node_modules")],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["@babel/transform-runtime"],
            cacheDirectory: true
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [".json", ".js", ".jsx"]
  },
  devtool: "source-map",
  devServer: {
    contentBase: path.join("/dist/"),
    inline: true,
    host: "0.0.0.0",
    port: 8088
  },
  plugins: [new CleanWebpackPlugin(), new HtmlWebpackPlugin()]
};
