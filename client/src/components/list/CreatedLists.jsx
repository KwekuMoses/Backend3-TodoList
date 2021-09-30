import React, { useContext } from "react";
import Todolistitem from "./listitem/Todolistitem";
import styled from "styled-components";
import HeaderComponent from "./listitem/HeaderComponent";
import DeleteListButton from "./buttons/DeleteListButton";
import EditListButton from "./buttons/EditListButton";
import UpdateListButton from "./buttons/UpdateListButton";
import { UserInputContext } from "../../contexts/UserInputContext";
import CreateListButton from "./buttons/CreateListButton";

const Createdlists = styled.div`
  border: 2px solid black;

  display: grid;
  grid-row-gap: 70px;
  height: auto;
  place-items: center;
  padding: 50px;
  grid-row: 1;
`;

export default function CreatedLists() {
  //* GET request
  const { listArray } = useContext(UserInputContext);
  console.log("created " + listArray);
  return listArray.map((list) => {
    return (
      <Createdlists>
        {list.task}
        <HeaderComponent />
        <Todolistitem />
        <Todolistitem />
        <EditListButton />
        <UpdateListButton />
        <DeleteListButton />
      </Createdlists>
    );
  });
}
