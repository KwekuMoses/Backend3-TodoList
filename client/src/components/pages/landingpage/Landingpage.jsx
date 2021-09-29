import React, { useState, useContext } from "react";
import ListCreator from "../../list/ListCreator";
import styled from "styled-components";
import CreateListButton from "./buttons/CreateListButton";
import { UserInputContext } from "../../../contexts/UserInputContext";

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
  const [task, setTask] = useState("set Task");
  const [header, setHeader] = useState("header");

  const userInputContextValue = {
    task,
    setTask,
    header,
    setHeader,
  };
  return (
    <UserInputContext.Provider value={userInputContextValue}>
      <LandingPageWrapper>
        <LandingTitle>THE TO DO LIST</LandingTitle>
        <ListCreator />
        <CreateListButton />
      </LandingPageWrapper>
    </UserInputContext.Provider>
  );
}
