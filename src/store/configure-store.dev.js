import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducers } from './root-reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export function configureStoreDev() {
	const middlewares = [thunk];
	const middlewareEnhancer = applyMiddleware(...middlewares);
	const composeEnchancers = composeWithDevTools({
		trace: true,
		traceLimit: 25,
	});
	const store = createStore(rootReducers, composeEnchancers(middlewareEnhancer));

	return store;
}
