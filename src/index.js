const argv = require('yargs').argv
const program = require('commander')
const startProcess = require('../scripts/customized-config')

function startReactProcess(processType) {
  startProcess.startProcess(processType)
}


program
  .option('--path', '[required] Path to package json for package under consideration')
  .on('--help', () => {
    console.log()
    console.log(`    Example:-
            $npm-license-tracker --path --isExcel`)
  })




module.exports = {
  run: function (path) {
    if (path == "" || path == null) {
      console.error(`No proper arguments are provided`)
    } else if (path.path === '--help') {
      program.outputHelp()
      return
    } else {
      console.info(`Paths to traverse:- ${path.processType}`);
      startReactProcess(path.processType);
    }
  }
}
