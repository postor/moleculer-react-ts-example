const HtmlWebpackPlugin = require('html-webpack-plugin')
const { join } = require('path')

module.exports = {
  entry: './web/app.tsx',
  output: {
    path: join(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.m?(t|j)sx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env', 
              "@babel/preset-react"
            ]
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', 'tsx', '.js', '.json']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: join(__dirname, 'web', 'index.html')
    })
  ],
}