const webpack = require('webpack');

module.exports = {
  // other webpack config options...

  resolve: {
    fallback: {
      util: require.resolve('util/'),
      "os": require.resolve("os-browserify/browser"),
      "path": require.resolve("path-browserify"),
      "fs": false, // 'fs' is not available in the browser environment.
      "child_process": false // Same for 'child_process'.
    },
  },

  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
};
// eslint-disable-next-line no-unused-vars
const path = require('path');