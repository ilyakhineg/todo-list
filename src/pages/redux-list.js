import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToDos, clearToDos } from '../store/todo-lists/actions';

export const ReduxListPage = () => {
	const list = useSelector(state => state.todoLists.data);
	const pending = useSelector(state => state.todoLists.pending);
	const fetched = useSelector(state => state.todoLists.fetched);

	const dispatch = useDispatch();

	const loadData = () => {
		dispatch(addToDos());
	};

	const clearData = () => {
		dispatch(clearToDos());
	};

	return (
		<>
			<button onClick={loadData}>load</button>
			<button onClick={clearData}>clear</button>
			{!pending && !fetched && !list.length && <span>empty</span>}
			{pending && !fetched && <span>loading</span>}
			{!pending && fetched && <span>ready</span>}
			<div>
				{list.map(item => (
					<div>{item.title}</div>
				))}
			</div>
		</>
	);
};
