
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello from pure Node.js HTTP Server');
    res.end();
});

server.listen(8080, () => {
    console.log('Server running at http://localhost:8080');
});
