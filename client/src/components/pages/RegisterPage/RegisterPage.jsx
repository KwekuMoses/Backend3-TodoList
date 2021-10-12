import React, { useContext } from "react";
import styled from "styled-components";
import RegisterUserButton from "./Buttons/RegisterUserButton";
import { Link } from "react-router-dom";
import { UserInputContext } from "../../../contexts/UserInputContext";

const RegisterPageWrapper = styled.div`
  margin: 100px;
`;

export default function RegisterPage() {
  const { setEmail } = useContext(UserInputContext);
  const { password, setPassword } = useContext(UserInputContext);
  console.log(password);
  return (
    <RegisterPageWrapper>
      <form action="/register" method="POST">
        RegisterPage
        <br />
        <br />
        <br />
        <br />
        <label for="email">Email </label>
        <input
          id="email"
          name="email"
          placeHolder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label for="password">Password </label>
        <input
          id="password"
          name="password"
          placeHolder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <br />
        <RegisterUserButton />
      </form>
      <Link to="/">Landing</Link>
      <Link to="/Login">Login</Link>
    </RegisterPageWrapper>
  );
}
