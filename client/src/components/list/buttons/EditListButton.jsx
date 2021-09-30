import React from "react";
import styled from "styled-components";

const Editlistbutton = styled.button`
  background-color: #000000;
  color: white;
  width: 150px;
`;
export default function EditListButton() {
  //* Edit the header
  return <Editlistbutton>Edit Header</Editlistbutton>;
}
