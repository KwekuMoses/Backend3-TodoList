import React, { useState, useContext } from "react";
import styled from "styled-components";
import { UserInputContext } from "../../../contexts/UserInputContext";

const Taskcomponent = styled.input`
  width: 300px;
  background-color: "#b3b3f80";
  border: none;
  text-align: center;
  &:focus {
    border: none;
    outline: none;
  }
`;
export default function TaskComponent(props) {
  const { task, setTask } = useContext(UserInputContext);
  const [text, setText] = useState("text");

  return (
    <Taskcomponent
      placeholder={text}
      onChange={(e) => setText(e.target.value)}
      value={props.taskName}
      id="task"
      readOnly
    />
  );
}
