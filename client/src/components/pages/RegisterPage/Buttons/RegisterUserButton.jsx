import React, { useContext } from "react";
import styled from "styled-components";
import axios from "axios";
import { UserInputContext } from "../../../../contexts/UserInputContext";

const RegisterButton = styled.button`
  border: 2px solid pink;
`;

export default function RegisterUserButton() {
  const { password } = useContext(UserInputContext);
  const { email } = useContext(UserInputContext);

  const submit = (e) => {
    e.preventDefault();
    console.log(password + " PPPP");
    const payload = {
      email: email,
      password: password,
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
