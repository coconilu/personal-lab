import css from "./index.css";
import hello from "./hello.txt";
import val from "./val";
import piece from "./assert/piece.jpg";
import sea from "./assert/sea.png";

document.addEventListener("DOMContentLoaded", e => {
  console.log("TCL: hello", hello);
  console.log("TCL: css", css);
  console.log("TCL: val", val);
  console.log("TCL: piece", piece);
  console.log("TCL: sea", sea);
  insertImg(piece);
  insertImg(sea);

  promiseDemo().then(str => console.log("TCL: str", str))
});

function insertImg(src) {
  const img = document.createElement("img");
  img.src = src;
  img.height = "400";
  img.width = "400";
  document.documentElement.appendChild(img);
}

function promiseDemo() {
  return new Promise((resolve, reject) => {
    resolve("hello promise")
  });
}
