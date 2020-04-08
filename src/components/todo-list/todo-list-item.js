import React from "react";
import styled from "@emotion/styled";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 30px;
  background-color: #c7faef;
  padding: 0 3px;
  margin-bottom: 5px;
`;
const StyledButton = styled.button`
  transform: rotate(45deg);
  background-color: transparent;
  border: none;
  color: red;
  font-size: 30px;
  line-height: 30px;
  font-weight: 600;
  outline: none;
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
