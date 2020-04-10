import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducers } from './root-reducers';

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
