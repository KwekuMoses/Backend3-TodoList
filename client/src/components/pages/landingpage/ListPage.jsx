import React, { useState, useEffect } from "react";
import ListCreator from "../../list/ListCreator";
import styled from "styled-components";
import { UserInputContext } from "../../../contexts/UserInputContext";
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

export default function Landingpage() {
  const [task, setTask] = useState("set Task");
  const [header, setHeader] = useState("header");
  const [listId, setListId] = useState();
  const [fetched_data, setFetched_Data] = useState([]);
  const [fetched_Tasks, setFetched_Tasks] = useState([]);
  let listArray = [];

  useEffect(() => {
    fetch("/getLists")
      .then((response) => response.json())
      .then((sessions) => setFetched_Data(sessions));
  }, []);
  for (var i in fetched_data) listArray.push([fetched_data[i]]);

  //console.log("list " + listArray);
  for (let i = 0; i < listArray.length; i++) {
    // console.log(listArray[i]);
  }

  const userInputContextValue = {
    task,
    setTask,
    header,
    setHeader,
    listArray,
    listId,
    setListId,
    fetched_Tasks,
    setFetched_Tasks,
  };

  return (
    <UserInputContext.Provider value={userInputContextValue}>
      <ListPageWrapper>
        <ListPageTitle>THE TO DO LIST ლ(╹◡╹ლ)</ListPageTitle>
        <ListCreator />
        <CreatedListsWrapper>
          <CreatedLists />
        </CreatedListsWrapper>
      </ListPageWrapper>
    </UserInputContext.Provider>
  );
}
