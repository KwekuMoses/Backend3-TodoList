import React from "react";
import styled from "styled-components";
import RegisterUserButton from "./Buttons/RegisterUserButton";
import { Link } from "react-router-dom";

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
        <label for="email">Email </label>
        <input id="email" placeHolder="Email" required />
        <br />
        <label for="password">Password </label>
        <input id="password" placeHolder="Password" required />
        <br />
        <br />
        <RegisterUserButton />
      </form>
      <Link to="/">Landing</Link>
      <Link to="/Login">Login</Link>
    </RegisterPageWrapper>
  );
}
