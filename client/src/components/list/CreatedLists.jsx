import React, { useContext } from "react";
import styled from "styled-components";
import DeleteListButton from "./buttons/DeleteListButton";
import EditListButton from "./buttons/EditListButton";
import { UserInputContext } from "../../contexts/UserInputContext";
import TaskCreatorComponent from "./tasks/TaskCreatorComponent";
import CreatedTaskComponent from "./tasks/CreatedTasksComponent";

const Createdlists = styled.div`
  display: inline-block;
  border: 1px solid black;
  margin: 20px;
`;

export default function CreatedLists() {
  const { listArray } = useContext(UserInputContext);

  return listArray.map((list) => {
    return (
      <Createdlists id="CreatedList" key={list[0]._id}>
        <h2>{list[0].header} </h2>
        <CreatedTaskComponent
          listId={list[0]._id}
          tasks={list[0].tasks}
          belongsTo_listId={list[0]._id}
        />
        <TaskCreatorComponent belongsTo_listId={list[0]._id} />
        <br />
        <EditListButton list_id={list[0]._id} />
        <DeleteListButton list_id={list[0]._id} />
        <h3>Last Edited {list[0].date}</h3>
      </Createdlists>
    );
  });
}
