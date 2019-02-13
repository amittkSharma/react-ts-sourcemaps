const GitRevisionPlugin = require('git-revision-webpack-plugin')
const gitRevisionPlugin = new GitRevisionPlugin({
  lightweightTags: true,
})

module.exports = function (config) {
  config.plugins.forEach(plugin => {
    Object.keys(plugin).forEach(name => {
      if (name === 'replacements') {
        const env_vars = plugin[name]
        env_vars['VERSION'] = gitRevisionPlugin.version()
        env_vars['BRANCH'] = gitRevisionPlugin.branch()
        env_vars['COMMITHASH'] = gitRevisionPlugin.commithash()
      }
    })
  })
  return config
}
