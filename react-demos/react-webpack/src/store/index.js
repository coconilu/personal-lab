import { createStore } from "redux";
import todoState from "../states/todoState";

import todoActions from "../actions/index";

export default createStore((state = todoState, action) => {
  switch (action.type) {
    case todoActions.ADD_TODO:
      return Object.assign({}, state, {
        todoList: [
          ...state.todoList,
          {
            todoItem: action.payload.todoItem,
            checkStatus: action.payload.checkStatus
          }
        ]
      });
    case todoActions.DONE_TODO:
      const tL = [...state.todoList];
      tL[action.payload.index]["checkStatus"] = !tL[action.payload.index]["checkStatus"];
      return Object.assign({}, state, {
        todoList: [...tL]
      });
    case todoActions.REMOVE_TODO:
      return Object.assign({}, state, {
        todoList: [
          ...state.todoList.slice(0, action.payload.index),
          ...state.todoList.slice(action.payload.index + 1)
        ]
      });
    default:
      return state;
  }
});
