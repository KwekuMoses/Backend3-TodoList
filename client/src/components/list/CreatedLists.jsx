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
  display: inline-block;
  border: 1px solid black;
  margin: 20px;
`;

export default function CreatedLists() {
  const { listArray } = useContext(UserInputContext);

  //console.log("created " + listArray);
  return listArray.map((list) => {
    return (
      <Createdlists id="CreatedList" key={list[0]._id}>
        <h3>LIST ID: {list[0]._id}</h3>
        <HeaderComponent listName={list[0].header} />
        <Todolistitem taskName={list[0].tasks} date={list[0].date} />
        <EditListButton />
        <UpdateListButton />
        <DeleteListButton />
      </Createdlists>
    );
  });
}
