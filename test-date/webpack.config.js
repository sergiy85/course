const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin'); 
const path = require('path');

module.exports = {
  mode: "development",
    entry: path.resolve(__dirname, 'src') + '/index.js',
    output: {
      path: __dirname+'/dist',
      filename: "./js/[name].[chunkhash:8].js"
    },
    devtool: "source-map",
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html'
      }),
      new CopyWebpackPlugin([
	      { from: path.resolve(__dirname, 'src') + '/assets/img', to: `dist/assets/img/` }
	    ]),
    ],
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            "style-loader",
            "css-loader",
            "sass-loader"
          ]
        },
        {
	        test: /\.(png|jpg|gif|svg)$/,
	        loader: 'file-loader',
	        options: {
	          name: '[name].[ext]',
	          outputPath: 'img/'
	        }  
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

