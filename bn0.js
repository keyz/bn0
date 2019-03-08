#!/usr/bin/env node

const spawn = require('cross-spawn');
const path = require('path');

const args = process.argv.slice(2);

const babelNode = path.resolve(__dirname, 'node_modules', '.bin', 'babel-node');

const presets = [
  '@babel/preset-env',
  '@babel/preset-flow',
  '@babel/preset-react',
]
  .map(name => path.resolve(__dirname, 'node_modules', name))
  .join(',');

const plugins = ['@babel/plugin-proposal-class-properties']
  .map(name => path.resolve(__dirname, 'node_modules', name))
  .join(',');

const nonOverridableArgs = [
  '--presets',
  presets,
  '--plugins',
  plugins,
  '--no-babelrc',
  '--',
];

const result = spawn.sync(babelNode, [...nonOverridableArgs, ...args], {
  stdio: 'inherit',
});

process.exit(result.status);
