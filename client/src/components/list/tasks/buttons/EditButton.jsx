import React from "react";
import styled from "styled-components";

const Editbutton = styled.button`
  background-color: blue;
  width: 150px;
`;

function change_task(e) {
  e.target.parentNode.firstChild.innerHTML = prompt(
    "prompt - Please enter your name"
  );

  alert(
    "alert - Hello, " +
      e.target.parentNode.firstChild.innerHTML +
      "! You can't enter text here!"
  );

  //var clickedOk = confirm("confirm - Do you understand now?");
  console.log(e.target.parentNode.firstChild.innerHTML);
}

export default function EditButton() {
  return <Editbutton onClick={change_task}>EDIT</Editbutton>;
}
