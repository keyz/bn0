# bn0 [![npm](https://img.shields.io/npm/v/bn0.svg)](https://www.npmjs.com/package/bn0)

`bn0`: `bn0`: babel-node with pre-loaded presets

```
$ npm install -g bn0
$ bn0 myFile.js
```

This is a wrapper of [`@babel/node`](https://www.npmjs.com/package/@babel/node) that provides a `bn0` binary. `bn0` is a `babel-node` alternative with some commonly used presets pre-loaded. It comes with:

- [`@babel/plugin-proposal-class-properties`](https://www.npmjs.com/package/@babel/plugin-proposal-class-properties)
- [`@babel/preset-env`](https://www.npmjs.com/package/@babel/preset-env)
- [`@babel/preset-flow`](https://www.npmjs.com/package/@babel/preset-flow)
- [`@babel/preset-react`](https://www.npmjs.com/package/@babel/preset-react)

## Why?

First of all, it's no different than `babel-node` so don't use it in production.

Say you wanna quickly _prototype_ some stuff using the latest JavaScript features, but:

1. Installing `@babel/cli` and presets globally is [a bad idea](https://babeljs.io/docs/usage/cli/)
2. Setting up a new project and adding `@babel/core`, `@babel/cli`, `@babel/preset-...` dependencies takes too much time

Got it? `bn0` requires no configuration and doesn't pollute your local `require/import` calls. Just run your file with `bn0 myFile.js`, or use `bn0` itself for a REPL.
