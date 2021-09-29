import React, { useContext } from "react";
import { UserInputContext } from "../../../contexts/UserInputContext";
import styled from "styled-components";
import axios from "axios";

const Createlistbutton = styled.button`
  background-color: black;
  color: white;
  width: 150px;
`;

export default function SaveListButton() {
  const { task, setTask } = useContext(UserInputContext);
  const { header, setHeader } = useContext(UserInputContext);
  const submit = (e) => {
    e.preventDefault();
    const payload = {
      header: header,
      task: task,
      // date: date,
    };

    axios({
      url: "/saveTask",
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
    debugger;
  };

  return <Createlistbutton onClick={submit}>Create List</Createlistbutton>;
}
