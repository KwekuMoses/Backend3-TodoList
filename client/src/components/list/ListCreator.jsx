import React from "react";
import styled from "styled-components";
import HeaderComponent from "./HeaderComponent";
import CreateListButton from "./buttons/CreateListButton";
const Listcreator = styled.div`
  background-color: #ffffff;
  border: 2px solid black;
  display: grid;
  grid-row-gap: 70px;
  height: auto;
  place-items: center;
  place-self: center;
  padding: 50px;
  grid-column: 1;
  grid-row: 1;
`;

export default function ListCreator() {
  return (
    <Listcreator>
      <HeaderComponent />
      <CreateListButton />
    </Listcreator>
  );
}
