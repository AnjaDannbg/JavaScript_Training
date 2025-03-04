const fs = require('fs');
const zlib = require('zlib');

const gzipUncompressor = zlib.createGunzip();

const inputStream = fs.createReadStream('products.html.gz');
const outputStream = fs.createWriteStream('products.html');
// inputStream.on('data', data => {
//     console.log(data.toString());
// });

inputStream.pipe(gzipUncompressor).pipe(outputStream);
