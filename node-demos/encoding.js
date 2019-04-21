const iconv = require("iconv-lite");
const { TextEncoder, TextDecoder } = require("util");

const charset = "gbk";
const text = "hello world";

const iconvBuff = iconv.encode(text, charset);
console.log(`TCL: iconvBuff`, iconvBuff);

const encoder = new TextEncoder(charset);
const utilBuff = encoder.encode(text);
console.log(`TCL: utilBuff`, utilBuff);
