/**
 * Created by yeyangmei on 16/11/10.
 */
// const UgPlugin = require('webpack/lib/optimize/UglifyJsPlugin');
const webpack = require('webpack');

module.exports = {
  entry: './src/index',

  output: {
    path: './dist',
    filename: 'bi-nav.js',
    library: 'biNav',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css/,
        loaders: ['style', 'css'],
      },
      {
        test: /\.pug/,
        loaders: ['pug'],
      },
      {
        test: /\.png/,
        loaders: ['url?limit=10000'],
      }
    ]
  },
  externals: [
    {
      jquery: 'jQuery',
    }
  ],
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      // beautify: true,
    })
  ]
};