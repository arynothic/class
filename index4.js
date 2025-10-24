import fs from 'fs';
const write = fs.createWriteStream('test.txt', 'utf8');
write.write('Hello, world!');
write.end();




// try to read and write file in sync and async ways
// compress and decompress a file
