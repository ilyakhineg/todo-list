import React from "react";
import { Header } from "../header";
import { Footer } from "../footer";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { default } from "react-redux/lib/utils/Subscription";

const commonStyles = css`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;

const StyledMain = styled.main`
  ${commonStyles}
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 100px);
  background-color: #fdf088;
`;

export const Layout = ({ children }) => {
  console.log("1");
  return (
    <div>
      <Header />
      <StyledMain>{children}</StyledMain>
      <Footer />
    </div>
  );
};
