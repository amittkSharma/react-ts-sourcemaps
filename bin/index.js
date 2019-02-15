#!/usr/bin/env node

'use strict'

process.title = 'react-ts-sourcemaps-git'

process.on('uncaughtException', function(err) {
  console.error('Caught exception:\n', err.stack)
})

var startupProcess = require('../src/index.js')
console.log(`Starting build process with package: '${process.title}'`)
startupProcess.run()
