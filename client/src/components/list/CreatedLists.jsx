import React, { useContext, useState, useEffect } from "react";
import Todolistitem from "./tasks/Todolistitem";
import styled from "styled-components";
import HeaderComponent from "./HeaderComponent";
import DeleteListButton from "./buttons/DeleteListButton";
import EditListButton from "./buttons/EditListButton";
import UpdateListButton from "./buttons/UpdateListButton";
import { UserInputContext } from "../../contexts/UserInputContext";
import CreateListButton from "./buttons/CreateListButton";
import TaskCreatorComponent from "./tasks/TaskCreatorComponent";
import CreatedTaskComponent from "./tasks/CreatedTasksComponent";

const Createdlists = styled.div`
  display: inline-block;
  border: 1px solid black;
  margin: 20px;
`;

export default function CreatedLists() {
  const { listArray } = useContext(UserInputContext);
  const { list, setListId } = useContext(UserInputContext);
  const [fetchedData, setFetchedData] = useState([]);
  console.log(fetchedData);

  //console.log("created " + listArray);
  return listArray.map((list) => {
    return (
      <Createdlists id="CreatedList" key={list[0]._id}>
        <h3>LIST ID: {list[0]._id}</h3>
        <HeaderComponent listName={list[0].header} />
        {/* <Todolistitem /> */}
        <CreatedTaskComponent belongsTo_listId={list[0]._id} />
        <TaskCreatorComponent belongsTo_listId={list[0]._id} />
        <EditListButton />
        <UpdateListButton />
        <DeleteListButton />
      </Createdlists>
    );
  });
}
