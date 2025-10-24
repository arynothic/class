import fs from 'fs';

const filePath = 'a.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }
});