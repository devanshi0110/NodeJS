const fs = require('fs');
const zlib = require('zlib');
fs.createReadStream('./myfile.txt.gz').pipe(zlib.createGunzip()).pipe(fs.createWriteStream('./file.txt'));
console.log('File Decompressed Successfully..');