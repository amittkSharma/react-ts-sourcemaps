#!/usr/bin/env node

'use strict'
const color = require('ansi-colors')
process.title = 'react-ts-sourcemaps-git'

process.on('uncaughtException', function (err) {
  console.error('Caught exception:\n', err.stack)
})

var startupProcess = require('../src/index.js')
console.log(color.yellowBright(`Starting build process with package: '${process.title}'`))
startupProcess.run()
