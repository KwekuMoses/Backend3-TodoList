import React from "react";
import ListCreator from "../../list/ListCreator";
import styled from "styled-components";
import CreatedLists from "../../list/CreatedLists";

const ListPageWrapper = styled.div`
  background-color: #ffffff;
  display: grid;
  grid-template-columns: 1fr 8fr;
  grid-template-rows: 1fr;
  place-items: center;
  height: 200vh;
`;

const ListPageTitle = styled.div`
  place-self: start;
  grid-row: 1;
  grid-column: 1;
  display: block;
  margin: 10px;
  font-weight: bold;
`;

const CreatedListsWrapper = styled.div`
  border: 2px solid black;
  display: inline-block;
  grid-row-gap: 10px;
  height: auto;
  margin: 20px;
  position: relative;
  padding: 5px;
  grid-column: 2;
  grid-row: 1;
`;

export default function ListPage() {
  return (
    <ListPageWrapper>
      <ListPageTitle>Todo App</ListPageTitle>
      <ListCreator />
      <CreatedListsWrapper>
        <CreatedLists />
      </CreatedListsWrapper>
    </ListPageWrapper>
  );
}
