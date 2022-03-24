const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    clean: true,
  },
  devServer: {
    overlay: true,
    open: true,
    hot: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devtool: process.env.NODE_ENV === 'development' ? 'eval-source-map' : false,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /\.(yarn)$/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          mode === "production"
            ? MiniCssExtractPlugin.loader
            : "style-loader", 
          "css-loader",
        ]
      },
      {
        test: /\.(png|jp(e)g|gif|svg|ico)$/,
        type: 'asset/resource',
        options: {
          name: "[name].[ext]?[hash]",
          limit: 10000
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      minify:
        process.env.NODE_ENV === 'production'
          ? {
              collapseWhitespace: true,
              removeComments: true,
            }
          : false,
      hash: mode === 'production'
    }),
  ],
  optimization: {
    minimizer:
      mode === "production"
        ? [
            new TerserPlugin({
              terserOptions: {
                compress: {
                  drop_console: true
                }
              }
            })
          ]
        : []
  },
};
