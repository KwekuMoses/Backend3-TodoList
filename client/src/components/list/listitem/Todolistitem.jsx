import React, { useContext } from "react";
import styled from "styled-components";

import DateComponent from "./datecomponent/DateComponent";
import { UserInputContext } from "../../../contexts/UserInputContext";
import TaskComponent from "./TaskComponent";

const TodoListWrapper = styled.div`
  background-color: #ffffff;
  border: 2px solid red;
`;

export default function Todolistitem(props) {
  const { header, setHeader } = useContext(UserInputContext);
  const { listArray } = useContext(UserInputContext);

  return (
    <TodoListWrapper>
      <TaskComponent taskName={props.taskName} key={props.taskName} />
      <DateComponent date={props.date} />
    </TodoListWrapper>
  );
}
