import styled from '@emotion/styled';
import React, { useState, useEffect } from 'react';
import { ToDoListItem } from './todo-list-item';
import { ToDoListAddTask } from './todo-list-add-task';

export const ToDoList = () => {
	const [state, setState] = useState([]);

	useEffect(() => {
		const data = [
			{
				id: 0,
				name: 'new task',
			},
		];

		setState([...state, ...data]);
	}, [state]);

	const addTask = value => {
		const obj = { id: Date.now(), name: value };
		setState([...state, obj]);
	};

	const removeTask = id => {
		const newList = state.filter(item => item.id !== id);
		setState(newList);
	};

	const StyledDiv = styled.div`
		display: flex;
		flex-direction: column;
		min-width: 280px;
		min-height: 300px;
		margin-bottom: 10px;
		padding: 20px;
		background-color: #eee;
		border: none;
	`;

	return (
		<div>
			<StyledDiv>
				{state.map(item => (
					<ToDoListItem key={item.id} id={item.id} removeTask={removeTask}>
						{item.name}
					</ToDoListItem>
				))}
			</StyledDiv>
			<ToDoListAddTask addTask={addTask} />
		</div>
	);
};
