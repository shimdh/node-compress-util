var zlib = require('zlib'),
    lzf = require('lzf');


function Lzf () {

}

Lzf.compress = function(callBack, dataBuffer) {
    var result = null;
    result = lzf.compress(dataBuffer);
    return callBack(result);
};

Lzf.decompress = function(callBack, dataBuffer) {
    var result = null;
    result = lzf.decompress(dataBuffer);
    return callBack(result);
};


function Gzip () {

}

Gzip.gzip = function(callBack, dataBuffer) {
    zlib.gzip(dataBuffer, function(err, result) {
        if (!!err) {
            return callBack(null);
        }
        return callBack(result);
    });
};

Gzip.unzip = function(callBack, dataBuffer) {
    zlib.unzip(dataBuffer, function(err, result) {
        if (!!err) {
            return callBack(null);
        }
        return callBack(result);
    });
};

Gzip.deflate = function(callBack, dataBuffer) {
    zlib.deflate(dataBuffer, function(err, result) {
        if (!!err) {
            return callBack(null);
        }
        return callBack(result);
    });
};

Gzip.inflate = function(callBack, dataBuffer) {
    zlib.inflate(dataBuffer, function(err, result) {
        if (!!err) {
            return callBack(null);
        }
        return callBack(result);
    });
};

Gzip.deflateRaw = function(callBack, dataBuffer) {
    zlib.deflateRaw(dataBuffer, function(err, result) {
        if (!!err) {
            return callBack(null);
        }
        return callBack(result);
    });
};

Gzip.inflateRaw = function(callBack, dataBuffer) {
    zlib.inflateRaw(dataBuffer, function(err, result) {
        if (!!err) {
            return callBack(null);
        }
        return callBack(result);
    });
};


module.exports.Lzf = Lzf;
module.exports.Gzip = Gzip;
