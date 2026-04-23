// const http = require("http");
// const fs = require("fs");
// const url = require("url");
// const path = require("path");

// http.createServer((req, res) => {
//     const myUrl = url.parse(req.url, true);
//     let pathname = myUrl.pathname;
//     const date = new Date();

//     fs.appendFile("about.txt", `${date}: ${pathname} requested\n`, () => {});

   
//     if (pathname === "/") pathname = "/home";

//     let filePath = path.join(__dirname, "pages", `${pathname}.html`);

//     fs.readFile(filePath, "utf-8", (err, data) => {
//         if (err) {
//             // 404 page
//             const errorPage = path.join(__dirname, "pages", "404.html");
//             res.writeHead(404, { "Content-Type": "text/html" });
//             fs.readFile(errorPage, "utf-8", (_, errorData) => {
//                 res.end(errorData);
//             });
//         } else {
//             res.writeHead(200, { "Content-Type": "text/html" });
//             res.end(data);
//         }
//     });

// }).listen(8000, "localhost", () => {
//     console.log("server is listening on http://localhost:8000");
// });
