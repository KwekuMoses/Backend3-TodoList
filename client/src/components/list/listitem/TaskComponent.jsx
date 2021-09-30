import React, { useState, useContext } from "react";
import styled from "styled-components";
import { UserInputContext } from "../../../contexts/UserInputContext";
import DeleteItemButton from "./buttons/DeleteItemButton";
import EditButton from "./buttons/EditButton";
const Taskcomponent = styled.div`
  width: 300px;
  background-color: "#b3b3f80";
  border: 5px solid black;
  text-align: center;
  display: block;
`;
const TaskWrapper = styled.div`
  border: 10px solid moccasin;
  margin: 20px;
`;

export default function TaskComponent(props) {
  const { task, setTask } = useContext(UserInputContext);
  const [text, setText] = useState("");

  let taskArray = props.taskName;
  console.log(taskArray);

  if (taskArray) {
    return taskArray.map((taskName) => {
      return (
        <TaskWrapper>
          <p>{taskName}</p>
          <EditButton />
          <DeleteItemButton />
        </TaskWrapper>
      );
    });
  } else {
    return (
      <Taskcomponent
        placeholder={text}
        onChange={(e) => setText(e.target.value)}
        id="task"
      />
    );
  }
}
