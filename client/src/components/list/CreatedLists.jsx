import React, { useContext } from "react";
import Todolistitem from "./tasks/Todolistitem";
import styled from "styled-components";
import HeaderComponent from "./HeaderComponent";
import DeleteListButton from "./buttons/DeleteListButton";
import EditListButton from "./buttons/EditListButton";
import UpdateListButton from "./buttons/UpdateListButton";
import { UserInputContext } from "../../contexts/UserInputContext";
import CreateListButton from "./buttons/CreateListButton";
import TaskCreatorComponent from "./tasks/TaskCreatorComponent";

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
        <Todolistitem />
        <TaskCreatorComponent />
        <EditListButton />
        <UpdateListButton />
        <DeleteListButton />
      </Createdlists>
    );
  });
}
