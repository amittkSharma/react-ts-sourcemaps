const craApp = require('./customized-config-cra')
const cra2App = require('./customized-config-cra2')

module.exports = {
  selectCra: function (craType, processType) {
    console.log(`Select CRA ... ${craType}- ${processType}`)
    switch (craType) {
      case 'cra':
        craApp.startProcess(processType);
        break;
      case 'cra2':
        cra2App.startProcess2(processType);
        break;
      default:
        console.log('Create React App supports only:  "cra", "cra2"');
        process.exit(-1);
    }
  }
}
