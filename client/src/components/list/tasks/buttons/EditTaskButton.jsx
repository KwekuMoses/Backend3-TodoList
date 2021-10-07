import React from "react";
import styled from "styled-components";
import axios from "axios";

const Editbutton = styled.button`
  background-color: blue;
  width: 150px;
`;

export default function EditButton(props) {
  function change_task(e) {
    /* Set The task Elements innerHTML to the prompt input*/
    /* e.target.parentNode.firstChild.innerHTML = prompt(
      "prompt - Please Change Your Task Here"
    ); */
    let task = prompt("prompt - Please Change Your Task Here");

    alert("Great Your Task has Changed ");

    console.log(e.target.parentNode.firstChild.innerHTML);
    let this_task_id = props.task_id;

    console.log(e.target.parentNode);

    const payload = {
      id: this_task_id,
      task: task,
    };

    axios({
      url: "/updateTask",
      method: "PUT",
      data: payload,
    })
      .then(() => {
        console.log("data been sent");
        window.location.href = "/";
      })
      .catch(() => {
        console.log("data been not sent");
      });
  }

  return <Editbutton onClick={change_task}>EDIT</Editbutton>;
}
