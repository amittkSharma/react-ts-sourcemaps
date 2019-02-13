#!/usr/bin/env node

'use strict';

process.title = 'react-ts-sourcemaps-git';

process.on('uncaughtException', function (err) {
  console.error('Caught exception:\n', err.stack);
});

var reactSourcemapsProcess = require('../src/index.js');
var cra = process.argv[2] ? process.argv[2] : 'cra';
var processType = process.argv[3] ? process.argv[3] : 'start';
var parameter = {
  cra,
  processType
}

console.log(`process type: ${parameter.processType} and create react app ${parameter.cra}`)

reactSourcemapsProcess.run(parameter);
