const server = http.createServer((req,res) =>
{
    res.writeHead(200, {'content-type' : 'text/plain'})
    res.end("Hello this is NODE JS")
})

server.listen(3000,()=>{
    console.log("Server is running")
})