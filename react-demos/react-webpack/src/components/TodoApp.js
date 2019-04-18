import React, { Component } from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";

import { addTodo, doneTodo, removeTodo } from "../dispatch/todoDispatch";

const mapStateToProps = state => {
  return {
    todoList: state.todoList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: todoItem => dispatch(addTodo(todoItem)),
    doneTodo: index => dispatch(doneTodo(index)),
    removeTodo: index => dispatch(removeTodo(index))
  };
};

class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItem: ""
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    this.props.addTodo(this.state.todoItem);
  }

  handleChange(e) {
    this.setState({
      todoItem: e.target.value
    });
  }

  render() {
    const todoList = this.props.todoList;
    console.log("TCL: TodoApp -> render -> this.props", this.props);
    return (
      <div>
        <p>
          <input
            type="text"
            value={this.state.todoItem}
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick}>add todo</button>
        </p>
        {todoList.map((todo, index) => (
          <TodoItem
            checkStatus={todo.checkStatus}
            todoItem={todo.todoItem}
            todoIndex={index}
            key={index}
          />
        ))}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);
