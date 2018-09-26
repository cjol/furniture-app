import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";
import  {mainColor} "@style";
const RectangularButtonStyle = styled.div`
  display: flex;
`;
const ButtonLabelStyle = styled.div`
  align-items: center;
  font-family: "Arial" serif;
  font-size: 14px;
  color: white;
  background-color: ${mainColor}
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
