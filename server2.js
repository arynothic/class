const http = require('http')
http.createServer((req,res)=>{
    function add(a,b){
        return a+b
    }
    res.end(`This is ${add(4,5)}`)
}).listen(3000, ()=>{
    console.log("server is still running")
})