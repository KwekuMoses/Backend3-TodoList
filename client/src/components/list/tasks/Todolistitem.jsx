import React from "react";
import styled from "styled-components";

const TodoListWrapper = styled.div`
  background-color: #ffffff;
  border: 2px solid red;
`;

export default function Todolistitem(props) {
  return (
    <TodoListWrapper>
      <p>THE ITEM WILL APPEAR HERE</p>
    </TodoListWrapper>
  );
}
