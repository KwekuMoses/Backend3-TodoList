import React from "react";
import styled from "styled-components";

const Editbutton = styled.button`
  background-color: blue;
  width: 150px;
`;

function change_task(e) {
  e.target.parentNode.firstChild.innerHTML = prompt(
    "prompt - Please Change Your Task Here"
  );

  alert("Great Your Task has Changed ");

  console.log(e.target.parentNode.firstChild.innerHTML);
}

export default function EditButton() {
  return <Editbutton onClick={change_task}>EDIT</Editbutton>;
}
