import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import DeleteTaskButton from "./buttons/DeleteTaskButton";
import EditTaskButton from "./buttons/EditTaskButton";
import { UserInputContext } from "../../../contexts/UserInputContext";

const TaskItemComponent = styled.div`
  background-color: "#b3b3f80";
  border: 1px solid grey;
  display: inline-block;
  margin: 10px;
`;
const TaskText = styled.p`
  color: pink;
  display: inline;
  text-align: left;
  margin: 40px;
`;
const TaskWrapper = styled.div`
  border: 1px solid moccasin;
  margin: 20px;
  width: 40vw;
`;

export default function CreatedTaskComponent(props) {
  const { fetched_Tasks, setFetched_Tasks } = useContext(UserInputContext);
  let this_listId = props.belongsTo_listId;
  let filtered_tasks = [];
  let tasks = props.tasks;

  for (let i = 0; i < fetched_Tasks.length; i++) {
    if (this_listId === fetched_Tasks[i].belongsTo_listId) {
      filtered_tasks.push(fetched_Tasks[i]);
    }
  }

  useEffect(() => {
    fetch("/getTasks")
      .then((response) => response.json())
      .then((tasks) => setFetched_Tasks(tasks));
  }, []);

  return (
    <TaskWrapper>
      {tasks.map((task) => (
        <TaskItemComponent key={task._id}>
          <TaskText>{task.task}</TaskText>
          <DeleteTaskButton
            taskId={task._id}
            listId={props.listId}
          ></DeleteTaskButton>
          <EditTaskButton
            taskId={task._id}
            listId={props.listId}
          ></EditTaskButton>
        </TaskItemComponent>
      ))}
    </TaskWrapper>
  );
}
