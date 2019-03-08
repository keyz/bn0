#!/usr/bin/env node

const spawn = require('cross-spawn');
const path = require('path');

const args = process.argv.slice(2);

const nodemon = path.resolve(__dirname, 'node_modules', '.bin', 'nodemon');

const nonOverridableArgs = ['--exec', 'bn0'];

const result = spawn.sync(nodemon, [...nonOverridableArgs, ...args], {
  stdio: 'inherit',
});

process.exit(result.status);
