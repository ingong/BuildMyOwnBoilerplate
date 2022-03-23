const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const loadPlugin = () => {
  const plugins = [
    new HtmlWebpackPlugin({
      title: 'SPA',
      template: '/public/index.html',
      minify:
        process.env.NODE_ENV === 'production'
          ? {
              collapseWhitespace: true,
              removeComments: true,
            }
          : false,
    }),
  ];

  return plugins;
};

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index'),
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
    open: true,
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
        test: /\.(png|jp(e)g|gif|svg|ico)$/,
        type: 'asset/resource',
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset',
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    clean: true,
  },
  plugins: loadPlugin(),
};
