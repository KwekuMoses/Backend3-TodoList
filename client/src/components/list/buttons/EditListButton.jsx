import React from "react";
import styled from "styled-components";
import axios from "axios";

const Editlistbutton = styled.button`
  background-color: #000000;
  color: white;
  width: 150px;
`;
export default function EditListButton(props) {
  function edit_list(e) {
    /* Set The task Elements innerHTML to the prompt input*/
    /* e.target.parentNode.firstChild.innerHTML = prompt(
      "prompt - Please Change Your Task Here"
    ); */
    let new_header = prompt("prompt - Please Change Your Task Here");

    alert("Great Your Task has Changed ");

    console.log(e.target.parentNode.firstChild.innerHTML);
    let this_list_id = props.list_id;

    console.log(this_list_id);
    console.log(e.target.parentNode);

    const payload = {
      id: this_list_id,
      header: new_header,
    };

    axios({
      url: "/updateList",
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

  return <Editlistbutton onClick={edit_list}>Edit Header</Editlistbutton>;
}
