const { printObject } = require("./print.js");
const fs = require("fs");

module.exports = class PrintPlugin {
  constructor(opitons) {}
  apply(compiler) {
    compiler.hooks.emit.tap("PrintPlugin", compilation => {
      const printStr = printObject(compilation);
      fs.writeFileSync("./compilation.txt", printStr);
    });
  }
};
