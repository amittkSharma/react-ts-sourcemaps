const path = require('path')
const gitConfig = require('./git-config')

module.exports = function(config) {
  // Updating env variables with Git information
  gitConfig(config)
  // Add the source map loader
  // (last one must remain as the "file-loader")
  config.module.rules.forEach(rule => {
    Object.keys(rule).forEach(name => {
      if (name === 'oneOf') {
        let loaderList = rule[name]
        loaderList.splice(loaderList.length - 1, 0, {
          test: /\.(jsx|js)?$/,
          use: ['source-map-loader'],
          enforce: 'pre',
          exclude: /node_modules/,
        })
      }
    })
  })
}
