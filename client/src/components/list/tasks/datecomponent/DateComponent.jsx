import React from "react";
import styled from "styled-components";
const Datecomponent = styled.div`
  background-color: #ffffff;
  text-align: center;
`;

export default function DateComponent(props) {
  return <Datecomponent>{props.date}</Datecomponent>;
}
