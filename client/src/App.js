import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";

import ListPage from "./components/pages/ListPage/ListPage.jsx";
import LandingPage from "./components/pages/LandingPage/LandingPage.jsx";
import LoginPage from "./components/pages/LoginPage/LoginPage.jsx";
import RegisterPage from "./components/pages/RegisterPage/RegisterPage.jsx";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/User/:id" component={ListPage} />

        <Route path="/Login" component={LoginPage} />
        <Route path="/Register" component={RegisterPage} />
        <Route path="/" component={LandingPage} exact />
      </BrowserRouter>
    );
  }
}

export default App;
