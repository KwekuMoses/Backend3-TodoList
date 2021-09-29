import React, { useState, useContext } from "react";
import styled from "styled-components";
import { UserInputContext } from "../../../contexts/UserInputContext";

const Taskcomponent = styled.input`
  width: 300px;
`;
export default function TaskComponent() {
  const { task, setTask } = useContext(UserInputContext);
  const [text, setText] = useState("text");
  //* GET
  return (
    <Taskcomponent
      placeholder={text}
      onChange={(e) => setText(e.target.value)}
      value={text}
      id="task"
    />
  );
}
