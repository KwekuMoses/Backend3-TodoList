import React from "react";
import styled from "styled-components";
import RegisterUserButton from "./Buttons/RegisterUserButton";

const RegisterPageWrapper = styled.div`
  margin: 100px;
`;

export default function RegisterPage() {
  return (
    <RegisterPageWrapper>
      <form action="/register" method="POST">
        RegisterPage
        <br />
        <br />
        <br />
        <br />
        <label for="name">Email </label>
        <input id="name" placeHolder="Email" />
        <br />
        <label for="password">Password </label>
        <input id="password" placeHolder="Password" />
        <br />
        <br />
        <RegisterUserButton />
      </form>
    </RegisterPageWrapper>
  );
}
