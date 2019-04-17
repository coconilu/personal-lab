import React, { Component } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <p>
        <input type="checkbox" checked={this.props.checktStatus}>
          {this.props.todoItem}
        </input>
      </p>
    );
  }
}
