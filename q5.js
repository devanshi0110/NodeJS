const fs = require('fs');
const zlib = require('zlib');
fs.createReadStream('./myfile.txt').pipe(zlib.createGzip()).pipe(fs.createWriteStream('./myfile.txt.gz'));
console.log('File Compressed Successfully..');