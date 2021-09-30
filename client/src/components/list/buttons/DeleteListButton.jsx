import React from "react";
import styled from "styled-components";

const Deletelistbutton = styled.button`
  background-color: #000000;
  color: white;
  width: 150px;
`;
export default function DeleteListButton() {
  return <Deletelistbutton>Delete List</Deletelistbutton>;
}
