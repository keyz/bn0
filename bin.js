#!/usr/bin/env node

const spawn = require('cross-spawn');
const path = require('path');

const args = process.argv.slice(2);

const babelNode = path.resolve(__dirname, 'node_modules', '.bin', 'babel-node');

const nonOverridableArgs = [
  '--presets',
  '@babel/preset-env,@babel/preset-flow,@babel/preset-react',
  '--plugins',
  '@babel/plugin-proposal-class-properties',
  '--no-babelrc',
  '--',
];

const result = spawn.sync(babelNode, [...nonOverridableArgs, ...args], {
  stdio: 'inherit',
  cwd: __dirname,
});

process.exit(result.status);
