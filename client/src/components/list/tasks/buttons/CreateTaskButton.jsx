import React, { useContext } from "react";
import { UserInputContext } from "../../../../contexts/UserInputContext";
import styled from "styled-components";
import axios from "axios";

const Createtaskbutton = styled.button`
  background-color: black;
  color: white;
  width: 150px;
`;
export default function CreateTaskButton() {
  const { task, setTask } = useContext(UserInputContext);
  const submit = (e) => {
    e.preventDefault();
    const payload = {
      task: task,
    };

    axios({
      url: "/createTask",
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("data been sent");
        window.location.href = "/";
      })
      .catch(() => {
        console.log("data been not sent");
      });
  };

  return <Createtaskbutton onClick={submit}>Add Task</Createtaskbutton>;
}
