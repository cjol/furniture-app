import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";
const SomeTextStyle = styled.div``;

export class PlainText extends React.PureComponent<{}> {
  static defaultProps: PlainText["props"] = {};

  render() {
    return <SomeTextStyle>Text Area</SomeTextStyle>;
  }
}
