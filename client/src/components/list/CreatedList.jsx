import React from "react";
import Todolistitem from "./listitem/Todolistitem";
import styled from "styled-components";
import HeaderComponent from "./listitem/HeaderComponent";
import DeleteListButton from "./buttons/DeleteListButton";
import EditListButton from "./buttons/EditListButton";
import UpdateListButton from "./buttons/UpdateListButton";
import CreateListButton from "./buttons/CreateListButton";
const Createdlist = styled.div`
  border: 2px solid black;

  display: grid;
  grid-row-gap: 70px;
  height: auto;
  place-items: center;
  padding: 50px;
  grid-row: 1;
`;

export default function CreatedList() {
  //* GET request

  return (
    <Createdlist>
      <HeaderComponent />
      <Todolistitem />
      <Todolistitem />
      <EditListButton />
      <UpdateListButton />
      <DeleteListButton />
    </Createdlist>
  );
}
