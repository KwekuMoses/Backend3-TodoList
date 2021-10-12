import React from "react";
import styled from "styled-components";
import axios from "axios";

const RegisterButton = styled.button`
  border: 2px solid pink;
`;

export default function RegisterUserButton() {
  const submit = (e) => {
    e.preventDefault();

    const payload = {
      // email: task,
      // password: listId,
    };

    axios({
      url: "/register",
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("data been sent");
        window.location.href = "/login";
      })
      .catch(() => {
        console.log("data been not sent");
      });
  };

  return <RegisterButton onClick={submit}>Register</RegisterButton>;
}
