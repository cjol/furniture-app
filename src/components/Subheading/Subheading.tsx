import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";
import { mainFont, greenMain } from "@style";

export const Subheading = styled.div`
  display: flex;
  justify-content: flex-start;
  color: ${greenMain};
  font-family: ${mainFont};
  font-size: 18px;
  padding-top: 12px;
  padding-bottom: 12px;
  flex-grow: 1;
`;
