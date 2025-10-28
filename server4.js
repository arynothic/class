const http = require('http');
const fs = require('fs');
const zlib = require('zlib');

const PORT = 3000;

http.createServer((req, res) => {

  fs.readFile('index.html', (err, data) => {

    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('File not found');
      return;
    }

    const acceptEncoding = req.headers['accept-encoding'] || '';

    if (acceptEncoding.includes('gzip')) {
      res.writeHead(200, { 'Content-Encoding': 'gzip', 'Content-Type': 'text/html' });
      const gzip = zlib.createGzip();
      gzip.end(data);
      gzip.pipe(res);
    } 
    else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
  
}).listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});