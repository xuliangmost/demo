'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';
process.env.PUBLIC_URL = '';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

// Ensure environment variables are read.
require('../config/env');

const jest = require('jest');
const argv = process.argv.slice(2);

const hasWatchFlag = argv.indexOf('--watch') >= 0 || argv.indexOf('--watchAll') >= 0;
const disableWatch = argv.indexOf('--watch=false') >= 0 || argv.indexOf('--watchAll=false') >= 0;

// Watch unless on CI, in coverage mode, or watch was explicitly disabled.
if (!process.env.CI && argv.indexOf('--coverage') < 0 && !hasWatchFlag && !disableWatch) {
  argv.push('--watch');
}


jest.run(argv);
