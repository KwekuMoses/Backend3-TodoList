import React from "react";
import Todolist from "../../list/Todolist";
import styled, { ThemeProvider } from "styled-components";

const LandingPageWrapper = styled.div`
  background-color: red;
`;
export default function Landingpage() {
  return (
    <LandingPageWrapper>
      <h1>LANDING PAGE</h1>
      <Todolist></Todolist>
    </LandingPageWrapper>
  );
}
