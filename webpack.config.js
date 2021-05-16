const path = require('path');

module.exports = {
  entry: path.resolve('client/src/index.jsx'),
  output: {
    path: path.resolve('client/dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,
        exclude: '/node_modules',
        presets: [ '@babel/preset-react', '@babel/preset-env' ]
      }
    ]
  },
  cache: false,
};