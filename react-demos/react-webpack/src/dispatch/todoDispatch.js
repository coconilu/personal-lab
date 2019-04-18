import todoActions from "../actions/index";

export function addTodo(todoItem) {
  return {
    type: todoActions.ADD_TODO,
    payload: {
      checkStatus: false,
      todoItem: todoItem
    }
  };
}

export function doneTodo(index) {
  return {
    type: todoActions.DONE_TODO,
    payload: {
      checkStatus: true,
      index: index
    }
  };
}

export function removeTodo(index) {
  return {
    type: todoActions.REMOVE_TODO,
    payload: {
      index: index
    }
  };
}
