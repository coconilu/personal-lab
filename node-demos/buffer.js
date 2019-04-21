Buffer.poolSize = 5120;
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

// const bf1 = Buffer.from([1, 2, 3, 4]);
const bf1 = Buffer.from("Hello 掘金");

// const ua1 = new Uint32Array(bf1);
const ua1 = Uint32Array.from("Hello 掘金");
console.log(`TCL: bf1`, bf1);
console.log(`TCL: ua1`, ua1);
console.log(`TCL: bf1.byteLength`, bf1.byteLength);
console.log(`TCL: bf1.byteLength`, ua1.byteLength);
console.log(`TCL: bf1.BYTES_PER_ELEMENT`, bf1.BYTES_PER_ELEMENT);
console.log(`TCL: ua1.BYTES_PER_ELEMENT`, ua1.BYTES_PER_ELEMENT);
console.log(`TCL: bf1.buffer`, bf1.buffer);
console.log(`TCL: ua1.buffer`, ua1.buffer);
console.log(`TCL: bf1.buffer.byteLength`, bf1.buffer.byteLength);
console.log(`TCL: ua1.buffer.byteLength`, ua1.buffer.byteLength);
console.log(`TCL: bf1.byteOffset`, bf1.byteOffset);
console.log(`TCL: ua1.byteOffset`, ua1.byteOffset);
