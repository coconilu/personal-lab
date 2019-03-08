const path = require("path");
const fs = require("fs");

console.log(
  path.resolve("E://", "cfs", "cm3", "upload", "t_k_ugcright_release")
);
console.log(path.resolve("/cfs", "cm3", "upload", "t_k_ugcright_release"));

fs.stat(
  path.resolve(
    "E://",
    "cfs",
    "cm3",
    "upload",
    "t_k_ugcright_release",
    "hello.txt"
  ),
  (err, stat) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(stat);
  }
);
