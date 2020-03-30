import { TODO_LIST_PENDING, TODO_LIST_FETCHED, TODO_LIST_ERROR } from "./types";

export const toDoListReducer = (state, action) => {
  switch (action.type) {
    case TODO_LIST_PENDING:
      return { ...state, pending: true, fetched: false };
    case TODO_LIST_FETCHED:
      return { ...state, pending: false, fetched: true, data: action.payload };

    default: return state
  }
};