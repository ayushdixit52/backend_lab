const http = require('http');
const url = require('url');

const PORT = 8080;

const server = http.createServer((req, res) => {

    const parsedUrl = url.parse(req.url, true);

    
    console.log( req.method);
    console.log( req.url);
    console.log( req.headers);
    console.log( parsedUrl.query);

  

   
    if (req.method === 'GET') {
        res.end('GET request received successfully');
    } 
    else if (req.method === 'POST') {
        res.end('POST request received successfully');
    } 
    else {
        res.end('Other request type received');
    }
});

server.listen(PORT, () => {
    console.log(`Debug server running on port ${PORT}`);
});
