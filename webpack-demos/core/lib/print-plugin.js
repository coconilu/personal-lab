const path = require("path");
const { printObject } = require(path.resolve(__dirname, "../../../lib/index.js"));
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
