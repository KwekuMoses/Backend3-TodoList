import React from "react";
import styled from "styled-components";
import LoginUserButton from "./Buttons/LoginUserButton";
const LoginPageWrapper = styled.div`
  margin: 100px;
`;

export default function LoginPage() {
  return (
    <LoginPageWrapper>
      <form>
        LoginPage
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
        <LoginUserButton />
      </form>
    </LoginPageWrapper>
  );
}
