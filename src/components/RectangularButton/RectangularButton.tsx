import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";
import { darkerGreen } from "@style";
import { mainFont } from "@style";
const RectangularButtonStyle = styled.div`
  display: flex;
`;
const ButtonLabelStyle = styled.div`
  align-items: center;
  font-family: ${mainFont};
  font-size: 14px;
  color: white;
  background-color: ${darkerGreen};
  text-align: center;
`;

export class RectangularButton extends React.PureComponent<{
  onClick: () => any;
}> {
  static defaultProps: RectangularButton["props"] = {
    onClick: () => alert("Clicked a button")
  };

  render() {
    return (
      <RectangularButtonStyle>
        <ButtonLabelStyle>{this.props.children || "BUTTON"}</ButtonLabelStyle>
      </RectangularButtonStyle>
    );
  }
}
