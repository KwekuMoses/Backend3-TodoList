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

  for (let i = 0; i < listArray.length; i++) {
    console.log(listArray[i]);
  }

  //console.log("created " + listArray);
  return listArray.map((list) => {
    return (
      <div>
        {list[0]._id}
        <Createdlists>
          <HeaderComponent />
          <Todolistitem />
          <Todolistitem />
          <EditListButton />
          <UpdateListButton />
          <DeleteListButton />
        </Createdlists>
      </div>
    );
  });
}
