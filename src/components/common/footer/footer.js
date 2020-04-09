import React from 'react';
import styled from '@emotion/styled';

const StyledFooter = styled.footer`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 50px;
	color: #fff;
	font-size: 20px;
	background-color: #ec9a89;
`;

export const Footer = () => {
	return (
		<StyledFooter>
			<div>footer</div>
		</StyledFooter>
	);
};
