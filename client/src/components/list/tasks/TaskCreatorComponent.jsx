import React, { useState, useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import CreateTaskButton from "./buttons/CreateTaskButton";
import { UserInputContext } from "../../../contexts/UserInputContext";

const CREATE_TASK_INPUT = styled.input`
  border: 2px solid purple;
`;

export default function TaskCreatorComponent() {
  const { task, setTask } = useContext(UserInputContext);
  console.log(task);
  const submit = (e) => {
    e.preventDefault();
    const payload = {
      // task: task,
      //  date: date,
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

  return (
    <React.Fragment>
      <CREATE_TASK_INPUT
        onChange={(e) => setTask(e.target.value)}
      ></CREATE_TASK_INPUT>
      <CreateTaskButton />
    </React.Fragment>
  );
}
