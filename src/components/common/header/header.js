/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import { jsx, css } from '@emotion/core'
import { Link } from 'react-router-dom';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  background-color: #AFD79F;
  color: #000000;
  font-size: 20px;
`;
const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
`;
const StyledLi = styled.li`
  list-style: none;
  margin: 0 10px;
  font: bold 20px/2.5 sans-serif;
  text-transform: uppercase;
`;
const linkStyles = css`
  text-decoration: none;
  color: #000;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <div>
        logo
      </div>
      <StyledUl>
        <StyledLi>
          <Link
            css={linkStyles}
            to='/'
          >Main page</Link>
        </StyledLi>
        <StyledLi>
          <Link
            css={linkStyles}
            to='/about'
          >About page</Link>
        </StyledLi>
        <StyledLi>
          <Link
            css={linkStyles}
            to='/blog/id1'
          >blog page</Link>
        </StyledLi>
        <StyledLi>
          <Link
            css={linkStyles}
            to='/blog/id2'
          >blog page 2</Link>
        </StyledLi>
      </StyledUl>
    </StyledHeader>
  )
};