import React, { useState } from 'react';
import styled from '@emotion/styled';

const StyledDiv = styled.div`
	display: flex;
	width: 320px;
	margin: 0;
`;
const StyledInput = styled.input`
	width: 250px;
	height: 20px;
	padding: 0 3px;
	border: none;
	outline: none;
`;
const StyledButton = styled.button`
	margin: 0;
	padding: 0 3px;
	font-weight: 600;
	font-size: 22px;
	line-height: 22px;
	text-transform: uppercase;
	background-color: transparent;
	border: none;
	outline: none;
`;

export const ToDoListAddTask = ({ addTask }) => {
	const [value, setValue] = useState('');

	const addTaskHandler = () => {
		addTask(value);
		setValue('');
	};

	return (
		<StyledDiv>
			<StyledInput value={value} placeholder='input task name' onChange={e => setValue(e.target.value)} />
			<StyledButton onClick={addTaskHandler}>add</StyledButton>
		</StyledDiv>
	);
};
