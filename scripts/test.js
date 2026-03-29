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

const hasWatchFlag = argv.some(arg => (
  arg === '--watch' ||
  arg === '--watchAll' ||
  arg === '--watchAll=false' ||
  arg.indexOf('--watchAll=') === 0
));

// Default to watch mode locally unless caller already specified watch behavior
if (!process.env.CI && argv.indexOf('--coverage') < 0 && !hasWatchFlag) {
  argv.push('--watch');
}


jest.run(argv);
