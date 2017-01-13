require('buba/register')

module.exports = {
  plugins: [
    'northbrook/plugins',
    'eslint',
    'buba',
    './src/index.js'
  ]
}
