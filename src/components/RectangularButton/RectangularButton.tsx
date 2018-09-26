import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";
import  {darkerGreen} "@style";
import {mainFont} "@style";
const RectangularButtonStyle = styled.div`
  display: flex;
`;
const ButtonLabelStyle = styled.div`
  align-items: center;
  font-family: ${mainFont};
  font-size: 14px;
  color: white;
  background-color: ${darkerGreen},
  text-align: center;
`;

export class RectangularButton extends React.PureComponent<{}> {
  static defaultProps: RectangularButton["props"] = {};

  render() {
    return (
      <RectangularButtonStyle>
        <ButtonLabelStyle>{this.props.children || "BUTTON"}</ButtonLabelStyle>
      </RectangularButtonStyle>
    );
  }
}
