import React from 'react';
import styled from '@emotion/styled';

const StyledDiv = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	height: 30px;
	margin-bottom: 5px;
	padding: 0 3px;
	background-color: #c7faef;
`;
const StyledButton = styled.button`
	color: red;
	font-weight: 600;
	font-size: 30px;
	line-height: 30px;
	background-color: transparent;
	border: none;
	outline: none;
	transform: rotate(45deg);
	&:hover {
		color: #ae0b00;
	}
`;

export const ToDoListItem = ({ children, removeTask, id }) => {
	return (
		<StyledDiv>
			{children}
			<StyledButton onClick={() => removeTask(id)}>+</StyledButton>
		</StyledDiv>
	);
};
