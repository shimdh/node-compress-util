node-compress-util
==================

It can help to use several compress and decompress modules together.

Example
-------
```js
var compressTool = require('node-compress-util');
var Lzf = new compressTool.Lzf();
var Gzip = new compressTool.Gzip();

```
