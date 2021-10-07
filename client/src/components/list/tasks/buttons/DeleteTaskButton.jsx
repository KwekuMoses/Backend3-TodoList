import React from "react";
import styled from "styled-components";
import axios from "axios";

const Deletebutton = styled.button`
  background-color: #a10000;
  width: 150px;
`;

export default function DeleteTaskButton(props) {
  const deleteTask = (e) => {
    let this_task_id = props.task_id;

    e.preventDefault();

    console.log(e.target.parentNode);

    const payload = {
      id: this_task_id,
    };

    axios({
      url: "/deleteTask",
      method: "DELETE",
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
    <Deletebutton onClick={deleteTask} id={props.task_id}>
      DELETE THIS TASK
    </Deletebutton>
  );
}
