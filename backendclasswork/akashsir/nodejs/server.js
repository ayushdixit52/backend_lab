// const http=require("http");
// const serv=http.createServer((req,res)=>{
//     console.log(req.headers);
//     res.end("welcome to the page of node js");
// });
// serv.listen(8000,'localhost',()=>{
//     console.log("server is listening on http://localhost:8000");
// });

const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
    const date = new Date();

    if (req.url === "/favicon.ico") {
        res.writeHead(204);
        res.end();
        return;
    }

    fs.appendFile("log.txt", `${date}: new request recorded\n`, (err) => {
        if (err) console.log(err);
    });

    res.setHeader("Access-Control-Allow-Origin", "*");

    res.end("welcome to the page of node js");
}).listen(5000, "localhost", () => {
    console.log("server is listening on http://localhost:5000");
});


// url kal pdke aana h

