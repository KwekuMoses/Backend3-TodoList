import React, { Component, useState, useEffect } from "react";
import { UserInputContext } from "./contexts/UserInputContext";

import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";

import ListPage from "./components/pages/ListPage/ListPage.jsx";
import LandingPage from "./components/pages/LandingPage/LandingPage.jsx";
import LoginPage from "./components/pages/LoginPage/LoginPage.jsx";
import RegisterPage from "./components/pages/RegisterPage/RegisterPage.jsx";

export default function App() {
  const [task, setTask] = useState("set Task");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
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
    password,
    setPassword,
    email,
    setEmail,
  };
  return (
    <UserInputContext.Provider value={userInputContextValue}>
      <BrowserRouter>
        <Route path="/User/:id" component={ListPage} />
        <Route path="/Login" component={LoginPage} />
        <Route path="/Register" component={RegisterPage} />
        <Route path="/" component={LandingPage} exact />
      </BrowserRouter>
    </UserInputContext.Provider>
  );
}
