const fs = require('fs')
const zlib = require('zlib')


//create a readable stream
const readstream = fs.createReadStream('test.txt')

//compressing the file
const writestream = fs.createWriteStream('test.txt.gz')


//creating a gzip transformation
const gzip = zlib.createGzip()

//pipe:read>compress>write
readstream.pipe(gzip).pipe(writestream)
console.log("hi")
