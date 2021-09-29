import React from "react";
import styled from "styled-components";

const Header = styled.header`
  background-color: blue;
  width: 150px;
`;

export default function HeaderComponent() {
  return <Header>DYNAMIC HEADER</Header>;
}
