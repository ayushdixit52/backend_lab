const http = require('http');

const PORT = process.env.PORT || 8080;

http.createServer((req, res) => {
    res.end(`Server running on port ${PORT}`);
}).listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
