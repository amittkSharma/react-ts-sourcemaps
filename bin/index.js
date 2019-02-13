#!/usr/bin/env node

'use strict';

process.title = 'react-sourcemaps-git';

process.on('uncaughtException', function (err) {
  console.error('Caught exception:\n', err.stack);
});

var reactSourcemapsProcess = require('../src/index.js');
var processType = process.argv[2];
var parameter = {
  processType
}

console.log(`Argument passed: ${parameter.processType}`)

reactSourcemapsProcess.run(parameter);
