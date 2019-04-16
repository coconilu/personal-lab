// 通过字符串创建
const bufFromStr = Buffer.from("Hello 掘金");
console.log(bufFromStr);
console.log(bufFromStr.byteLength);
console.log(bufFromStr.BYTES_PER_ELEMENT);
console.log(bufFromStr.buffer);
console.log(bufFromStr.buffer.byteLength);
console.log(bufFromStr.byteOffset);

const buf1 = Buffer.from("1234");
const buf2 = Buffer.from("0123");
const buf3 = Buffer.from("1234");
const arr = [buf1, buf2];

console.log(arr.sort(Buffer.compare));
console.log(Buffer.compare(buf1, buf3));
console.log(Buffer.compare(buf2, buf3));
console.log(Buffer.compare(buf1, buf2));
