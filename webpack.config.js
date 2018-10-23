const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
  entry: {
    app: [
      './app/index.js'
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist')
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
            use: [
              {
                loader: 'css-loader',
                options: {sourceMap: true}
              },
              {
                loader: 'postcss-loader',
                options: {sourceMap: true}
              },
              {
                loader: 'sass-loader',
                options: {sourceMap: true}
              }
            ]
          })
      },
      {
        test: /\.worker\.js$/,
        use: {loader: 'worker-loader'}
      }
    ]
  },
  devServer: {
    overlay: true,
    contentBase: path.join(__dirname, '/dist/index.html')
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new ExtractTextPlugin("main.css"),
    new HtmlWebpackPlugin({template: 'app/index.html'}),
  ]
};

module.exports = (env, options) => {
  let production = options.mode === 'production';
  config.devtool = production ? false : 'eval-sourcemap';
  return config;
};
