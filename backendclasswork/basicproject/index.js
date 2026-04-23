const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");

http.createServer((req, res) => {
    const myUrl = url.parse(req.url, true);
    const pathname = myUrl.pathname;
    const date = new Date();

    fs.appendFile("about.txt", `${date}: ${pathname} requested\n`, () => {});

    let filePath = "";

    if (pathname === "/" || pathname === "/home") {
        filePath = "home.html";
    } 
    else if (pathname === "/about") {
        filePath = "about.html";
    } 
    else if (pathname === "/contact") {
        filePath = "contact.html";
    } 
    else if (pathname === "/services") {
        filePath = "services.html";
    } 
    
    else {
        filePath = "404.html";
    } 

    fs.readFile(path.join(__dirname,"component", filePath), (err, data) => {
        if (err) {
            
            return res.end("Server Error");
        }

        
        res.end(data);
    });

}).listen(5000, "localhost", () => {
    console.log("server is listening on http://localhost:5000");
});
 
