import React from "react";
import styled from "styled-components";
import LoginUserButton from "./Buttons/LoginUserButton";
import { Link } from "react-router-dom";

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
        <label for="email">Email </label>
        <input id="email" placeHolder="Email" required />
        <br />
        <label for="password">Password </label>
        <input id="password" placeHolder="Password" required />
        <br />
        <br />
        <LoginUserButton />
      </form>
      <Link to="/">Landing</Link>
      <Link to="/Register">Register</Link>
    </LoginPageWrapper>
  );
}
