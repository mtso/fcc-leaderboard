var path = require('path');
var exportDir = path.resolve(__dirname, './dist');

var HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: path.resolve(__dirname, './app/index.html'),
  filename: 'index.html',
  inject: 'body'
});

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var ExtractTextPluginConfig = new ExtractTextPlugin({
  filename: 'styles.css',
  disable: false,
  allChunks: true
});

module.exports = [
  {
    entry: [
      './app/index.js'
    ],
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'}
      ]
    },
    output: {
      filename: 'bundle.js',
      path: exportDir
    },
    plugins: [
      HtmlWebpackPluginConfig
    ]
  },
  {
    entry: [
      './app/style/main.scss'
    ],
    module:
    {
      loaders: [
        {
          test: /\.scss$/,
          exclude: /node_modules/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: 'css-loader!sass-loader'}
          )
        }
      ]
    },
    output: {
      filename: 'styles.css',
      path: exportDir
    },
    plugins: [
      ExtractTextPluginConfig
    ]
  }
];
