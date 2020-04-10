import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	height: 50px;
	color: #000;
	font-size: 20px;
	background-color: #afd79f;
`;
const StyledUl = styled.ul`
	display: flex;
	flex-direction: row;
	margin: 0;
	padding: 0;
`;
const StyledLi = styled.li`
	margin: 0 10px;
	font: 20px/2.5 sans-serif;
	font-weight: 600;
	text-transform: uppercase;
	list-style: none;
`;
const LinkStyles = styled(Link)`
	color: #000;
	text-decoration: none;
`;

export const Header = () => {
	return (
		<StyledHeader>
			<div>logo</div>
			<StyledUl>
				<StyledLi>
					<LinkStyles to='/'>Main page</LinkStyles>
				</StyledLi>
				<StyledLi>
					<LinkStyles to='/about'>About page</LinkStyles>
				</StyledLi>
				<StyledLi>
					<LinkStyles to='/blog/id1'>blog page</LinkStyles>
				</StyledLi>
				<StyledLi>
					<LinkStyles to='/blog/id2'>blog page 2</LinkStyles>
				</StyledLi>
				<StyledLi>
					<LinkStyles to='/redux-list'>redux list</LinkStyles>
				</StyledLi>
			</StyledUl>
		</StyledHeader>
	);
};
