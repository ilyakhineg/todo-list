import React from "react";
import { Header } from "../header"
import { Footer } from "../footer";
import styled from "@emotion/styled";
import { css } from '@emotion/core'

const commonStyles = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;

const StyledMain = styled.main`
  ${commonStyles}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 100px);
  background-color: #FDF088;
`;

export const Layout = ({children}) => {

  return (
    <div>
      <Header/>
      <StyledMain>
        {children}
      </StyledMain>
      <Footer/>
    </div>
  )
};