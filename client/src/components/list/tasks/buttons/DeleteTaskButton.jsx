import React from "react";
import styled from "styled-components";
import axios from "axios";

const Deletebutton = styled.button`
  background-color: #a10000;
  width: 150px;
`;

export default function DeleteTaskButton(props) {
  const deleteTask = (e) => {
    e.preventDefault();
    let taskId = props.taskId;
    let listId = props.listId;
    console.log(taskId);

    const payload = {
      listId: listId,
      taskId: taskId,
    };

    axios({
      url: "/deleteTask",
      method: "DELETE",
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

  return (
    <Deletebutton onClick={deleteTask} id={props.task_id}>
      DELETE THIS TASK
    </Deletebutton>
  );
}
