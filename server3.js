const fs = require('fs')
const https = require('http')
http.createServer((req, res) => {
    fs.readFile('test.txt','utf-8',(err, data) => {
        if(err){
            res.end("err")
        }
        else{
            res.end(data)
        }
    })
}).listen(3000, () => {
    console.log("server is running")
})