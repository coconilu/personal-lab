const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "src", "index.js"),
  watch: true,
  output: {
    path: __dirname + "/output",
    publicPath: "/",
    filename: "bundle.js",
    chunkFilename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.txt$/,
        use: "raw-loader"
      },
      {
        test: /.jsx?$/,
        include: [path.resolve(__dirname, "src")],
        exclude: [path.resolve(__dirname, "node_modules")],
        loader: "babel-loader",
        query: {
          presets: [
            [
              "@babel/env",
              {
                targets: {
                  browsers: "last 2 chrome versions"
                }
              }
            ]
          ]
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: MiniCssExtractPlugin.loader }, "css-loader"]
      },
      {
        test: path.resolve("src/val.js"),
        use: [{ loader: "val-loader" }]
      },
      {
        test: path.resolve("src/assert/piece.jpg"),
        use: [
          {
            loader: "file-loader",
            options: {
              publicPath: "images/",
              outputPath: "images/"
            }
          }
        ]
      },
      {
        test: path.resolve("src/assert/sea.png"),
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              publicPath: "images/",
              outputPath: "images/"
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "./src/tpl.html"),
      filename: "index.html",
      hash: true,
      inject: true,
      compile: true,
      favicon: false,
      minify: false,
      cache: true,
      showErrors: true,
      chunks: "all",
      excludeChunks: [],
      title: "Webpack App",
      xhtml: false
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
  resolve: {
    extensions: [".json", ".js", ".jsx"]
  },
  devtool: "source-map",
  devServer: {
    contentBase: path.join("/dist/"),
    inline: true,
    host: "0.0.0.0",
    port: 8088
  }
};
