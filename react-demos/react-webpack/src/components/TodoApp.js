import React, { Component } from "react";
import { connect } from "react-redux";
import TodoItem from "./components/TodoItem";

import { addTodo, doneTodo, removeTodo } from "../dispatch/todoDispatch";

const mapStateToProps = state => {
  return {
    todoList: state.todoList
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: TodoItem => dispatch(addTodo(TodoItem)),
    doneTodo: index => dispatch(doneTodo(index)),
    removeTodo: index => dispatch(removeTodo(index))
  };
};

class TodoApp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const todoList = this.props.todoList;
    return (
      <div>
        {todoList.map(todo => {
          <TodoItem checktStatus={todo.checkStatus} todoItem={todo.todoItem} />;
        })}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp);
