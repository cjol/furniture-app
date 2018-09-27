import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Add } from "@material-ui/icons";
import styled from "styled-components";
import { greenMain, white,normalBoxShadow } from "@style";
export const RoundButton = styled.div`
  display: flex;
  background-color: ${greenMain};
  color: ${white};
  justify-content: center;
  align-items: center;
  border-radius: 36px;
  height: 36px;
  width: 36px;
  shadow:${normalBoxShadow};
`;
