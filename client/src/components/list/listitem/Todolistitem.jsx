import React from "react";
import styled from "styled-components";
import DeleteItemButton from "./buttons/DeleteItemButton";
import EditButton from "./buttons/EditButton";
import DateComponent from "./datecomponent/DateComponent";
const TodoListitem = styled.div`
  background-color: yellow;
  border: 2px solid red;
`;
export default function Todolistitem() {
  return (
    <TodoListitem>
      TODOLIST ITEM
      <DateComponent />
      <EditButton />
      <DeleteItemButton />
    </TodoListitem>
  );
}
