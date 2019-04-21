require("./buffer");
require("./moduleEnhance");

console.log(`TCL: exports`, exports);
console.log(`TCL: module`, module);
console.log(`TCL: require`, require);
console.log(`TCL: require.main`, require.main);

console.log(`TCL: require.main === module`, require.main === module);
