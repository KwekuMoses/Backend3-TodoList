import React, { useContext } from "react";
import styled from "styled-components";
import HeaderComponent from "./HeaderComponent";
import DeleteListButton from "./buttons/DeleteListButton";
import EditListButton from "./buttons/EditListButton";
import UpdateListButton from "./buttons/UpdateListButton";
import { UserInputContext } from "../../contexts/UserInputContext";
import TaskCreatorComponent from "./tasks/TaskCreatorComponent";
import CreatedTaskComponent from "./tasks/CreatedTasksComponent";

const Createdlists = styled.div`
  display: inline-block;
  border: 1px solid black;
  margin: 20px;
`;

export default function CreatedLists(props) {
  const { listArray } = useContext(UserInputContext);

  //console.log("created " + listArray);
  return listArray.map((list) => {
    return (
      <Createdlists id="CreatedList" key={list[0]._id}>
        <h3>LIST ID: {list[0]._id}</h3>
        <HeaderComponent listName={list[0].header} />
        {/* <Todolistitem /> */}
        <CreatedTaskComponent belongsTo_listId={list[0]._id} key={props.Key} />
        <TaskCreatorComponent belongsTo_listId={list[0]._id} key={list[0]} />
        <br />
        <EditListButton list_id={list[0]._id} />
        <DeleteListButton list_id={list[0]._id} />
        <UpdateListButton />
        <h3>Last Edited {list[0].date}</h3>
      </Createdlists>
    );
  });
}
