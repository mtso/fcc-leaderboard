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
          test: /\.jsx{0,1}$/,
          exclude: /node_modules/,
          loader: 'babel-loader'}
      ]
    },
    output: {
      filename: 'index_bundle.js',
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
<<<<<<< HEAD
      ExtractTextPluginConfig
=======
      new ExtractTextPlugin({
        filename: 'styles.css',
        disable: false,
        allChunks: true
      })
>>>>>>> d469707e13846c46fbc03c176b1d65978cff0eae
    ]
  }
];
