import { TODO_LIST_CLEAR, TODO_LIST_FETCHED, TODO_LIST_PENDING } from './types';

export const addToDos = () => dispatch => {
	dispatch(addToDosPending());

	fetch(`https://jsonplaceholder.typicode.com/posts/`)
		.then(resolve => resolve.json())
		.then(resolve => {
			dispatch(addToDosSuccess(resolve));
		});
};

export const addToDosPending = () => ({ type: TODO_LIST_PENDING });
export const addToDosSuccess = data => ({
	type: TODO_LIST_FETCHED,
	payload: data,
});
export const clearToDos = () => ({ type: TODO_LIST_CLEAR });
