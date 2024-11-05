/// webpack.config.js
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/main.ts',
  resolve: {
    extensions: ['.ts', '.js'], // Add '.ts' and '.js' extensions
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './elements')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.ts$/, // Apply this rule for .ts files
        use: 'ts-loader', // Use ts-loader for TypeScript files
        exclude: /node_modules/, // Exclude node_modules
      }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
    }),
  ],
  optimization: {
    minimize: true, // You can set this to true if you want to minify your output
  },
  mode: 'production'
};