const path = require('path');

module.exports = {
  mode: "development",
  entry: './src/index.ts',
  output: {
    filename: 'tiny-mustache.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: "TinyMustache",
      type: "umd"
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devtool: "inline-source-map",
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 8080,
  },
}