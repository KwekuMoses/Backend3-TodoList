import React from "react";
import Todolistitem from "./listitem/Todolistitem";
import styled from "styled-components";
import HeaderComponent from "./listitem/HeaderComponent";
import DeleteListButton from "./buttons/DeleteListButton";
import UpdateListButton from "./buttons/UpdateListButton";
import SaveListButton from "./buttons/SaveListButton";

const Todolist = styled.div`
  background-color: pink;
  border: green;
  display: grid;
  grid-row-gap: 70px;
  height: auto;
  place-items: center;
  padding: 50px;
`;

export default function TodoList() {
  return (
    <Todolist>
      <HeaderComponent />
      <Todolistitem />
      <DeleteListButton />
      <UpdateListButton />
      <SaveListButton />
    </Todolist>
  );
}
