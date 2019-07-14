const path = require('path');
const CompilePlugin = require('./plugins/CompilePlugin')

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CompilePlugin({
      path: 'miniprogram',
      base: __dirname
    })
  ]
};