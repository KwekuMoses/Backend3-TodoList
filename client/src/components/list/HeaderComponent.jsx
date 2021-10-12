import React, { useContext } from "react";
import styled from "styled-components";
import { UserInputContext } from "../../contexts/UserInputContext";

const Header = styled.input`
  background-color: "#b3b3f80";
  border: 2px solid grey;
  width: 150px;
  &:focus {
    border: none;
    outline: none;
  }
`;

export default function HeaderComponent(props) {
  const { setHeader } = useContext(UserInputContext);

  return (
    <Header
      value={props.listName || undefined}
      placeholder="Set a header (ง •_•)ง"
      onChange={(e) => setHeader(e.target.value)}
    />
  );
}
