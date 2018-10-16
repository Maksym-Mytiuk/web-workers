const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: {
    app: [
      './app/index.js'
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    publicPath: 'dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(
          {
            use: ['css-loader', 'sass-loader']
          })
      }
    ]
  },
  devServer: {
    overlay: true
  },
  plugins: [
    new ExtractTextPlugin("main.css"),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './app/index.html'
    })
  ]
};

module.exports = (env, options) => {
  let production = options.mode === 'production';
  config.devtool = production ? false : 'eval-sourcemap';
  return config;
};