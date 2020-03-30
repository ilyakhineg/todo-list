import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { rootReducers } from "./root-reducers";

export function configureStore() {
  const middlewares = [thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const store = createStore(rootReducers, middlewareEnhancer);
  return store;
}
