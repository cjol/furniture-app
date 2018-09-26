import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";
import { mainFont, greenMain } from "@style";
const SubHeadingStyled = styled.div`
  display: flex;
  justify-content: flex-start;
  color: greenMain;
  font-family: ${mainFont};
  font-size: 18px;
`;
export class Subheading extends React.PureComponent<{}> {
  static defaultProps: Subheading["props"] = {};

  render() {
    return <SubHeadingStyled>{this.props.children}</SubHeadingStyled>;
  }
}
