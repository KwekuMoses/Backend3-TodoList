import React from "react";
import Todolistitem from "./listitem/Todolistitem";
import styled from "styled-components";
import HeaderComponent from "./listitem/HeaderComponent";
import CreateListButton from "./buttons/CreateListButton";

const Listcreator = styled.div`
  background-color: pink;
  border: green;
  display: grid;
  grid-row-gap: 70px;
  height: auto;
  place-items: center;
  padding: 50px;
`;

export default function ListCreator() {
  return (
    <Listcreator>
      <HeaderComponent />
      <Todolistitem />
      <CreateListButton />
    </Listcreator>
  );
}
