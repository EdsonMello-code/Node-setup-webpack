const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [new NodePolyfillPlugin()],
  // resolve: {
  //   fallback: {
  //     fs: false,
  //     tls: false,
  //     net: false,
  //     path: false,
  //     zlib: false,
  //     http: false,
  //     https: false,
  //     stream: false,
  //     crypto: false,
  //   },
  // },

  target: 'node',
  devtool: 'source-map',
  externals: [nodeExternals()],
  mode: 'production',
};
