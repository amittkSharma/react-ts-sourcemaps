const craApp = require('./customized-config-cra')
const cra2App = require('./customized-config-cra2')
const color = require('ansi-colors')

module.exports = {
  selectCra: function (craVersion, actionType) {
    console.log(color.greenBright(`Selected Create React App version is: ${craVersion}`))
    switch (craVersion) {
      case 'cra':
        craApp.startProcess(actionType)
        break
      case 'cra2':
        cra2App.startCra2Process(actionType)
        break
      default:
        console.error(color.redBright('Create React App supports only:  "cra", "cra2"'))
        process.exit(-1)
    }
  },
}
