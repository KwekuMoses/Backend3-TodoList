import React from "react";
import styled from "styled-components";

const Deletebutton = styled.button`
  background-color: #a10000;
  width: 150px;
`;

export default function DeleteItemButton() {
  return <Deletebutton>DELETE</Deletebutton>;
}
