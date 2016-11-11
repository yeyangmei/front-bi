/**
 * Created by yeyangmei on 16/11/10.
 */
module.exports = {
  entry: './src/index',

  output: {
    path: './dist',
    filename: 'app.js',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  },

  plugins: []

};