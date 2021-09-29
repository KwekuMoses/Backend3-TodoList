import React, { useContext } from "react";
import styled from "styled-components";
import { UserInputContext } from "../../../contexts/UserInputContext";

const Header = styled.input`
  background-color: blue;
  width: 150px;
`;

export default function HeaderComponent() {
  const { header, setHeader } = useContext(UserInputContext);

  return (
    <Header placeholder={header} onChange={(e) => setHeader(e.target.value)} />
  );
}
