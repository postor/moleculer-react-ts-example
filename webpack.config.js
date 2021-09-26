const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const { join } = require('path')

module.exports = {
  entry: './web/app.tsx',
  output: {
    path: join(__dirname, 'public')
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
              '@babel/preset-env',
              "@babel/preset-react"
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
    new MiniCssExtractPlugin()
  ],
  optimization: {
    splitChunks: {
      // include all types of chunks
      chunks: 'all',
    },
  },
}