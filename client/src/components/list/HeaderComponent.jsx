import React, { useContext } from "react";
import styled from "styled-components";
import { UserInputContext } from "../../contexts/UserInputContext";

const Header = styled.input`
  background-color: "#b3b3f80";
  border: 1px solid grey;
`;

export default function HeaderComponent(props) {
  const { setHeader } = useContext(UserInputContext);
  return (
    <Header
      value={props.listName || undefined}
      placeholder="Name Your List"
      onChange={(e) => setHeader(e.target.value)}
    />
  );
}
