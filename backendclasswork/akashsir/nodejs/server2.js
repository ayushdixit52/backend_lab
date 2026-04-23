const http=require("http");
const fs=require("fs");

http.createServer((req,res)=>{
    if(req.url=="/favicon.ico"){
        res.writeHead(204);
        res.end();
        return;
    }
    res.end("welcome to nodejs server");

}).listen(4000,"localhost",()=>{
    console.log("server is listening on http://localhost:4000");
})
