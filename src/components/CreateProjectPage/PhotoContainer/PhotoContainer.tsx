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
  padding-top: 12px;
  padding-bottom: 12px;
`;
const PhotoContainerInstructionsStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export class PhotoContainer extends React.PureComponent<{
  uploadPhoto: () => void;
}> {
  static defaultProps: PhotoContainer["props"] = {
    uploadPhoto: () => alert("Uploading Image")
  };

  render() {
    return (
      <PhotoContainerStyled>
        <PhotoContainerInstructionsStyled>
          <Subheading>Upload Photos</Subheading>
          <PlainText>
            Add some photos of similar pieces to guide your supplier.
          </PlainText>
        </PhotoContainerInstructionsStyled>
        <ButtonContainer>
          <RoundButton onClick={this.props.uploadPhoto}>
            <Add />
          </RoundButton>
        </ButtonContainer>
      </PhotoContainerStyled>
    );
  }
}
