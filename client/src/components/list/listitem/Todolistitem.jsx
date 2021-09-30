import React, { useContext } from "react";
import styled from "styled-components";
import DeleteItemButton from "./buttons/DeleteItemButton";
import EditButton from "./buttons/EditButton";
import DateComponent from "./datecomponent/DateComponent";
import { UserInputContext } from "../../../contexts/UserInputContext";
import TaskComponent from "./TaskComponent";

const TodoListitem = styled.div`
  background-color: yellow;
  border: 2px solid red;
`;
export default function Todolistitem(props) {
  const { header, setHeader } = useContext(UserInputContext);

  return (
    <TodoListitem>
      <TaskComponent taskName={props.taskName} />
      <DateComponent />
      <EditButton />
      <DeleteItemButton />
    </TodoListitem>
  );
}
