import html from "html-loader!./index.html";
import css from "./index.css";
import stylus from "./demo.styl";
import bundle from "./hello.bundle.js";
import { wouldUse as treeshakingWouldUse } from "./treeshaking.js";
// import "./define.js"; // webpack.IgnorePlugin演示

// document.addEventListener("DOMContentLoaded", () => {
//   console.log("hello app!");
//   console.log("TCL: html", html);
// });

console.log("hello app!");
console.log("TCL: html", html);
console.log("TCL: css", css);
console.log("TCL: stylus", stylus);
bundle(file => {
  console.log("TCL: file.hello('bayes')", file.hello("bayes"));
});

console.log("TCL: treeshakingWouldUse()", treeshakingWouldUse());

console.log("lodash demo", _.chunk(["a", "b", "c", "d"], 2));
