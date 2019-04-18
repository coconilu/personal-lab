import React, { Component } from "react";
import { connect } from "react-redux";

import { addTodo, doneTodo, removeTodo } from "../dispatch/todoDispatch";

const mapDispatchToProps = dispatch => {
  return {
    doneTodo: index => dispatch(doneTodo(index)),
    removeTodo: index => dispatch(removeTodo(index))
  };
};
class TodoItem extends Component {
  constructor(props) {
    super(props);
		console.log("TCL: TodoItem -> constructor -> props", props)
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange() {
    this.props.doneTodo(this.props.todoIndex);
  }
  render() {
    return (
      <p>
        <input
          type="checkbox"
          checked={this.props.checkStatus}
          onChange={this.handleChange}
        />
        {this.props.todoItem}
      </p>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(TodoItem);
