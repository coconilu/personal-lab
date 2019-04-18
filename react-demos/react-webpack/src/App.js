import React, { Component } from "react";
import MyButton from "./Button";
import TodoApp from "./components/TodoApp";

import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <MyButton>click me!</MyButton>
        <Provider store={store}>
          <TodoApp />
        </Provider>
      </div>
    );
  }
}

export default App;
