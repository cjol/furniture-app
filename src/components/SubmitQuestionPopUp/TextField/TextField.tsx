import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";

const TextFieldStyle = styled.div``;

export class TextField extends React.PureComponent<{}> {
  static defaultProps: TextField["props"] = {};

  render() {
    return <TextFieldStyle>Question Text</TextFieldStyle>;
  }
}
