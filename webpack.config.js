const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const WriteFilePlugin = require('write-file-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    contentBase: './dist',
  },
  module: {
    rules: [
      // {
      //   test: /\.(png|svg|jpg|gif)$/,
      //   use: [
      //     'file-loader',
      //   ],
      // },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src/'),
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'typeof CANVAS_RENDERER': JSON.stringify(true),
      'typeof WEBGL_RENDERER': JSON.stringify(true),
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/assets', to: 'assets' },
      ],
    }),
    new WriteFilePlugin(),
  ],
};
