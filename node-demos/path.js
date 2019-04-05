const path = require("path");
const fs = require("fs");

const demoPathWin = "E:\\demo\\file.txt";
const demoPathPox = "/demo/file.txt";

/**
 * Path有posix和windows版本
 * 它们的区别在于路径内的分隔符(sep)、路径间的分隔符(delimiter)
 */
console.log(`TCL: path`, path);
const posixPath = path.posix;
console.log(`TCL: posixPath`, posixPath);
const winPath = path.win32;
console.log(`TCL: winPath`, winPath);

console.log("TCL: posixPath.sep", posixPath.sep);
console.log("TCL: winPath.sep", winPath.sep);

console.log("TCL: posixPath.delimiter", posixPath.delimiter);
console.log("TCL: winPath.delimiter", winPath.delimiter);

/**
 * Path API
 */
console.log("TCL: path.basename(demoPathWin);", path.basename(demoPathWin));
console.log("TCL: path.dirname(demoPathWin);", path.dirname(demoPathWin));
console.log("TCL: path.extname(demoPathWin);", path.extname(demoPathWin));
console.log("TCL: path.isAbsolute(demoPathWin);", path.isAbsolute(demoPathWin));
console.log("TCL: path.normalize(demoPathWin);", path.normalize(demoPathWin));
console.log(
  `TCL: path.relative(demoPathWin, "D:\\demo");`,
  path.relative(demoPathWin, "D:\\demo")
);
console.log(
  `TCL: path.toNamespacedPath(demoPathWin);`,
  path.toNamespacedPath(demoPathWin)
);

const pathObj = path.parse(demoPathWin);
console.log("TCL: pathObj", pathObj);
const pathStr = path.format(pathObj);
console.log("TCL: pathStr", pathStr);

console.log(
  `TCL: path.join("E:\\", "demo", "file.txt");`,
  path.join("E:\\", "demo", "file.txt")
);
console.log(
  `TCL: path.resolve("E:\\", "demo", "D:\\", "demo", "file.txt");`,
  path.resolve("E:\\", "demo", "D:\\", "demo", "file.txt")
);

fs.stat(path.resolve("E:\\", "demo", "file.txt"), (err, stat) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(stat);
});
