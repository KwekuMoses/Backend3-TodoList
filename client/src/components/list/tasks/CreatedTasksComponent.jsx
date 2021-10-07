import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import DeleteTaskButton from "./buttons/DeleteTaskButton";
import EditTaskButton from "./buttons/EditTaskButton";
import { UserInputContext } from "../../../contexts/UserInputContext";

const TaskItemComponent = styled.div`
  width: auto;
  background-color: "#b3b3f80";
  border: 5px solid black;
  display: block;
`;
const TaskText = styled.p`
  color: pink;
  display: inline;
  text-align: left;
`;
const TaskWrapper = styled.div`
  border: 10px solid moccasin;
  margin: 20px;
`;

export default function CreatedTaskComponent(props) {
  const { fetched_Tasks, setFetched_Tasks } = useContext(UserInputContext);
  let this_listId = props.belongsTo_listId;
  let filtered_tasks = [];

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
  return filtered_tasks.map((task) => {
    return (
      <React.Fragment key={JSON.stringify(task)}>
        <TaskItemComponent key={task}>
          <TaskText> {JSON.stringify(task.task)} </TaskText>{" "}
          <DeleteTaskButton key={task.id} task_id={task._id} />
          <EditTaskButton key={task.id} task_id={task._id} />
        </TaskItemComponent>{" "}
      </React.Fragment>
    );
  });
}
