import React, { useState } from "react";
import styled from "styled-components";
const Datecomponent = styled.div`
  background-color: orange;
`;

export default function DateComponent() {
  const [dateObject] = useState(new Date());
  const date = JSON.stringify(dateObject);
  return <Datecomponent>{date}</Datecomponent>;
}
