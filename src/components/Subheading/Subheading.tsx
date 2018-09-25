import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";
const SubHeadingStyled = styled.div`
  display: flex;
`;
export class Subheading extends React.PureComponent<{}> {
  static defaultProps: Subheading["props"] = {};

  render() {
    return <SubHeadingStyled />;
  }
}
