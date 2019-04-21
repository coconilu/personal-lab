const path = require("path");

module.paths = module.paths.concat(path.join(__dirname, "./"));

exports.a = 1;

console.log(`TCL: exports`, exports);
console.log(`TCL: module`, module);

console.log(`TCL: require.main === module`, require.main === module);
