import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";
import { darkerGreen } from "@style";
import {
  mainFont,
  greenMain,
  normalBoxShadow,
  squareButtonRadius
} from "@style";
const RectangularButtonStyle = styled.div`
  display: flex;
  padding: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  margin-top: 24px;
  margin-bottom: 12px;
  background-color: ${greenMain};
  box-shadow: ${normalBoxShadow};
  border-radius: ${squareButtonRadius};
  flex-grow: 0;
  align-self: center;
`;
const ButtonLabelStyle = styled.div`
  align-items: center;
  font-family: ${mainFont};
  font-size: 14px;
  color: white;
  text-align: center;
`;

export class RectangularButton extends React.PureComponent<{
  onClick: () => any;
  className?: string;
}> {
  static defaultProps: RectangularButton["props"] = {
    onClick: () => alert("Clicked a button"),
    className: ""
  };

  render() {
    return (
      <RectangularButtonStyle
        className={this.props.className}
        onClick={this.props.onClick}
      >
        <ButtonLabelStyle>{this.props.children || "BUTTON"}</ButtonLabelStyle>
      </RectangularButtonStyle>
    );
  }
}
