import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LandingPageWrapper = styled.div`
  display: grid;
  place-items: center;
`;
export default function LandingPage() {
  return (
    <LandingPageWrapper>
      <h1>LandingPage</h1>
      <Link to="/Login">Login</Link>
      <Link to="/Register">Register</Link>
    </LandingPageWrapper>
  );
}
