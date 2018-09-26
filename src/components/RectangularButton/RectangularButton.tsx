import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import styled from "styled-components";
const RectangularButtonStyle = styled.div`
  display: flex;
`;
const ButtonLabelStyle = styled.div`
  align-items: center;
`;

export class RectangularButton extends React.PureComponent<{}> {
  static defaultProps: RectangularButton["props"] = {};

  render() {
    return (
      <RectangularButtonStyle>
        <ButtonLabelStyle>BUTTON</ButtonLabelStyle>
      </RectangularButtonStyle>
    );
  }
}
