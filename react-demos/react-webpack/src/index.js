import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const ReactContainer = document.createElement("div");
document.body.appendChild(ReactContainer);

ReactDOM.render(<App />, ReactContainer);
