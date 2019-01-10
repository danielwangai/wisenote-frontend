const path = require('path');

module.exports = {
  context: __dirname, // run from project root directory.
  entry: './src/App.jsx',
  devtool: 'cheap-eval-source-map',// source maps - show errors on precompiled code
  output: {// output file after transformations are complete
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    /*
     * what and how to report when building
    */
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
        {
            "enforce": "pre",
            test: /\.jsx?$/,
            loader: 'eslint-loader',
            exclude: /node_modules/
        },
      {
        test: /\.jsx?$/,// types of files to run transformations on i.e. js or jsx
        loader: 'babel-loader'
      }
    ]
  }
};
