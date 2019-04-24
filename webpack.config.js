var webpack = require('webpack');
var path = require('path');
var CompressionPlugin = require('compression-webpack-plugin');
var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.DefinePlugin({ //<--key to reduce React's size
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin(
      {filename: 'style.css'}
    ),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
  optimization: {
    minimize: true
  },
  module : {
    rules : [
      {
        test : /\.(js|jsx)?/,
        include : APP_DIR,
        loader : 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-class-properties','transform-object-rest-spread','syntax-dynamic-import']
        }
      },
      {
        test: /\.css$/,
       loader: 'style-loader'
      },
      {
        test: /\.css$/,
       loader: 'css-loader'
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader']
          })
      },
      {
        test: /\.(png|jpg|gif|ico)$/,
         loader: "file-loader?name=[hash:base64:16].[ext]&limit=5000"
       },
       {
         test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
         loader: "file-loader",
       },
       {test: /\.html/,
       exclude: /(node_modules|bower_components)/,
       use: [{
         loader: 'file-loader',
         options: { name: '[name].[ext]' },
       }]}
    ]
  }
};

module.exports = config;