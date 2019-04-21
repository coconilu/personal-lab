// Readable Stream

const fs = require("fs");
const path = require("path");

function getReadableStreamSomehow() {
  return fs.createReadStream(path.resolve(__dirname, "./this.js"));
}

const rs = getReadableStreamSomehow();

let count = 0;

rs.on("close", function() {
  console.log("close event happen");
});

rs.on("data", function() {
  count += 1;
  console.log("data event happen");
  // rs.pause()
  // rs.resume()
})
  .on("end", function() {
    console.log("end event happen");
    console.log("count: ", count);
  })
  .on("error", function(err) {
    console.log("error event happen", err);
  })
  .on("readable", function() {
    // 表明流有新的动态：要么有新的数据，要么到达流的尽头。
    console.log("readable event happen");
  });

console.log("read start");

// Writeable Stream


