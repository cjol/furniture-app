import * as React from "react";
import { Add } from "@material-ui/icons";
import { Placeholder } from "Components/Placeholder";
import { RoundButton } from "Components/RoundButton/RoundButton";
import { PlainText } from "Components/PlainText/PlainText";
import { Subheading } from "Components/Subheading/Subheading";
import styled from "styled-components";
const PhotoContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  flex-grow: 1;
`;
const PhotoContainerInstructionsStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
export class PhotoContainer extends React.PureComponent<{}> {
  static defaultProps: PhotoContainer["props"] = {};

  render() {
    return (
      <PhotoContainerStyled>
        <PhotoContainerInstructionsStyled>
          <Subheading>Upload Photos</Subheading>
          <PlainText>Instructions go here</PlainText>
        </PhotoContainerInstructionsStyled>
        <RoundButton>
          <Add />
        </RoundButton>
      </PhotoContainerStyled>
    );
  }
}
