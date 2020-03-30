import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducers } from "./rootReducers";


export function configureStore(preloadedState) {
  // return createStore(rootReducers, compose(applyMiddleware(thunk)));
  const middlewares = [thunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const store = createStore(rootReducers, preloadedState);
  return store
};