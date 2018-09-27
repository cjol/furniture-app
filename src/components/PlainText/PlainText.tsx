import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";
import { mainFont } from "@style";
import { grey } from "@style";

export const PlainText = styled.div`
  display: flex;
  font-family: ${mainFont};
  font-size: 13px;
  color: ${grey};
  text-align: justify;
  line-spacing: 2em;
`;
