import React from "react";
import styled from "styled-components";
import axios from "axios";

const Editbutton = styled.button`
  background-color: blue;
  width: 150px;
`;

export default function EditButton(props) {
  function edit_task(e) {
    /* Set The task Elements innerHTML to the prompt input*/
    /* e.target.parentNode.firstChild.innerHTML = prompt(
      "prompt - Please Change Your Task Here"
    ); */
    let newTask = prompt("prompt - Please Change Your Task Here");

    alert("Great Your Task has Changed ");

    console.log(e.target.parentNode.firstChild.innerHTML);
    let taskId = props.taskId;
    let listId = props.listId;

    console.log(e.target.parentNode);

    const payload = {
      listId: listId,
      taskId: taskId,
      newTask: newTask,
    };

    axios({
      url: "/updateTask",
      method: "PUT",
      data: payload,
    })
      .then(() => {
        console.log("data been sent");
        window.location.href = "";
      })
      .catch(() => {
        console.log("data been not sent");
      });
  }

  return <Editbutton onClick={edit_task}>EDIT</Editbutton>;
}
