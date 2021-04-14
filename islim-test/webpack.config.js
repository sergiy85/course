const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
  entry: [
    './src/js/index.js',
  ],
  output: {
    filename: './js/bundle.js'
  },
  devtool: "source-map",
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
 
    new HtmlWebpackPlugin({
      title: "Webpack islim-test",
      template: path.resolve(__dirname, 'src', 'index.html')
    }),
  ],

  module: {
    rules: [
      {
        test: /\.scss$/,
        use:  [ 'sass-loader', MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }
        ]
      }
    ]
  },
  watch: true
};


 // rules: [
      // {
      //   test: /\.js$/,
      //   include: path.resolve(__dirname, 'src/js'),
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: 'env'
      //     }
      //   }
      // },
      // {
      //   test: /\.(sass|scss)$/,
      //   include: path.resolve(__dirname, 'src/scss'),
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader,
      //       options: {
      //         publicPath: '../'
      //       },
      //     },
      //     // 'css-loader',
      //     {
      //       loader: "css-loader",
      //       options: {
      //         sourceMap: true,
      //         minimize: true,
      //         url: true
      //       }
      //     },
      //     {
      //       loader: "sass-loader",
      //       options: {
      //         sourceMap: true
      //       }
      //     }
        // ],
      // },
    // ],