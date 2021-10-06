import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { UserInputContext } from "../../../contexts/UserInputContext";
import DeleteItemButton from "./buttons/DeleteItemButton";
import EditButton from "./buttons/EditButton";
import axios from "axios";

const Taskcomponent = styled.div`
  width: 300px;
  background-color: "#b3b3f80";
  border: 5px solid black;
  text-align: center;
  display: block;
`;
const TaskWrapper = styled.div`
  border: 10px solid moccasin;
  margin: 20px;
`;

export default function TaskComponent(props) {
  const { listArray } = useContext(UserInputContext);
  const [fetchedData, setFetchedData] = useState([]);
  let this_listId = props.belongsTo_listId;
  console.log(fetchedData);
  console.log(props.belongsTo_listId);

  let filtered_tasks = [];

  for (let i = 0; i < fetchedData.length; i++) {
    console.log(this_listId + " : " + fetchedData[i].belongsTo_listId);
    if (this_listId === fetchedData[i].belongsTo_listId) {
      filtered_tasks.push(fetchedData[i].task);
    }
  }
  console.log(filtered_tasks + "  " + this_listId + "   HERE");
  useEffect(() => {
    fetch("/getTasks")
      .then((response) => response.json())
      .then((tasks) => setFetchedData(tasks));
  }, []);
  //console.log("created " + listArray);
  return filtered_tasks.map((task) => {
    return <p>{JSON.stringify(task)}</p>;
  });
}
