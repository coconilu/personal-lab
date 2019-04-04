const { createStore } = require("redux");

ACT_TYPE = {
  ADD: "ACT_TYPE_ADD",
  REMOVE: "ACT_TYPE_REMOVE"
};

const stateDefault = {
  filter: "ALL",
  todos: []
};

function changeTodo(state = stateDefault, action) {
  switch (action.type) {
    case ACT_TYPE.ADD:
    default:
      return Object.assign({}, state, {
        todos: [
          ...state.todos,
          {
            text: action.text,
            completed: false
          }
        ]
      });
    case ACT_TYPE.REMOVE:
      return Object.assign({}, state, {
        todos: [
          ...state.todos.slice(0, action.index),
          ...state.todos.slice(action.index + 1)
        ]
      });
  }
}

const todoAPP = createStore(changeTodo);

todoAPP.subscribe(() => console.log("state change:", todoAPP.getState()));

todoAPP.dispatch({ type: ACT_TYPE.ADD, text: "sleep on time" });
todoAPP.dispatch({ type: ACT_TYPE.ADD, text: "eat on time" });
todoAPP.dispatch({ type: ACT_TYPE.ADD, text: "fitness on time" });
todoAPP.dispatch({ type: ACT_TYPE.ADD, text: "play on time" });

todoAPP.dispatch({ type: ACT_TYPE.REMOVE, index: 3 });
