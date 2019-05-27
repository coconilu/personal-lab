import React, { Component } from "react";
import MyButton from "./Button";
import TodoApp from "./components/TodoApp";
import RouterExp from "./router";

import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  constructor(props) {
    super(props);
    this.alertText = "hello world";
    this.state = {
      alertText: "hello world!"
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.alertText = "hello Bayes!";
      this.setState({
        alertText: "hello Bayes!"
      });
    }, 5000);
  }
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <MyButton alertText={this.state.alertText}>click me!</MyButton>
        <Provider store={store}>
          <TodoApp />
        </Provider>
        <RouterExp />
      </div>
    );
  }
}

export default App;
