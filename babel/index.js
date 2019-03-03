const babel = require("@babel/core");

const fs = require("fs");
const path = require("path");

// fs.readFile(path.resolve(__dirname, '../src/index.js'), 'utf8', (err, data) => {
//   if (err) { console.log(err); return}
//   console.log(data)

//   const result = babel.transform(data)

//   console.log("code", result.code);
//   console.log("map", result.map);
//   console.log("ast", result.ast);
// })

babel.transformFile(
  path.resolve(__dirname, "../src/index.js"),
  {
    ast: true,
    code: true,
    sourceMaps: true,
    compact: "auto",
    auxiliaryCommentBefore: "not me"
  },
  (err, result) => {
    if (err) {
      console.log(err);
      return;
    }

    console.log("code", result.code);
    console.log("map", result.map);
    console.log("ast", result.ast);
  }
);
