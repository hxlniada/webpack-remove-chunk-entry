# webpack-remove-chunk-entry
[![npm package](https://img.shields.io/npm/v/webpack-remove-chunk-entry.svg)](https://www.npmjs.org/package/webpack-remove-chunk-entry)
[![npm downloads](http://img.shields.io/npm/dm/webpack-remove-chunk-entry.svg)](https://www.npmjs.org/package/webpack-remove-chunk-entry)
> a plugin to help webpack to remove chunk's entry code

### install
```
npm install webpack-remove-chunk-entry --save-dev
```

### usage
```javascript
const RemoveChunkEntryPlugin = require('webpack-remove-chunk-entry');

plugins: [
    new RemoveChunkEntryPlugin({
        chunks: ['lib']
    })
]
```
