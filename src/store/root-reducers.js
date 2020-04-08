import { combineReducers } from 'redux';
import { toDoListsReducer } from './todo-lists/reducer';

export const rootReducers = combineReducers({ todoLists: toDoListsReducer });
