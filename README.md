# @northbrook/rollup

> Rollup your Northbrook packages

A simple [Northbrook](https://github.com/northbrookjs/northbrook) plugin for 
running rollup in your packages. It works by looking for a `rollup.config.js`
in each package directory, and calls `rollup -c` for you. 

If a package does not have a `rollup.config.js` it will simply be skipped over 
assuming that it does not need a build system. 

## Let me have it 

```sh
npm install --save-dev @northbrook/rollup
# or 
yarn add --dev @northbrook/rollup 
```

## Cofiguration 
```js
//northbrook.js 

module.exports = {
  plugins: [
    'rollup'
  ]
}

```
