var webpack = require("webpack");
var path = require("path");

module.exports = {
  devtool: "eval",
  progress: true,
  entry: {
    bundle: [
      "webpack-dev-server/client?http://localhost:3001",
      "webpack/hot/only-dev-server",
      "./app/index.js"
    ]
  },
  output: {
    path: path.join(__dirname, "public"),
    filename: "[name].js",
    chunkFilename: "[chunkhash].js",
    publichPath: "http://localhost:3001/"
  },
 resolve: {
    extensions: ["", ".js", ".styl", ".css"]
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "react-hot!babel?stage=0&optional=runtime"
    }]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
