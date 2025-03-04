const fs = require('fs');
const zlib = require('zlib');

const gzipCompressor = zlib.createGzip();

const inputStream = fs.createReadStream('products.html');
const outputStream = fs.createWriteStream('products.html.gz');

inputStream.pipe(gzipCompressor).pipe(outputStream);

//createReadStream
//createWriteStream