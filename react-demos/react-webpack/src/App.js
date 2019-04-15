import React, { Component } from "react";
import MyButton from "./Button";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <MyButton>click me!</MyButton>
      </div>
    );
  }
}

export default App;
