import React, { useState, useContext } from "react";
import styled from "styled-components";
import { UserInputContext } from "../../../contexts/UserInputContext";

const Taskcomponent = styled.input`
  width: 300px;
  background-color: "#b3b3f80";
  border: 5px solid black;
  text-align: center;
  display: block;
  &:focus {
    border: none;
    outline: none;
  }
`;
export default function TaskComponent(props) {
  const { task, setTask } = useContext(UserInputContext);
  const [text, setText] = useState("text");

  let taskArray = props.taskName;
  console.log(taskArray);
  if (taskArray) {
    return taskArray.map((taskName) => {
      return (
        <Taskcomponent
          placeholder={text}
          onChange={(e) => setText(e.target.value)}
          value={taskName}
          id="task"
        />
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
