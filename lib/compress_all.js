var zlib = require('zlib'),
    lzf = require('lzf');

/**
 * Lzf class
 */
function Lzf () {

}

Lzf.compress = function(dataBuffer, callBack) {
    var result = null;
    result = lzf.compress(dataBuffer);
    return callBack(result);
};

Lzf.decompress = function(dataBuffer, callBack) {
    var result = null;
    result = lzf.decompress(dataBuffer);
    return callBack(result);
};


/**
 * Gzip class
 */
function Gzip () {

}

Gzip.gzip = function(dataBuffer, callBack) {
    zlib.gzip(dataBuffer, function(err, result) {
        if (!!err) {
            return callBack(null);
        }
        return callBack(result);
    });
};

Gzip.unzip = function(dataBuffer, callBack) {
    zlib.unzip(dataBuffer, function(err, result) {
        if (!!err) {
            return callBack(null);
        }
        return callBack(result);
    });
};

Gzip.deflate = function(dataBuffer, callBack) {
    zlib.deflate(dataBuffer, function(err, result) {
        if (!!err) {
            return callBack(null);
        }
        return callBack(result);
    });
};

Gzip.inflate = function(dataBuffer, callBack) {
    zlib.inflate(dataBuffer, function(err, result) {
        if (!!err) {
            return callBack(null);
        }
        return callBack(result);
    });
};

Gzip.deflateRaw = function(dataBuffer, callBack) {
    zlib.deflateRaw(dataBuffer, function(err, result) {
        if (!!err) {
            return callBack(null);
        }
        return callBack(result);
    });
};

Gzip.inflateRaw = function(dataBuffer, callBack) {
    zlib.inflateRaw(dataBuffer, function(err, result) {
        if (!!err) {
            return callBack(null);
        }
        return callBack(result);
    });
};


module.exports.Lzf = Lzf;
module.exports.Gzip = Gzip;
