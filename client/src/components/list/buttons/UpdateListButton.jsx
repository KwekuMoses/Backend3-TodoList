import React from "react";
import styled from "styled-components";

const Updatelistbutton = styled.button`
  background-color: #def7de;
  width: 150px;
`;
export default function EditListButton() {
  //* Updates database
  //* Redirects Back to page
  return <Updatelistbutton>Update List</Updatelistbutton>;
}
