import React from "react";
import Todolist from "../../list/TodoList";
import styled from "styled-components";
import CreateListButton from "./buttons/CreateListButton";

const LandingPageWrapper = styled.div`
  background-color: #ffffff;
  display: grid;
  place-items: center;
  height: 200vh;
`;

const LandingTitle = styled.div`
  place-self: start;
  margin: 20px;
  font-weight: bold;
`;

export default function Landingpage() {
  return (
    <LandingPageWrapper>
      <LandingTitle>THE TO DO LIST</LandingTitle>
      <Todolist />
      <CreateListButton />
    </LandingPageWrapper>
  );
}
