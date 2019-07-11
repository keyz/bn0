#!/usr/bin/env node

const spawn = require('cross-spawn');
const path = require('path');

let args = process.argv.slice(2);

let shouldTypeCheck = false;

if (args.includes('--typecheck')) {
  shouldTypeCheck = true;
  args = args.filter(x => x !== '--typecheck');
}

const tsNode = path.resolve(__dirname, 'node_modules', '.bin', 'ts-node');

const nonOverridableArgs = (shouldTypeCheck ? [] : ['--transpile-only']).concat([
  '--skip-ignore',
  '--project',
  path.resolve(__dirname, 'tsconfig.json'),
  '--',
]);

const result = spawn.sync(tsNode, [...nonOverridableArgs, ...args], {
  stdio: 'inherit',
});

process.exit(result.status);
