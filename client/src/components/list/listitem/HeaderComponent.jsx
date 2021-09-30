import React, { useContext } from "react";
import styled from "styled-components";
import { UserInputContext } from "../../../contexts/UserInputContext";

const Header = styled.input`
  background-color: "#b3b3f80";
  border: none;
  width: 150px;
  &:focus {
    border: none;
    outline: none;
  }
`;

export default function HeaderComponent(props) {
  const { header, setHeader } = useContext(UserInputContext);

  return (
    <Header
      value={props.listName}
      placeholder={header}
      onChange={(e) => setHeader(e.target.value)}
      readOnly
    />
  );
}
