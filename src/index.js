const program = require('commander')
const cra = require('../scripts/select-cra-app')
const color = require('ansi-colors')

function startProcess(craVersion, actionType) {
  cra.selectCra(craVersion, actionType)
}

program
  .option(
    '--craVersion <value>',
    `[optional] It is the create react app version name used in the application. craVersion takes either 'cra' or 'cra2'.
                Default value is 'cra'. (cra: Create React App, cra2: Create React App2)`,
    'cra',
  )
  .option(
    '--actionType <value>',
    `[required] Action that needs to be initiated. actionType takes either 'start' or 'build'. Default value is 'start'`,
    'start',
  )
  .on('--help', () => {
    console.log()
    console.log(color.yellowBright(`    Example:-
            $react-ts-sourcemaps-git --craVersion <'cra' | 'cra2'> --actionType <'start' | 'build'>`))
  })
  .parse(process.argv)

module.exports = {
  run: function () {
    console.info(color.greenBright(
      `Intializing: "${program.actionType}" process using create react app: "${
        program.craVersion
      }"`,
    ))
    startProcess(program.craVersion, program.actionType)
  },
}
