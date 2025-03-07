const http = require('http');

const server = http.createServer((req, res) => {
  // res.writeHead(200, {'Content-type': 'text/plain'});
  // res.end('Hello World!\n')

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain'); // text/html würde den Text als html interpretiert werden lassen
  res.end(`Hello World\n`);
  console.log(req.headers['user-agent']);
})

server.listen(8081, '127.0.0.1', () => {
  console.log('Server running at http://127.0.0.1:8081');

})