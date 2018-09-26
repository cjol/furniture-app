import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { Add } from "@material-ui/icons";
import styled from "styled-components";
import { greenMain, white } from "@style";

const RoundButtonStyled = styled.div`
  display: flex;
  background-color: ${greenMain};
  color: ${white};
`;
export class RoundButton extends React.PureComponent<{}> {
  static defaultProps: RoundButton["props"] = {
    children: <Add />
  };

  render() {
    return <RoundButtonStyled>{this.props.children}</RoundButtonStyled>;
  }
}
