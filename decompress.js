const fs = require('fs')
const zlib = require('zlib')

//read the compress file
const readstream = fs.createReadStream('test.txt.gz')

//create a writeable string
const writestream = fs.createWriteStream('example.txt') //renaming file

//create a gunzip transformation
const gunzip = zlib.createGunzip()

//pipe: read>decompressing>write
readstream.pipe(gunzip).pipe(writestream)

console.log("File is decompressed")