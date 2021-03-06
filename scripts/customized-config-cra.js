/*
  This module runs the scripts from react-scripts (Create React App)
  and gives an opportunity to override the Webpack config by creating
  "config-overrides.dev.js" and/or "config-overrides.prod.js" files in the
  root of the project.
  A config-overrides file should export a single function that takes a
  config and modifies it as necessary.
  module.exports = function(webpackConfig) {
    webpackConfig.module.rules[0].use[0].options.useEslintrc = true;
  };
*/
var rewire = require('rewire')
var proxyquire = require('proxyquire')
const color = require('ansi-colors')

module.exports = {
  startProcess: function (args) {
    console.log(color.greenBright(`Initializing create react app process for action: ${args}`))
    switch (args) {
      // The "start" script is run during development mode
      case 'start':
        rewireModule('react-scripts/scripts/start.js', loadCustomizer('./config-overrides'))
        break
        // The "build" script is run to produce a production bundle
      case 'build':
        rewireModule('react-scripts/scripts/build.js', loadCustomizer('./config-overrides'))
        break
      default:
        console.error(color.redBright('customized-config only supports "start", "build"'))
        process.exit(-1)
    }
  },
}

// Attempt to load the given module and return null if it fails.
function loadCustomizer(module) {
  try {
    return require(module)
  } catch (e) {
    if (e.code !== 'MODULE_NOT_FOUND') {
      throw e
    }
  }

  // If the module doesn't exist, return a
  // noop that simply returns the config it's given.
  return config => config
}

function rewireModule(modulePath, customizer) {
  // Load the module with `rewire`, which allows modifying the
  // script's internal variables.
  let defaults = rewire(modulePath)

  // Reach into the module, grab its global 'config' variable,
  // and pass it through the customizer function.
  // The customizer should *mutate* the config object, because
  // react-scripts imports the config as a `const` and we can't
  // modify that reference.

  const configFactory = defaults.__get__('configFactory')
  defaults.__set__('configFactory', env => {
    let config = configFactory(env)
    customizer(config)
    return config
  })
}
