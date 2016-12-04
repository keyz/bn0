# babel-node-bin-stage-0 ![npm](https://img.shields.io/npm/v/babel-node-bin-stage-0.svg)
`bn0`: an alternative babel-node binary with pre-loaded nightly presets

```
npm install -g babel-node-bin-stage-0
```

This is a fork of [`babel-cli`](https://www.npmjs.com/package/babel-cli) that provides nothing but a `bn0` binary. `bn0` is a `babel-node` alternative with all nightly presets pre-loaded. It comes with:
- [`babel-preset-latest`](https://www.npmjs.com/package/babel-preset-latest)
- [`babel-preset-react`](https://www.npmjs.com/package/babel-preset-react)
- [`babel-preset-stage-0`](https://www.npmjs.com/package/babel-preset-stage-0)

## Why?
First of all, it's no different than `babel-node` so don't use it in production.

Say you wanna quickly _prototype_ some stuff using the latest JavaScript features, but:

1. Installing `babel-cli` and presets globally is [a bad idea](https://babeljs.io/docs/usage/cli/)
2. Setting up a new project and adding `babel-core`, `babel-cli`, `babel-preset-...` dependencies takes too much time

Got it? `bn0` requires no configuration and doesn't pollute your local `require/import` calls. Just run your file with `bn0 myfile.js`, or use `bn0` itself for a REPL.
