const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'inline-source-map',
  entry: './app.js',
  output: {
    path: path.join(__dirname, '__build__'),
    filename: 'build.js'
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'assets', 'index.html')
  })],
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader' 
      },
      { 
        test: /\.vue$/, 
        loader: 'vue-loader' 
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }
    ]
  }
}
