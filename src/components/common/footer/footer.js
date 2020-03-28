import React from "react";
import styled from "@emotion/styled";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
  background-color: #EC9A89;
  color: #ffffff;
  font-size: 20px;
`;

export const Footer = () => {
  return (
    <StyledFooter>
      <div>
        footer
      </div>
    </StyledFooter>
  )
};