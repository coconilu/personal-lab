const http = require("http");
const cluster = require("cluster");
const numCPUs = require("os").cpus().length;
const util = require("util");

const clusterCount = {};

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);
  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
  cluster.on("online", worker => {
    console.log(`Worker ${worker.process.pid} started`);
  });
} else {
  http
    .createServer((req, res) => {
      clusterCount[`worker_${process.pid}`] += 1;
      res.writeHead(200);
      res.end("hello node server");
    })
    .listen(5757);
  clusterCount[`worker_${process.pid}`] = 0;
}

setTimeout(() => {
  console.log(`TCL: util.inspect(clusterCount)`, util.inspect(clusterCount));
}, 60 * 1000);
