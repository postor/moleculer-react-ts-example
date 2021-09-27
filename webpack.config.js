const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { join } = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // installed via npm

module.exports = {
  entry: ['./web/app.tsx'],
  output: {
    path: join(__dirname, 'public'),
    publicPath: '/'
  },
  devServer: {
    proxy: {
      '/api': 'http://localhost:3000',
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.m?(t|j)sx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-typescript",
              "@babel/preset-react",
              '@babel/preset-env',
            ],
            plugins: [
              [
                "auto-import", {
                  "declarations": [
                    { "default": "React", "path": "react" }
                  ]
                }
              ]
            ]
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(__dirname, 'web', 'index.html')
    }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['!.gitignore']
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  }
}