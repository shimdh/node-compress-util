node-compress-util
==================

It can help to use several compress and decompress modules together.

Example
-------
```js
var compressTool = require('node-compress-util');
var Lzf = compressTool.Lzf;
var Gzip = compressTool.Gzip;

Lzf.compress(buffer, function() {

});

Gzip.compress(buffer, function() {
    
});

```
