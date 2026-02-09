const http = require("http");
const fs = require("fs");
const url = require("url");

http.createServer((req, res) => {
    const myUrl = url.parse(req.url, true);
    const pathname = myUrl.pathname;
    const date = new Date();

    fs.appendFile("about.txt", `${date}: ${pathname} requested\n`, (err) => {
        if (err) console.log(err);
    });

    

    if (pathname === "/") {
        res.end("Welcome to the Node JS Home Page");
    } 
    else if (pathname === "/about") {
        res.end("Welcome to the About Us Page");
    } 
    else if (pathname === "/contact") {
        res.end("Welcome to the Contact Page");
    } 
    else {
        res.end("404 Page Not Found");
    }

}).listen(5000, "localhost", () => {
    console.log("server is listening on http://localhost:5000");
});
