/* global require, __dirname, process, module */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

const config = {
  mode: "development",
  entry: [path.join(__dirname, "src/index.js")],
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      hash: true
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    })
  ]
};

if (process.env.NODE_ENV === "production") {
  delete config.devtool;
  config.mode = "production";
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
} else {
  config.devtool = "inline-source-map";
  config.output.publicPath = "/";
}

module.exports = config;
