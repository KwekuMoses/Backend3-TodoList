import React, { useContext } from "react";
import styled from "styled-components";
import CreateTaskButton from "./buttons/CreateTaskButton";
import { UserInputContext } from "../../../contexts/UserInputContext";

const CreateTaskInput = styled.input`
  border: 2px solid purple;
`;

export default function TaskCreatorComponent(props) {
  const { setTask } = useContext(UserInputContext);

  return (
    <React.Fragment>
      <CreateTaskInput
        onChange={(e) => setTask(e.target.value)}
      ></CreateTaskInput>
      <CreateTaskButton belongsTo_listId={props.belongsTo_listId} />
    </React.Fragment>
  );
}
