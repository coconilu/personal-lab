const md5 = require("./md5")
const crypto = require("crypto")

const testStr = "hello world"

console.log(md5.hex_md5(testStr));
console.log(crypto.createHash('md5').update(testStr).digest("hex"))

