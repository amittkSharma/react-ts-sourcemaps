const argv = require('yargs').argv
const program = require('commander')
const selectCra = require('../scripts/select-cra-app')


function startReactProcess(craType, processType) {
  console.log('startReactProcess')
  selectCra.selectCra(craType, processType)
}


program
  .option('--compileType', '[required] Path to package json for package under consideration')
  .option('--craType', '[required] Path to package json for package under consideration')
  .on('--help', () => {
    console.log()
    console.log(`    Example:-
            $npm-license-tracker --path --isExcel`)
  })




module.exports = {
  run: function (args) {
    if (args == "" || args == null) {
      console.error(`No proper arguments are provided`)
    } else if (args.path === '--help') {
      program.outputHelp()
      return
    } else {
      console.info(`Cra Type:- ${args.cra}`);
      console.info(`Process Type:- ${args.processType}`);
      startReactProcess(args.cra, args.processType);
    }
  }
}
