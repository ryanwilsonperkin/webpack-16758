const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    chunkFilename: `[name]-[contenthash].js`,
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    realContentHash: true,
    splitChunks: {
      chunks: 'all',
    },
  },
};
