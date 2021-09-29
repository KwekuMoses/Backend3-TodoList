import React, { useContext } from "react";
import styled from "styled-components";
import { UserInputContext } from "../../../contexts/UserInputContext";

const Taskcomponent = styled.input`
  width: 300px;
`;
export default function TaskComponent() {
  const { task, setTask } = useContext(UserInputContext);

  return (
    <Taskcomponent
      placeholder={task}
      onChange={(e) => setTask(e.target.value)}
    />
  );
}
