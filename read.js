import fs from 'fs';
const filePath = 'test.json';
const content ={
    name: 'arynothic',
    age: 20,
}
const content1 = JSON. stringify(content, null, 2)
fs.writeFile(filePath, content1, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('data entered')
    }
});



