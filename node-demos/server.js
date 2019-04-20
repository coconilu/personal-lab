const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200);
    res.end("hello node server");
  })
  .listen(3434);

console.log("server will start!");

// 通过4545端口开启chrome调试： node --inspect=127.0.0.1:4545 server.js
