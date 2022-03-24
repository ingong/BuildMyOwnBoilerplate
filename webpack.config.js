const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const mode = process.env.NODE_ENV || 'development';

module.exports = {
  mode,
  entry: path.resolve(__dirname, './src/index'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    clean: true,
  },
  devServer: {
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
        parser: {
          dataUrlCondition: {
            maxSize: 10000
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset',
      },
      {
        resolve: {
          alias: {
            '@': path.resolve(__dirname, 'src'),
            '@public': path.resolve(__dirname, 'public'),
            '@api': path.resolve(__dirname, 'src/api'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@constants': path.resolve(__dirname, 'src/constants'),
            '@helpers': path.resolve(__dirname, 'src/helpers'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@styles': path.resolve(__dirname, 'src/styles'),
            '@utils': path.resolve(__dirname, 'src/utils'),
          },
        },
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
