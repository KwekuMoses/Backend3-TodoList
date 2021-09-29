import React, { useState, useContext, useEffect } from "react";
import ListCreator from "../../list/ListCreator";
import styled from "styled-components";
import CreateListButton from "./buttons/CreateListButton";
import { UserInputContext } from "../../../contexts/UserInputContext";
import CreatedList from "../../list/CreatedList";

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
  const [fetched_data, setFetched_Data] = useState([]);
  let listArray = [];

  const userInputContextValue = {
    task,
    setTask,
    header,
    setHeader,
  };
  useEffect(() => {
    fetch("/getLists")
      .then((response) => response.json())
      .then((sessions) => setFetched_Data(sessions));
  }, []);
  for (var i in fetched_data) listArray.push([fetched_data[i]]);

  console.log(listArray);

  return (
    <UserInputContext.Provider value={userInputContextValue}>
      <LandingPageWrapper>
        <LandingTitle>THE TO DO LIST</LandingTitle>
        <ListCreator />
        <CreatedList />
        <CreatedList />
        <CreateListButton />
      </LandingPageWrapper>
    </UserInputContext.Provider>
  );
}
