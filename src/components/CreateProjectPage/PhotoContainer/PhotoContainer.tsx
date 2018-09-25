import * as React from "react";
import { Placeholder } from "Components/Placeholder";
import { RoundButton } from "Components/RoundButton/RoundButton";
import { PlainText } from "Components/PlainText/PlainText";
import { Subheading } from "Components/Subheading/Subheading";
import styled from "styled-components";
const PhotoContainerStyled = styled.div`
  display: flex;
  flex-direction: rowS;
`;
export class PhotoContainer extends React.PureComponent<{}> {
  static defaultProps: PhotoContainer["props"] = {};

  render() {
    return (
      <PhotoContainerStyled>
        <Placeholder orientation="column">
          <Subheading />
          <PlainText />
        </Placeholder>
        <RoundButton />
      </PhotoContainerStyled>
    );
  }
}
