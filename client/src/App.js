import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Customers from "./components/customers";
import Landingpage from "./components/pages/landingpage/Landingpage.jsx";

class App extends Component {
  render() {
    return <Landingpage></Landingpage>;
  }
}

export default App;
