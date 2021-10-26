import React, { useContext } from "react";
import { UserInputContext } from "../../../../contexts/UserInputContext";
import styled from "styled-components";
import axios from "axios";

const Createtaskbutton = styled.button`
  background-color: black;
  color: white;
  width: 150px;
`;
export default function CreateTaskButton(props) {
  const { task } = useContext(UserInputContext);
  let listId = props.belongsTo_listId;
  const submit = (e) => {
    e.preventDefault();

    const payload = {
      task: task,
      belongsTo_listId: listId,
    };

    axios({
      //url: "/test",
      //method: "POST",
      url: "/test",
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("data been sent");
        window.location.href = "";
      })
      .catch(() => {
        console.log("data been not sent");
      });
  };

  return <Createtaskbutton onClick={submit}>Add Task</Createtaskbutton>;
}
