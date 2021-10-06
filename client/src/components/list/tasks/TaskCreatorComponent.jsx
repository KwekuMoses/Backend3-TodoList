import React, { useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import CreateTaskButton from "./buttons/CreateTaskButton";
import { UserInputContext } from "../../../contexts/UserInputContext";

const CREATE_TASK_INPUT = styled.input`
  border: 2px solid purple;
`;

export default function TaskCreatorComponent(props) {
  const { task, setTask } = useContext(UserInputContext);

  console.log();
  return (
    <React.Fragment>
      <CREATE_TASK_INPUT
        onChange={(e) => setTask(e.target.value)}
      ></CREATE_TASK_INPUT>
      <CreateTaskButton belongsTo_listId={props.belongsTo_listId} />
    </React.Fragment>
  );
}
