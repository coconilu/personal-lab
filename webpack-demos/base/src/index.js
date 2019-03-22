import css from "./index.css";
import hello from "./hello.txt";
import val from "./val";
import piece from "./assert/piece.jpg";
import sea from "./assert/sea.png";
import demoJson from "./demo.json";
import "./polyfill.exec";

document.addEventListener("DOMContentLoaded", e => {
  console.log("TCL: hello", hello);
  console.log("TCL: css", css);
  console.log("TCL: val", val);
  console.log("TCL: piece", piece);
  console.log("TCL: sea", sea);
  insertImg(piece);
  insertImg(sea);
  console.log("TCL: demoJson", demoJson);
});

function insertImg(src) {
  const img = document.createElement("img");
  img.src = src;
  img.height = "400";
  img.width = "400";
  document.documentElement.appendChild(img);
}
