const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')


// this config file ref: https://www.valentinog.com/blog/babel/

module.exports = {
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        // this is for the imported js and jsx to be loaded with babel-loader plugin
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        // this is for the imported html files to be loaded with html-loader plugin
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        // this is for the imported css file to be loaded with style and css loader
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
      // we'll need to add new plugins if we want to import json, scss or other file types
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebPackPlugin({
      template: './public/index.html'
    })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './public',
    stats: 'minimal',
    host: 'localhost',
    port: 4001,
  },
  entry: [
    'babel-polyfill', './src/index.js'
  ]
}