import React, { useContext } from "react";

import { UserInputContext } from "../../../contexts/UserInputContext";
import styled from "styled-components";
import axios from "axios";

const Createlistbutton = styled.button`
  background-color: black;
  color: white;
  width: 150px;
`;

export default function CreateListButton() {
  const { header } = useContext(UserInputContext);

  const submit = (e) => {
    e.preventDefault();
    const payload = {
      header: header,
    };

    axios({
      url: "/createList",
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("data been sent");
        window.location.href = "";
      })
      .catch(() => {
        console.log("data been not sent");
      });
  };

  return <Createlistbutton onClick={submit}>Create List</Createlistbutton>;
}
