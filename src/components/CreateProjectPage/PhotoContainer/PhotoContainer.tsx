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
`;
const PhotoContainerPlaceholderStyled = styled.div`
  display: flex;
  flex-direction: column;
`;
export class PhotoContainer extends React.PureComponent<{}> {
  static defaultProps: PhotoContainer["props"] = {};

  render() {
    return (
      <PhotoContainerStyled>
        <PhotoContainerPlaceholderStyled>
          <Subheading />
          <PlainText />
        </PhotoContainerPlaceholderStyled>
        <RoundButton>
          <Add />
        </RoundButton>
      </PhotoContainerStyled>
    );
  }
}
