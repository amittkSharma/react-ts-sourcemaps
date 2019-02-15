const program = require('commander')
const cra = require('../scripts/select-cra-app')

var craVersion = 'cra'
var actionType = 'start'

function startProcess(craVersion, actionType) {
  cra.selectCra(craVersion, actionType)
}

program
  .option(
    '--craVersion <value>',
    `[optional] It is the create react app version name used in the application. craVersion takes either 'cra' or 'cra2'.
                Default value is 'cra'. (cra: Create React App, cra2: Create React App2)`,
    getCraVersionValue,
  )
  .option(
    '--actionType <value>',
    `[required] Action that needs to be initiated. actionType takes either 'start' or 'build'. Default value is 'start'`,
    getActionValue,
  )
  .on('--help', () => {
    console.log()
    console.log(`    Example:-
            $react-ts-sourcemaps-git --craVersion <'cra' | 'cra2'> --actionType <'start' | 'build'>`)
  })
  .parse(process.argv)

function getActionValue(val) {
  actionType = val
}

function getCraVersionValue(val) {
  craVersion = val
}

module.exports = {
  run: function() {
    console.info(`Intializing: "${actionType}" process using create react app: "${craVersion}"`)
    startProcess(craVersion, actionType)
  },
}
